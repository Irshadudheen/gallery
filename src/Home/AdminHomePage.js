import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const searchTags = ['Electronic', 'Camera', 'Technology', 'Blue', 'Security', 'Disk', 'Cut Out', 'Internet']

const imageUrls = [
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
  '/placeholder.svg?height=200&width=300',
]

export default function WebcamSearch() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center space-x-2 mb-8">
        <Input
          type="text"
          placeholder="Search webcam images"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow"
        />
        <Button variant="outline">Search</Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {searchTags.map((tag) => (
          <Button key={tag} variant="outline" size="sm">
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img
              src={url}
              alt={`Webcam image ${index + 1}`}
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}