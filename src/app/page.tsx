import { FeaturedGames } from "@/components/feature-games";
import { HeroSection } from "@/components/hero-section";
import { NewswireSection } from "@/components/newswire-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />
      <main className="flex flex-col items-center">
        <HeroSection />
        <NewswireSection />
        <FeaturedGames />
      </main>
      <SiteFooter />
    </div>
  )
}

