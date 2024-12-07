import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

export function ReservationsPage() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a booking system
    alert('Thank you for your reservation request. We will confirm shortly.');
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-old-standard text-gray-900 mb-4">Make a Reservation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for an authentic Black Forest dining experience
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-6">
              <label htmlFor="date" className="block text-gray-700 mb-2 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="time" className="block text-gray-700 mb-2 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Time
              </label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              >
                <option value="">Select a time</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="guests" className="block text-gray-700 mb-2 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Number of Guests
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-forest-600 text-white py-3 rounded-lg hover:bg-forest-700 transition-colors"
            >
              Request Reservation
            </button>
          </motion.form>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">For groups larger than 8 people or special events,</p>
            <p>please call us at: <span className="font-semibold">+49 (0) 7676 123456</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}