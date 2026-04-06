"""
Fix Keras 3.x model to work with TensorFlow 2.13 (Keras 2.13)
This script patches the model config to remove incompatible parameters
"""
import h5py
import json
import shutil
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'best_model (2).h5')
BACKUP_PATH = os.path.join(os.path.dirname(__file__), '..', 'best_model (2)_backup.h5')
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), '..', 'best_model_fixed.h5')

print("Keras 3.x to 2.x Model Compatibility Fixer")
print("=" * 60)

# Backup original file
print(f"Creating backup: {BACKUP_PATH}")
shutil.copy2(MODEL_PATH, BACKUP_PATH)
print("✓ Backup created")

# Fix the model config
print(f"\nPatching model config in: {MODEL_PATH}")

try:
    with h5py.File(MODEL_PATH, 'r+') as f:
        if 'model_config' in f.attrs:
            # Load config
            config_str = f.attrs['model_config']
            if isinstance(config_str, bytes):
                config_str = config_str.decode('utf-8')
            
            config = json.loads(config_str)
            print(f"  Original model class: {config.get('class_name')}")
            
            # Function to fix layer configs recursively
            def fix_layer_config(layer_config):
                if isinstance(layer_config, dict):
                    # Fix InputLayer: remove 'shape' if it exists
                    if layer_config.get('class_name') == 'InputLayer':
                        if 'config' in layer_config and 'shape' in layer_config['config']:
                            del layer_config['config']['shape']
                            print(f"    Fixed InputLayer: removed 'shape' argument")
                    
                    # Remove dtype from config
                    if 'config' in layer_config and 'dtype' in layer_config['config']:
                        del layer_config['config']['dtype']
                        print(f"    Fixed {layer_config.get('class_name')}: removed 'dtype' argument")

                    # Fix LayerNormalization: remove 'rms_scaling' if it exists
                    if layer_config.get('class_name') == 'LayerNormalization':
                        if 'config' in layer_config and 'rms_scaling' in layer_config['config']:
                            del layer_config['config']['rms_scaling']
                            print(f"    Fixed LayerNormalization: removed 'rms_scaling' argument")
                    
                    # Fix MultiHeadAttention: remove 'query_shape', 'key_shape', 'value_shape' if it exists
                    if layer_config.get('class_name') == 'MultiHeadAttention':
                        for shape_key in ['query_shape', 'key_shape', 'value_shape']:
                            if 'config' in layer_config and shape_key in layer_config['config']:
                                del layer_config['config'][shape_key]
                                print(f"    Fixed MultiHeadAttention: removed '{shape_key}' argument")

                    # Recursively fix nested structures
                    for key, value in layer_config.items():
                        if isinstance(value, dict):
                            fix_layer_config(value)
                        elif isinstance(value, list):
                            for item in value:
                                if isinstance(item, dict):
                                    fix_layer_config(item)
            
            # Fix all layers
            if 'config' in config:
                if 'layers' in config['config']:
                    print(f"  Fixing {len(config['config']['layers'])} layers...")
                    for layer in config['config']['layers']:
                        fix_layer_config(layer)
            
            # Save patched config back
            config_str = json.dumps(config)
            f.attrs.modify('model_config', config_str.encode('utf-8'))
            print("✓ Model config patched successfully")
    
    print(f"\n✓ Model has been fixed in-place: {MODEL_PATH}")
    print(f"✓ Backup saved at: {BACKUP_PATH}")
    print("\nThe Flask server should now reload and load the model successfully!")
    
except Exception as e:
    print(f"✗ Error: {e}")
    print(f"\nRestoring from backup...")
    shutil.copy2(BACKUP_PATH, MODEL_PATH)
    print("Original file restored")

print("=" * 60)
