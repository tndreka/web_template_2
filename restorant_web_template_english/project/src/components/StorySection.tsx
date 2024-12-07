import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function StorySection({ title, content, image, imageAlt, reverse = false }: StorySectionProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-16`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <div className="h-64 md:h-96">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2"
      >
        <h2 className="text-3xl font-old-standard text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </motion.div>
    </div>
  );
}