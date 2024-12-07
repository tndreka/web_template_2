import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
    alt: 'Restaurant exterior',
    category: 'Ambiance'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6',
    alt: 'Schnitzel dish',
    category: 'Food'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
    alt: 'Black Forest Cake',
    category: 'Desserts'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1464500422302-6188776dcb2f',
    alt: 'Restaurant interior',
    category: 'Ambiance'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1542320868-f4d80389e1c4',
    alt: 'Black Forest landscape',
    category: 'Views'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1624174503860-478619028ab3',
    alt: 'Black Forest Ham platter',
    category: 'Food'
  }
];

export function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-old-standard text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the atmosphere and culinary delights of Gasthaus Schwarzwald
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">{image.alt}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}