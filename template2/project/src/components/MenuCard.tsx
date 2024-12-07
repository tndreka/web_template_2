import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      {item.image && (
        <div className="relative h-48">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.seasonal && (
            <span className="absolute top-4 right-4 bg-forest-500 text-white px-3 py-1 rounded-full text-sm">
              Seasonal
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
            <p className="text-forest-600 font-old-standard">{item.germanName}</p>
          </div>
          <span className="text-xl font-semibold text-forest-700">€{item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mt-2">{item.description}</p>
        {item.allergens && item.allergens.length > 0 && (
          <div className="mt-4 text-sm text-gray-500">
            Allergens: {item.allergens.join(', ')}
          </div>
        )}
      </div>
    </motion.div>
  );
}