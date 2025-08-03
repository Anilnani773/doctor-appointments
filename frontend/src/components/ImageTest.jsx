import React from 'react';

const ImageTest = () => {
  const testImages = [
    '/doctors/doc1.png',
    '/doctors/doc2.png',
    '/doctors/doc3.png',
    '/doctors/doc4.png',
    '/doctors/doc5.png'
  ];

  const handleImageError = (e) => {
    console.log('❌ Image failed to load:', e.target.src);
  };

  const handleImageLoad = (e) => {
    console.log('✅ Image loaded successfully:', e.target.src);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Loading Test</h2>
      <div className="grid grid-cols-2 gap-4">
        {testImages.map((src, index) => (
          <div key={index} className="border p-2">
            <p className="text-sm mb-2">{src}</p>
            <img 
              src={src} 
              alt={`Test ${index + 1}`}
              className="w-full h-32 object-cover"
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest; 