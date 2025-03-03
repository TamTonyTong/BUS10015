import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Plane,
  Hotel,
  Car,
  Ship,
  MapPin,
  Calendar,
  Users,
  Search,
  Star,
  ChevronRight,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Wanderlust</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="#destinations" className="text-sm font-medium hover:text-primary">
              Destinations
            </Link>
            <Link href="#packages" className="text-sm font-medium hover:text-primary">
              Packages
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Sign In
            </Button>
            <Button size="sm">Book Now</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero.jpeg?height=800&width=1920"
              alt="Beautiful travel destination"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover Vietnam&apos;s Hidden Gems
              </h1>
              <p className="text-lg md:text-xl">
                Unforgettable journeys tailored to your dreams. Experience authentic travel with expert guidance.
              </p>
              <div className="pt-4">
                <Button size="lg" className="mr-4">
                  Explore Destinations
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                  View Offers
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="container -mt-8 relative z-20">
          <Card className="border shadow-lg">
            <CardContent className="p-6">
              <div className="grid gap-6 md:grid-cols-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Destination</span>
                  </div>
                  <Input placeholder="Where to?" className="h-10" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Check-in</span>
                  </div>
                  <Input type="date" className="h-10" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Check-out</span>
                  </div>
                  <Input type="date" className="h-10" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Travelers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input type="number" defaultValue="2" min="1" className="h-10" />
                    <Button size="icon" className="h-10 w-10">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Services Section */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-2">Everything you need for the perfect journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Flights</h3>
                <p className="text-muted-foreground mt-2">Find the best deals on flights to anywhere in the world.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Hotel className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Hotels</h3>
                <p className="text-muted-foreground mt-2">Book accommodations that match your style and budget.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Car Rentals</h3>
                <p className="text-muted-foreground mt-2">Explore at your own pace with our car rental options.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Ship className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Cruises</h3>
                <p className="text-muted-foreground mt-2">
                  Unforgettable experiences on the world&apos; best cruise lines.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Destinations
        <section id="destinations" className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Featured Destinations</h2>
              <p className="text-muted-foreground mt-2">Popular places loved by our travelers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Santorini, Greece", price: "$1,299", image: "/placeholder.svg?height=400&width=600" },
                { name: "Bali, Indonesia", price: "$999", image: "/placeholder.svg?height=400&width=600" },
                { name: "Kyoto, Japan", price: "$1,499", image: "/placeholder.svg?height=400&width=600" },
                { name: "Machu Picchu, Peru", price: "$1,899", image: "/placeholder.svg?height=400&width=600" },
                { name: "Amalfi Coast, Italy", price: "$1,599", image: "/placeholder.svg?height=400&width=600" },
                { name: "Serengeti, Tanzania", price: "$2,299", image: "/placeholder.svg?height=400&width=600" },
              ].map((destination, index) => (
                <Card key={index} className="overflow-hidden group">
                  <div className="relative h-64">
                    <Image
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                      <p className="text-white/90">Starting from {destination.price}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm ml-2">5.0</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Explore <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg">View All Destinations</Button>
            </div>
          </div>
        </section> */}

        {/* Special Offers */}
        <section id="packages" className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Special Offers</h2>
            <p className="text-muted-foreground mt-2">Limited-time deals you don&apos;t want to miss</p>
          </div>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
          <div className="flex justify-center">
            <Card className="overflow-hidden">
              <div className="relative h-100 md:h-150">
                <Image
                  src="/2.jpeg?height=1000&width=800"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  30% OFF
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">Vietnam Rounded Trip</h3>
                <p className="text-muted-foreground mt-2 break-words">
                Embark on an unforgettable 14-day adventure from Ho Chi Minh City to Hanoi,<br></br> traveling by motorbike, train, and local transport to experience Vietnam&apos;s rich cultural tapestry
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg line-through text-muted-foreground">$3,999</span>
                    <span className="text-2xl font-bold ml-2">$3,199</span>
                    <span className="text-sm text-muted-foreground"> / per person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
            {/* <Card className="overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="European tour special offer"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  25% OFF
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold">European Capitals Tour</h3>
                <p className="text-muted-foreground mt-2">
                  10 days exploring London, Paris, Amsterdam, and Berlin with guided tours included.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-lg line-through text-muted-foreground">$2,899</span>
                    <span className="text-2xl font-bold ml-2">$2,174</span>
                    <span className="text-sm text-muted-foreground"> / per person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">What Our Travelers Say</h2>
              <p className="text-muted-foreground mt-2">Real experiences from satisfied customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  location: "New York, USA",
                  quote:
                    "The trip was flawlessly organized. Every detail was taken care of, and the local guides were exceptional. Will definitely book with Wanderlust again!",
                  avatar: "/3.jpeg?height=100&width=100",
                },
                {
                  name: "Michael Chen",
                  location: "Toronto, Canada",
                  quote:
                    "Our family journey in Da Nang exceeded all expectations. The accommodations were luxurious yet authentic, and we saw all the Big Five! A dream come true.",
                  avatar: "/5.jpeg?height=100&width=100",
                },
                {
                  name: "Emma Rodriguez",
                  location: "London, UK",
                  quote:
                    "The Ha Giang trip was perfect. The private transfers made everything stress-free, and the selected hotels had the most amazing views.",
                  avatar: "/4.jpeg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex mb-4">
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <p className="italic">&quot;{testimonial.quote}&quot;</p>
                    </div>
                    <div className="flex items-center gap-4 mt-6 pt-4 border-t">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="container py-16">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold">Get Travel Inspiration</h2>
                  <p className="mt-2 text-primary-foreground/90">
                    Subscribe to our newsletter for exclusive deals, travel tips, and destination guides.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button variant="secondary" className="shrink-0">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
{/* afd */}
        {/* About Us */}
        <section id="about" className="py-16 bg-muted">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Wanderlust</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2010, Wanderlust has been helping travelers discover the world&apos;s most amazing destinations
                  for over a decade. Our mission is to create unforgettable journeys that connect people with authentic
                  experiences.
                </p>
                <p className="text-muted-foreground mb-4">
                  What sets us apart is our team of passionate travel experts who have personally visited the
                  destinations we recommend. We believe in responsible tourism and work with local partners who share
                  our values.
                </p>
                <div className="flex gap-4 mt-6">
                  <Button variant="outline">Our Story</Button>
                  <Button variant="outline">Meet The Team</Button>
                </div>
              </div>
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/Cover Page.png?height=600&width=800"
                  alt="Our team exploring destinations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="container py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-muted-foreground mb-8">
              Our travel experts are ready to help you plan the perfect trip. Contact us today for a personalized
              itinerary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book a Consultation</Button>
              <Button variant="outline" size="lg">
                Browse Packages
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Plane className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Wanderlust</span>
              </div>
              <p className="text-muted-foreground mb-4">Creating unforgettable travel experiences since 2010.</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#destinations" className="text-muted-foreground hover:text-primary">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="text-muted-foreground hover:text-primary">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Travel Types</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Beach Vacations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Adventure Tours
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Luxury Getaways
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Family Trips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Honeymoons
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Travel Street</p>
                <p>New York, NY 10001</p>
                <p className="mt-2">Email: info@wanderlust.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Wanderlust Travel Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

