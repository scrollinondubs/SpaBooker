import Link from 'next/link'
import { Service } from '@/types'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
          <span className="text-lg font-semibold text-primary">${service.price}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{service.duration} minutes</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {service.description}
        </p>
        <Link href={`/book/${service.id}`} className="w-full">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
