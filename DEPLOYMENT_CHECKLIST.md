# Deployment Checklist for Image Loading Issues

## ✅ Pre-Deployment Checks

### 1. Image Files
- [ ] All doctor images are in `frontend/public/doctors/`
- [ ] Image paths in `assets.js` use `/doctors/doc1.png` format
- [ ] No old image imports in `assets.js`

### 2. Build Configuration
- [ ] Vite config updated with proper asset handling
- [ ] No build errors in development

### 3. Error Handling
- [ ] Image error handling added to Doctors component
- [ ] Console logging for debugging

## 🚀 Deployment Steps

### 1. Frontend Deployment (Vercel/Netlify)
- **Root Directory:** `frontend`
- **Build Command:** `npm install && npm run build`
- **Output Directory:** `dist`
- **Environment Variables:**
  ```
  VITE_BACKEND_URL=https://doctor-appointments-3.onrender.com
  ```

### 2. Backend Deployment (Render)
- **Root Directory:** `backend`
- **Build Command:** `npm install`
- **Start Command:** `npm start`

## 🔍 Debugging Steps

### 1. Test Image Loading
- Visit `/image-test` route to test image loading
- Check browser console for loading/error messages

### 2. Check Network Tab
- Open browser DevTools
- Go to Network tab
- Reload page and check for failed image requests

### 3. Verify Public Folder
- Ensure images are in `frontend/public/doctors/`
- Check file permissions

### 4. Test Different Browsers
- Test in Chrome, Firefox, Safari
- Check mobile browsers

## 🐛 Common Issues & Solutions

### Issue: Images not loading in production
**Solution:** 
- Use public folder paths (`/doctors/doc1.png`)
- Add error handling with fallback images
- Check deployment platform static file serving

### Issue: Images load in development but not production
**Solution:**
- Verify build process includes public folder
- Check deployment platform configuration
- Use absolute paths from domain root

### Issue: CORS errors
**Solution:**
- Ensure images are served from same domain
- Check backend CORS configuration

## 📝 Testing Commands

```bash
# Test local build
cd frontend
npm run build
npm run preview

# Test image accessibility
curl -I http://localhost:5173/doctors/doc1.png
```

## 🔧 Environment Variables

### Frontend (.env)
```
VITE_BACKEND_URL=https://doctor-appointments-3.onrender.com
```

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
``` 