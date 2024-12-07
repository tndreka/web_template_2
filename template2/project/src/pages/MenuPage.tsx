import React from 'react';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menu';
import { MenuSection } from '../components/MenuSection';

export function MenuPage() {
  const categories = {
    starters: menuItems.filter(item => item.category === 'starters'),
    mains: menuItems.filter(item => item.category === 'mains'),
    desserts: menuItems.filter(item => item.category === 'desserts'),
    drinks: menuItems.filter(item => item.category === 'drinks')
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-old-standard text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Black Forest dishes,
            prepared with locally sourced ingredients and traditional recipes
          </p>
        </div>

        {categories.starters.length > 0 && (
          <MenuSection
            title="Starters"
            germanTitle="Vorspeisen"
            items={categories.starters}
          />
        )}

        {categories.mains.length > 0 && (
          <MenuSection
            title="Main Courses"
            germanTitle="Hauptgerichte"
            items={categories.mains}
          />
        )}

        {categories.desserts.length > 0 && (
          <MenuSection
            title="Desserts"
            germanTitle="Nachspeisen"
            items={categories.desserts}
          />
        )}

        {categories.drinks.length > 0 && (
          <MenuSection
            title="Drinks"
            germanTitle="Getränke"
            items={categories.drinks}
          />
        )}
      </motion.div>
    </div>
  );
}