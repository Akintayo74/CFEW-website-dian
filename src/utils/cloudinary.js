import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';

// Initialize Cloudinary with your cloud name
const cld = new Cloudinary({
  cloud: {
    cloudName: 'duppprtyh' // Replace with your actual Cloudinary cloud name
  },
  url: {
    secure: true // Force HTTPS
  }
});

/**
 * Get optimized image URL from Cloudinary
 * @param {string} publicId - The public ID of the image
 * @param {Object} options - Transformation options
 * @param {number} options.width - Desired width of the image
 * @param {number} options.height - Desired height of the image
 * @param {string} options.crop - Crop mode (e.g., 'fill', 'fit', 'crop')
 * @returns {string} - Optimized image URL
 */
export const getOptimizedImage = (publicId, { width, height, crop = 'fill' } = {}) => {
  if (!publicId) return '';
  
  // If it's already a full URL, return as is (might be an external image)
  if (publicId.startsWith('http')) return publicId;
  
  try {
    const img = cld.image(publicId);
    
    // Apply transformations
    if (width || height) {
      img.resize(
        fill()
          .width(width)
          .height(height)
          .crop(crop)
      );
    }
    
    // Auto format and quality for best performance
    img.format(auto()).quality(autoQuality());
    
    return img.toURL();
  } catch (error) {
    console.error('Error generating Cloudinary URL:', error);
    return publicId; // Fallback to original URL if there's an error
  }
};

/**
 * Get a responsive image source set
 * @param {string} publicId - The public ID of the image
 * @param {Object} options - Options for the image
 * @returns {Object} - Object with src and srcSet for the image
 */
export const getResponsiveImage = (publicId, options = {}) => {
  const src = getOptimizedImage(publicId, { ...options, width: options.width || 800 });
  const srcSet = [
    `${getOptimizedImage(publicId, { ...options, width: 400 })} 400w`,
    `${getOptimizedImage(publicId, { ...options, width: 800 })} 800w`,
    `${getOptimizedImage(publicId, { ...options, width: 1200 })} 1200w`,
    `${getOptimizedImage(publicId, { ...options, width: 1600 })} 1600w`
  ].join(', ');
  
  return { src, srcSet };
};
