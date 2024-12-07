export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Hans Mueller',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548',
    description: 'With over 20 years of experience in traditional Black Forest cuisine, Hans leads our kitchen with passion and creativity.'
  },
  {
    id: '2',
    name: 'Maria Schmidt',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8',
    description: 'Maria is renowned for her authentic Black Forest cake and traditional German pastries.'
  },
  {
    id: '3',
    name: 'Thomas Weber',
    role: 'Restaurant Manager',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    description: 'Thomas ensures every guest receives the warmest welcome and finest dining experience.'
  }
];