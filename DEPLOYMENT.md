# Deployment Guide - Pneumonia Detection Application

This guide covers deploying your application to **free platforms** with a public URL.

## 🚀 Recommended Free Deployment Options

### Option 1: Render (Best for Full-Stack Apps) ⭐ RECOMMENDED

**Why Render?**
- Free tier available
- Easy to deploy both frontend and backend
- Automatic HTTPS
- No credit card required for free tier

#### Step 1: Prepare Your Backend for Render

1. Create `render.yaml` in project root:

```yaml
services:
  - type: web
    name: pneumonia-backend
    env: python
    buildCommand: pip install -r backend/requirements.txt
    startCommand: cd backend && python app.py
    envVars:
      - key: PYTHON_VERSION
        value: 3.8.10
```

2. Update `backend/app.py` to use environment port:

```python
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
```

3. Create `backend/Procfile`:
```
web: python app.py
```

#### Step 2: Deploy Backend to Render

1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `pneumonia-backend`
   - **Root Directory**: `backend`
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
5. Click "Create Web Service"
6. **Copy your backend URL** (e.g., `https://pneumonia-backend.onrender.com`)

#### Step 3: Deploy Frontend to Render

1. Update `frontend/package.json` to use backend URL:

```json
{
  "proxy": "https://pneumonia-backend.onrender.com"
}
```

2. Update `frontend/src/components/UploadSection.js` to use full API URL:

```javascript
const response = await axios.post('https://pneumonia-backend.onrender.com/api/predict', formData, {
```

3. In Render dashboard, click "New +" → "Static Site"
4. Configure:
   - **Name**: `pneumonia-frontend`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `build`
5. Click "Create Static Site"
6. **Your app is live!** 🎉

---

### Option 2: Railway (Easiest Deployment)

**Why Railway?**
- Super easy deployment
- Free $5 credit per month
- Automatic deployments from GitHub

#### Deploy on Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `pnemonia-detection` repository
5. Railway will auto-detect and deploy both services
6. Set environment variables:
   - `PYTHON_VERSION=3.8`
   - `PORT=5000`
7. Get your public URLs from Railway dashboard

---

### Option 3: Vercel (Frontend) + Render/PythonAnywhere (Backend)

#### Frontend on Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project" → Import your GitHub repo
3. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
4. Add environment variable:
   - `REACT_APP_API_URL`: Your backend URL
5. Deploy - You'll get a URL like `https://pneumonia-detection.vercel.app`

#### Backend on PythonAnywhere (Free)

1. Go to [pythonanywhere.com](https://www.pythonanywhere.com) and sign up
2. Create a new web app (Python 3.8, Flask)
3. Upload your backend files
4. Install requirements: `pip install -r requirements.txt`
5. Configure WSGI file to point to your `app.py`
6. Reload web app
7. Your API: `https://yourusername.pythonanywhere.com`

---

### Option 4: Netlify (Frontend) + Render (Backend)

#### Frontend on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub and select your repo
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
5. Add environment variable:
   - `REACT_APP_API_URL`: Your backend URL
6. Deploy!

---

## 📝 Required Code Updates for Deployment

### 1. Update Backend CORS Settings

In `backend/app.py`, update CORS to allow your frontend domain:

```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=[
    "http://localhost:3000",  # Local development
    "https://your-frontend-url.vercel.app",  # Production
    "https://your-frontend-url.netlify.app",  # Or Netlify
    "*"  # Allow all (use only for testing)
])
```

### 2. Update Frontend API Calls

Create `frontend/src/config.js`:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default API_URL;
```

Update `frontend/src/components/UploadSection.js`:

```javascript
import API_URL from '../config';

// In handleFile function:
const response = await axios.post(`${API_URL}/api/predict`, formData, {
```

### 3. Environment Variables

Create `frontend/.env.production`:

```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

---

## 🔧 Important Deployment Notes

### Model File Handling

**Problem**: Model file (230MB) exceeds most platform limits

**Solutions**:

1. **Upload to Cloud Storage**:
   - Upload model to **Google Drive** or **Dropbox**
   - Download in startup script
   - Add to `backend/app.py`:

```python
import gdown
import os

MODEL_PATH = 'best_model (2).h5'
if not os.path.exists(MODEL_PATH):
    print("Downloading model...")
    gdown.download(
        'https://drive.google.com/uc?id=YOUR_FILE_ID',
        MODEL_PATH,
        quiet=False
    )
```

2. **Use Git LFS** (on platforms that support it):
```bash
git lfs install
git lfs track "*.h5"
git add .gitattributes
git add "best_model (2).h5"
git commit -m "Add model with LFS"
git push
```

3. **Use Railway/Render Persistent Disk** (paid feature)

---

## 🎯 Quick Deployment Checklist

- [ ] Update `app.py` to use `PORT` environment variable
- [ ] Add CORS origins for production
- [ ] Create `Procfile` for backend
- [ ] Update frontend API URL to production backend
- [ ] Add `.env.production` file
- [ ] Upload model file to cloud storage
- [ ] Test backend API endpoint directly
- [ ] Test frontend with production API
- [ ] Update README with live URLs

---

## 💰 Cost Comparison

| Platform | Frontend | Backend | Model Storage | Monthly Cost |
|----------|----------|---------|---------------|--------------|
| **Render** | Free | Free (750 hrs) | Need external | **$0** |
| **Railway** | Free | $5 credit | Included | **$0** (limited) |
| **Vercel + PythonAnywhere** | Free | Free | Need external | **$0** |
| **Netlify + Render** | Free | Free | Need external | **$0** |

---

## 🚨 Common Issues & Solutions

### Issue 1: Backend Timeout
**Solution**: Render free tier sleeps after 15 min inactivity. First request takes 30s to wake up.

### Issue 2: Model File Too Large
**Solution**: Use Google Drive download script or Git LFS

### Issue 3: CORS Errors
**Solution**: Add your frontend domain to CORS allowed origins

### Issue 4: Build Fails
**Solution**: Check Python/Node versions match your local environment

---

## 🌐 Recommended: Render Deployment (All-in-One)

**Best for beginners and fastest setup**:

1. Deploy backend to Render
2. Deploy frontend to Render
3. Upload model to Google Drive
4. Share public URL with anyone!

**Total time**: ~15 minutes  
**Cost**: $0/month

---

## 📞 Need Help?

1. Check platform documentation
2. Review deployment logs for errors
3. Test API endpoints with Postman first
4. Ensure environment variables are set correctly

Good luck with your deployment! 🚀
