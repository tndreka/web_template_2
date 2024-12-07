import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex space-x-2">
        <button
          onClick={() => i18n.changeLanguage('de')}
          className={`px-3 py-1 rounded-md ${
            i18n.language === 'de'
              ? 'bg-forest-600 text-white'
              : 'bg-white text-forest-600'
          } transition-colors`}
        >
          DE
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className={`px-3 py-1 rounded-md ${
            i18n.language === 'en'
              ? 'bg-forest-600 text-white'
              : 'bg-white text-forest-600'
          } transition-colors`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}