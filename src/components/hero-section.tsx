import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full">
      <div className="absolute inset-0">
        <img
          src="https://kzmp126vljbz1dw4wsx3.lite.vusercontent.net/placeholder.svg?height=1080&width=1920"
          alt="Grand Theft Auto VI"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>
      <div className="relative flex h-full items-end md:items-center justify-center">
        <div className="container max-w-screen-2xl">
          <div className="max-w-lg space-y-4 p-6">
            <h1 className="text-4xl font-bold text-white">Grand Theft Auto VI</h1>
            <p className="text-xl text-white/90">Trailer 1</p>
            <Button className="bg-white text-black hover:bg-white/90">
              WATCH NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

