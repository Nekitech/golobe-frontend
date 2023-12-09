export interface Hotel {
    id: number
    name: string
    stars: number
    rating: number
    count_reviews: number
    amenities: string
    address: string
    price_per_night: number
    url_image?: string
    freebies?: string
}