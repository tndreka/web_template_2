import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Calendar, Clock, Users } from 'lucide-react';

const reservationSchema = z.object({
  date: z.string().min(1, 'Bitte wählen Sie ein Datum'),
  time: z.string().min(1, 'Bitte wählen Sie eine Uhrzeit'),
  guests: z.string().min(1, 'Bitte wählen Sie die Anzahl der Gäste'),
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().min(10, 'Bitte geben Sie eine gültige Telefonnummer ein'),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export function ReservationForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = (data: ReservationFormData) => {
    console.log(data);
    alert(t('reservation.form.success'));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="date" className="block text-gray-700 mb-2 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          {t('reservation.form.date')}
        </label>
        <Input
          type="date"
          id="date"
          {...register('date')}
          error={!!errors.date}
        />
        {errors.date && (
          <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="time" className="block text-gray-700 mb-2 flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          {t('reservation.form.time')}
        </label>
        <Select
          id="time"
          {...register('time')}
          error={!!errors.time}
        >
          <option value="">{t('reservation.form.selectTime')}</option>
          {['11:30', '12:00', '12:30', '13:00', '18:00', '18:30', '19:00', '19:30', '20:00'].map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </Select>
        {errors.time && (
          <p className="mt-1 text-sm text-red-500">{errors.time.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="guests" className="block text-gray-700 mb-2 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          {t('reservation.form.guests')}
        </label>
        <Select
          id="guests"
          {...register('guests')}
          error={!!errors.guests}
        >
          <option value="">{t('reservation.form.selectGuests')}</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? t('reservation.form.guest') : t('reservation.form.guests_plural')}
            </option>
          ))}
        </Select>
        {errors.guests && (
          <p className="mt-1 text-sm text-red-500">{errors.guests.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          {t('reservation.form.name')}
        </label>
        <Input
          id="name"
          {...register('name')}
          error={!!errors.name}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-2">
          {t('reservation.form.email')}
        </label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          error={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-gray-700 mb-2">
          {t('reservation.form.phone')}
        </label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          error={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        {t('reservation.form.submit')}
      </Button>
    </form>
  );
}