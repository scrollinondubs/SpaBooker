'use client'

import { useState } from 'react'
import { services } from '@/lib/data'
import { ServiceCard } from '@/components/service-card'
import { Badge } from '@/components/ui/badge'
import { Service } from '@/types'

type FilterCategory = 'all' | 'massage' | 'facial'

export default function ServicesPage() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all')

  const filteredServices = services.filter(service =>
    selectedFilter === 'all' ? true : service.category === selectedFilter
  )

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground px-6 py-6 rounded-b-[42px]">
        <h1 className="text-2xl font-bold">Serenity Spa</h1>
      </header>

      {/* Content */}
      <div className="px-6 py-6">
        <h2 className="text-xl font-semibold mb-4">Our Services</h2>

        {/* Filters */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">Filter by:</p>
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={selectedFilter === 'all' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 rounded-full"
              onClick={() => setSelectedFilter('all')}
            >
              All
            </Badge>
            <Badge
              variant={selectedFilter === 'massage' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 rounded-full"
              onClick={() => setSelectedFilter('massage')}
            >
              Massage
            </Badge>
            <Badge
              variant={selectedFilter === 'facial' ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 rounded-full"
              onClick={() => setSelectedFilter('facial')}
            >
              Facial
            </Badge>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </main>
  )
}
