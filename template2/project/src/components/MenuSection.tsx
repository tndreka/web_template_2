import React from 'react';
import { MenuItem } from '../types/menu';
import { MenuCard } from './MenuCard';

interface MenuSectionProps {
  title: string;
  germanTitle: string;
  items: MenuItem[];
}

export function MenuSection({ title, germanTitle, items }: MenuSectionProps) {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-old-standard text-gray-900 mb-2">{title}</h2>
        <p className="text-xl text-forest-600 font-old-standard">{germanTitle}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}