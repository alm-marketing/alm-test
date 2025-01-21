import { MainHeader } from "@/components/main-header"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <main>
      <MainHeader />
      <PageHeader title="About ALM Marketing" description="Your trusted partner in digital marketing for restaurants" />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              At ALM Marketing, we specialize in elevating Ethiopian and other restaurants in America through innovative
              digital marketing solutions. Our mission is to bridge the gap between traditional restaurant excellence
              and modern digital presence.
            </p>
            <p className="text-gray-400">
              We understand the unique challenges faced by restaurant owners in the digital age, and we're here to help
              you overcome them with tailored strategies and solutions.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Restaurant marketing team meeting"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project we undertake.",
              },
              {
                title: "Innovation",
                description: "We stay ahead of digital trends to keep you competitive.",
              },
              {
                title: "Partnership",
                description: "We work as partners in your restaurant's success story.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#ff6b00]">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

