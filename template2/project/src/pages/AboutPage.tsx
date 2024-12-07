import React from 'react';
import { motion } from 'framer-motion';
import { StorySection } from '../components/StorySection';
import { TeamMember } from '../components/TeamMember';
import { teamMembers } from '../data/team';

export function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-old-standard text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through tradition, passion, and authentic Black Forest cuisine
          </p>
        </motion.div>

        <StorySection
          title="A Family Tradition Since 1952"
          content="Gasthaus Schwarzwald was founded by the Mueller family in 1952, nestled in the heart of Germany's Black Forest. What began as a small tavern serving local foresters and travelers has evolved into one of the region's most beloved restaurants, while maintaining its authentic charm and traditional recipes passed down through generations."
          image="https://images.unsplash.com/photo-1464500422302-6188776dcb2f"
          imageAlt="Historic Black Forest building"
        />

        <StorySection
          title="Our Connection to the Black Forest"
          content="Our location in the Black Forest isn't just about scenery – it's integral to our cuisine. We source our ingredients from local farmers and producers, including wild mushrooms, berries, and herbs from the forest itself. Our smoked ham and trout are prepared using traditional Black Forest methods, and our water comes from natural mountain springs."
          image="https://images.unsplash.com/photo-1542320868-f4d80389e1c4"
          imageAlt="Black Forest landscape"
          reverse
        />

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-old-standard text-gray-900 text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map(member => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-forest-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-old-standard text-gray-900 mb-4">Our Philosophy</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Gasthaus Schwarzwald, we believe in preserving the authentic flavors and traditions of Black Forest cuisine while embracing modern culinary techniques. Every dish we serve is a celebration of our region's rich culinary heritage and the bountiful ingredients that surround us.
          </p>
        </motion.div>
      </div>
    </div>
  );
}