# Pneumonia Detection System - Setup Guide

A professional medical web application for detecting pneumonia from chest X-ray images using AI/Deep Learning.

## 🏥 Features

- **AI-Powered Detection**: Advanced deep learning model for accurate pneumonia detection
- **Professional Medical UI**: Clean, responsive design optimized for medical professionals
- **Real-time Analysis**: Get results in 2-3 seconds
- **Detailed Reports**: Confidence scores and probability breakdowns
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Secure & Private**: Images are not stored, ensuring patient privacy

## 📋 Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm or yarn

## 🚀 Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- macOS/Linux:
```bash
source venv/bin/activate
```

4. Install Python dependencies:
```bash
pip install -r requirements.txt
```

5. Start the Flask server:
```bash
python app.py
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will open automatically at `http://localhost:3000`

## 📱 Usage

1. Open your browser and go to `http://localhost:3000`
2. Upload a chest X-ray image by:
   - Dragging and dropping the image into the upload area
   - Or clicking "Select Image" to browse your files
3. Wait 2-3 seconds for the AI analysis
4. View the results including:
   - Diagnosis (PNEUMONIA or NORMAL)
   - Confidence level
   - Detailed probability breakdown
5. Click "Analyze Another" to test more images

## 🏗️ Project Structure

```
pnemonia-detection/
├── backend/
│   ├── app.py                 # Flask API server
│   └── requirements.txt       # Python dependencies
├── frontend/
│   ├── public/
│   │   └── index.html        # HTML template
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Header.js
│   │   │   ├── UploadSection.js
│   │   │   ├── ResultsSection.js
│   │   │   ├── InfoSection.js
│   │   │   └── Footer.js
│   │   ├── App.js           # Main App component
│   │   ├── App.css          # Global styles
│   │   └── index.js         # React entry point
│   └── package.json         # Node dependencies
└── best_model (2).h5        # Trained model file
```

## 🎨 Design Features

- **Medical-grade UI**: Professional blue color scheme (#0066cc)
- **Responsive Layout**: Adapts to all screen sizes
- **Smooth Animations**: Engaging user interactions
- **Clear Typography**: Easy-to-read Inter font
- **Accessibility**: High contrast and clear visual hierarchy

## 🔧 Configuration

### Adjusting Model Input Size

If your model uses a different input size than 224x224, modify the `preprocess_image` function in `backend/app.py`:

```python
img = img.resize((YOUR_WIDTH, YOUR_HEIGHT))
```

### Changing Prediction Threshold

To adjust the confidence threshold for pneumonia detection, modify the condition in `backend/app.py`:

```python
if confidence > 0.5:  # Change 0.5 to your desired threshold
```

## 🛡️ Security Notes

- Images are processed in memory and never saved to disk
- CORS is configured for local development
- For production, configure proper CORS settings and add authentication

## 📦 Building for Production

### Frontend Build

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/build` directory.

### Backend Production

For production deployment, use a WSGI server like Gunicorn:

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 🐛 Troubleshooting

**Issue**: Backend fails to load the model
- **Solution**: Ensure `best_model (2).h5` is in the correct location relative to `app.py`

**Issue**: CORS errors
- **Solution**: Make sure the backend is running on port 5000 and the frontend on port 3000

**Issue**: Module not found errors
- **Solution**: Ensure all dependencies are installed correctly in both backend and frontend

## 📄 License

This project is for educational and informational purposes only. Always consult with qualified healthcare professionals for medical diagnosis.

## 🤝 Support

For issues or questions, please consult with your development team or refer to the documentation of the technologies used:
- [React Documentation](https://react.dev)
- [Flask Documentation](https://flask.palletsprojects.com)
- [TensorFlow Documentation](https://www.tensorflow.org)

## ⚠️ Medical Disclaimer

This AI tool is designed for educational and research purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions regarding medical conditions.
