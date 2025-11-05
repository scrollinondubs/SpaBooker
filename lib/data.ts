import { Service, Staff, TimeSlot } from '@/types'

export const services: Service[] = [
  {
    id: 'swedish-massage',
    name: 'Swedish Massage',
    description: 'Relaxing full-body massage with light to medium pressure',
    duration: 60,
    price: 80,
    category: 'massage',
  },
  {
    id: 'deep-tissue-massage',
    name: 'Deep Tissue Massage',
    description: 'Therapeutic massage targeting muscle tension and knots',
    duration: 90,
    price: 120,
    category: 'massage',
  },
  {
    id: 'hydrating-facial',
    name: 'Hydrating Facial',
    description: 'Nourishing treatment for dry and dull skin',
    duration: 45,
    price: 65,
    category: 'facial',
  },
]

export const staff: Staff[] = [
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    title: 'Senior Therapist',
    specialties: ['Swedish Massage', 'Deep Tissue'],
  },
  {
    id: 'emily-chen',
    name: 'Emily Chen',
    title: 'Massage Therapist',
    specialties: ['Swedish Massage'],
  },
  {
    id: 'michael-brown',
    name: 'Michael Brown',
    title: 'Esthetician',
    specialties: ['Hydrating Facial'],
  },
]

// Generate time slots for today
export function generateTimeSlots(date: Date): TimeSlot[] {
  const slots: TimeSlot[] = []
  const startHour = 9 // 9 AM
  const endHour = 18 // 6 PM

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      const amPm = hour >= 12 ? 'PM' : 'AM'
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
      const displayTime = `${displayHour}:${minute.toString().padStart(2, '0')} ${amPm}`

      slots.push({
        time: displayTime,
        available: Math.random() > 0.3, // 70% available
      })
    }
  }

  return slots
}
