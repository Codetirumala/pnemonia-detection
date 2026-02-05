"""
Script to convert older Keras models to TensorFlow 2.13 compatible format
Run this to fix model compatibility issues
"""
import tensorflow as tf
import h5py
import json
import os

MODEL_PATH = os.path.join(os.path.dirname(__file__), '..', 'best_model (2).h5')
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), '..', 'best_model_converted.h5')

print(f"Attempting to convert model: {MODEL_PATH}")
print("-" * 60)

try:
    # Inspect the model file
    with h5py.File(MODEL_PATH, 'r') as f:
        print("Model file structure:")
        print(f"  Keys: {list(f.keys())}")
        
        if 'model_config' in f.attrs:
            model_config = json.loads(f.attrs['model_config'])
            print(f"\n  Model class: {model_config.get('class_name', 'Unknown')}")
            print(f"  Backend: {model_config.get('backend', 'Unknown')}")
        
        if 'keras_version' in f.attrs:
            print(f"  Keras version: {f.attrs['keras_version']}")
        
        if 'backend' in f.attrs:
            print(f"  Backend: {f.attrs['backend']}")
    
    print("\n" + "-" * 60)
    print("Attempting to load model...")
    
    # Try to load the model
    try:
        model = tf.keras.models.load_model(MODEL_PATH, compile=False)
        print("✓ Model loaded successfully!")
        print(f"  Input shape: {model.input_shape}")
        print(f"  Output shape: {model.output_shape}")
        print(f"  Number of layers: {len(model.layers)}")
        
        # Save in new format
        print(f"\nSaving converted model to: {OUTPUT_PATH}")
        model.save(OUTPUT_PATH, save_format='h5')
        print("✓ Model converted and saved successfully!")
        print("\nTo use the converted model, update app.py:")
        print(f"  MODEL_PATH = 'best_model_converted.h5'")
        
    except Exception as e:
        print(f"✗ Failed to load model: {e}")
        print("\nThe model may have been trained with an incompatible version.")
        print("\nOptions to fix this:")
        print("1. Retrain the model with TensorFlow 2.13.0")
        print("2. Install the same TensorFlow version used for training")
        print("3. Use TensorFlow SavedModel format instead of H5")
        
except Exception as e:
    print(f"✗ Error accessing model file: {e}")
    print("\nMake sure the model file exists at:")
    print(f"  {MODEL_PATH}")

print("\n" + "=" * 60)
