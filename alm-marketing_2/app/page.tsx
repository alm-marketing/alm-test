import { MainHeader } from "@/components/main-header"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <main>
      <MainHeader />
      <HeroSection />

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ALM Marketing?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in helping restaurants thrive in the digital age with comprehensive marketing solutions
            tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Industry Expertise",
              description: "Specialized knowledge in restaurant marketing and Ethiopian cuisine promotion.",
            },
            {
              title: "Custom Solutions",
              description: "Tailored strategies designed specifically for your restaurant's unique needs.",
            },
            {
              title: "Proven Results",
              description: "Track record of helping restaurants increase their online presence and revenue.",
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-gray-900 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-[#ff6b00]">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

