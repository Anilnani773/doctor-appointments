# Production Deployment Guide

## 🚀 Quick Fixes Applied

### 1. Environment Variables Fallbacks
- ✅ Added fallback URLs for `VITE_BACKEND_URL` in all admin components
- ✅ Added proper error handling for missing environment variables

### 2. CORS Configuration
- ✅ Updated backend CORS to be production-ready
- ✅ Added proper origin restrictions for production

### 3. Vercel Configuration
- ✅ Fixed admin panel vercel.json destination path

### 4. Database Connection
- ✅ Added proper error handling for MongoDB connection
- ✅ Added connection event listeners for debugging

### 5. Cloudinary Configuration
- ✅ Added error handling for missing Cloudinary credentials

## 📋 Environment Variables Setup

### Backend (.env)
```bash
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

### Frontend (.env)
```bash
VITE_BACKEND_URL=https://your-backend-domain.onrender.com
```

### Admin Panel (.env)
```bash
VITE_BACKEND_URL=https://your-backend-domain.onrender.com
```

## 🔧 Deployment Steps

### 1. Backend Deployment (Render/Railway/Heroku)

**Build Command:**
```bash
npm install
```

**Start Command:**
```bash
npm start
```

**Environment Variables to Set:**
- `NODE_ENV=production`
- `MONGODB_URI` (your MongoDB connection string)
- `JWT_SECRET` (a strong secret key)
- `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY`

### 2. Frontend Deployment (Vercel)

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:**
- `VITE_BACKEND_URL` (your backend URL)

### 3. Admin Panel Deployment (Vercel)

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Environment Variables:**
- `VITE_BACKEND_URL` (your backend URL)

## 🔍 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Update the CORS origins in `backend/server.js` with your actual frontend/admin domains
   - Replace `https://your-frontend-domain.vercel.app` with your actual frontend URL
   - Replace `https://your-admin-domain.vercel.app` with your actual admin URL

2. **Database Connection Issues**
   - Check MongoDB connection string format
   - Ensure MongoDB Atlas IP whitelist includes your deployment platform
   - Verify environment variables are set correctly

3. **Image Upload Issues**
   - Verify Cloudinary credentials are correct
   - Check Cloudinary account status and limits

4. **Build Failures**
   - Ensure all dependencies are in `package.json`
   - Check for syntax errors in development first
   - Verify Node.js version compatibility

## 🧪 Testing Checklist

### Pre-Deployment:
- [ ] All features work in development
- [ ] No console errors
- [ ] Database connections work
- [ ] Image uploads work
- [ ] Authentication works

### Post-Deployment:
- [ ] Backend API responds correctly
- [ ] Frontend loads without errors
- [ ] Admin panel loads without errors
- [ ] User registration/login works
- [ ] Doctor appointments work
- [ ] Image uploads work
- [ ] All CRUD operations work

## 📞 Support

If you encounter issues:
1. Check the deployment platform logs
2. Verify environment variables are set correctly
3. Test API endpoints directly
4. Check browser console for frontend errors
5. Verify database connectivity

## 🔄 Update CORS Origins

After deploying, update the CORS origins in `backend/server.js`:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-actual-frontend-domain.vercel.app', 'https://your-actual-admin-domain.vercel.app']
    : true,
  credentials: true
}));
```

Replace the placeholder URLs with your actual deployed frontend and admin panel URLs. 