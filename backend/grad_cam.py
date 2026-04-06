import numpy as np
import cv2
import os
import matplotlib.pyplot as plt

def get_img_array(img_path, size):
    img = cv2.imread(img_path)
    img = cv2.resize(img, size)
    return np.expand_dims(img, axis=0)

def make_random_heatmap(img_array):
    # Generate a random heatmap
    return np.random.rand(img_array.shape[1], img_array.shape[2])

def save_and_display_gradcam(img_path, heatmap, cam_path="cam.jpg", alpha=0.4):
    # Load the original image
    img = cv2.imread(img_path)
    
    # Resize heatmap to match the original image size
    heatmap = cv2.resize(heatmap, (img.shape[1], img.shape[0]))
    
    # Normalize the heatmap
    heatmap = np.uint8(255 * heatmap)
    
    # Apply a colormap to the heatmap
    heatmap = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)
    
    # Superimpose the heatmap on the original image
    superimposed_img = cv2.addWeighted(heatmap, alpha, img, 1 - alpha, 0)
    
    # Save the superimposed image
    cv2.imwrite(cam_path, superimposed_img)

# Image preprocessing
img_size = (224, 224)

# Path to the pneumonia images
image_dir = os.path.join(os.path.dirname(__file__), '..', 'frontend', 'test', 'PNEUMONIA')
output_dir = 'grad_cam_images'
os.makedirs(output_dir, exist_ok=True)

# Process each image
for img_name in os.listdir(image_dir):
    img_path = os.path.join(image_dir, img_name)
    if os.path.isfile(img_path) and img_name.lower().endswith(('.png', '.jpg', '.jpeg')):
        print(f"Processing {img_path}...")
        
        # Prepare image
        img_array = get_img_array(img_path, size=img_size)

        # Generate a random heatmap
        heatmap = make_random_heatmap(img_array)

        # Save the superimposed image
        cam_path = os.path.join(output_dir, f"gradcam_{img_name}")
        save_and_display_gradcam(img_path, heatmap, cam_path)

print(f"Random Grad-CAM images saved in {output_dir}")
