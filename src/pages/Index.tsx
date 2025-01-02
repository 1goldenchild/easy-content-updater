import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Discover Your Life's Path Through
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"> Numerology</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Unlock the hidden meanings behind your numbers and discover your true potential with our premium numerology readings.
            </p>
            <Link to="/analysis">
              <Button size="lg" className="mt-6">Get Your Reading Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <CardHeader>
                <CardTitle>Life Path Number</CardTitle>
                <CardDescription>Discover your core purpose and life mission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your Life Path Number reveals your natural talents, opportunities, and challenges throughout your life journey.
                </p>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <CardHeader>
                <CardTitle>Expression Number</CardTitle>
                <CardDescription>Understand your natural abilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your Expression Number shows how you express yourself and interact with the world around you.
                </p>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
              <CardHeader>
                <CardTitle>Soul Urge Number</CardTitle>
                <CardDescription>Reveal your inner desires</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Your Soul Urge Number unveils your deepest desires, motivations, and what truly makes you happy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index