import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ReservationForm } from '@/components/forms/reservation-form';

export function ReservationsPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-old-standard text-gray-900 mb-4">
            {t('reservation.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('reservation.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <ReservationForm />
          </motion.div>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">{t('reservation.form.largeGroup')}</p>
            <p>
              {t('reservation.form.callUs')}{' '}
              <span className="font-semibold">+49 (0) 7676 123456</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}