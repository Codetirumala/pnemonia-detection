# Pneumonia Detection Model Files

## Important Note
The trained model files are not included in this repository because they exceed GitHub's file size limit (230MB each).

## Required Model Files
You need to add these files to the project root directory:

1. **best_model (2).h5** - The trained pneumonia detection model
2. **best_model (2)_backup.h5** - Backup of the original model (optional)

## Where to Place the Files
```
pnemonia-detection/
├── best_model (2).h5          ← Place your model here
├── best_model (2)_backup.h5   ← Optional backup
├── backend/
├── frontend/
└── ...
```

## Alternative: Use Git LFS (Large File Storage)

If you want to version control the model files, consider using Git LFS:

```bash
# Install Git LFS
git lfs install

# Track large files
git lfs track "*.h5"

# Add the gitattributes file
git add .gitattributes

# Add and commit your model files
git add "best_model (2).h5"
git commit -m "Add trained model"
git push
```

## Download Instructions
If you're a new team member, ask the project owner for:
- The trained model file(s)
- Instructions on where to download them from (e.g., Google Drive, Dropbox, etc.)

Place the downloaded files in the project root directory before running the application.
