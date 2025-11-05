export interface Service {
  id: string
  name: string
  description: string
  duration: number // in minutes
  price: number
  category: 'massage' | 'facial' | 'other'
}

export interface Staff {
  id: string
  name: string
  title: string
  specialties: string[]
}

export interface TimeSlot {
  time: string
  available: boolean
  staffId?: string
}

export interface Appointment {
  id: string
  serviceId: string
  staffId?: string
  customerName: string
  customerPhone: string
  date: Date
  time: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}
