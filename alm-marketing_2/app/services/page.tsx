"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MainHeader } from "@/components/main-header"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ServiceModal } from "@/components/service-modal"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)

  const services = [
    {
      title: "Social Media Management",
      description:
        "Comprehensive social media strategy and management to engage your audience and build brand awareness.",
      features: [
        "Content creation and curation",
        "Community management",
        "Performance analytics",
        "Campaign management",
      ],
      learnMore:
        "Imagine your restaurant's story unfolding like a mouthwatering recipe on social media. We'll sprinkle in engaging posts, stir up conversations with your community, and garnish it all with data-driven insights. The result? A social media presence as irresistible as your signature dish!",
    },
    {
      title: "Website Optimization",
      description: "Professional website optimization to improve your online presence and drive more customers.",
      features: ["SEO optimization", "Performance tuning", "Mobile responsiveness", "Content strategy"],
      learnMore:
        "Think of your website as your restaurant's digital storefront. We'll polish it until it shines, making it as welcoming and efficient as your best host. From speedy load times to mobile-friendly designs, we'll ensure your online presence is as impressive as your in-person service.",
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to reach your target audience and grow your business.",
      features: ["Email marketing", "PPC advertising", "Content marketing", "Analytics and reporting"],
      learnMore:
        "Picture a bustling street where every passerby is a potential customer. Our digital marketing strategies are like setting up irresistible sample stands on that street. We'll use emails, ads, and compelling content to entice your audience, turning curious onlookers into loyal patrons.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <main className="bg-gradient-to-b from-black to-gray-900">
      <MainHeader />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12 mt-20"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            variants={itemVariants}
            onHoverStart={() => setHoveredImage(0)}
            onHoverEnd={() => setHoveredImage(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-13%20141254-AZKJ8ifKtBrA2xKJQRnKHJZb264oDc.png"
              alt="ALM Marketing Digital Solutions"
              className="object-cover w-full h-full transition-transform duration-700 ease-out"
              style={{
                transform: hoveredImage === 0 ? "scale(1.1)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Digital Excellence</h3>
                <p
                  className="text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300"
                  style={{
                    opacity: hoveredImage === 0 ? 1 : 0,
                    transform: hoveredImage === 0 ? "translateY(0)" : "translateY(1rem)",
                  }}
                >
                  Transforming restaurants through innovative digital solutions
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            variants={itemVariants}
            onHoverStart={() => setHoveredImage(1)}
            onHoverEnd={() => setHoveredImage(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ethiopian-restaurants-in-London_Beza-Vegan-1.jpg-pOuxWjU2zCUz8fn0eWuHNWfJyZOj7T.jpeg"
              alt="Ethiopian Restaurant Experience"
              className="object-cover w-full h-full transition-transform duration-700 ease-out"
              style={{
                transform: hoveredImage === 1 ? "scale(1.1)" : "scale(1)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Authentic Experience</h3>
                <p
                  className="text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300"
                  style={{
                    opacity: hoveredImage === 1 ? 1 : 0,
                    transform: hoveredImage === 1 ? "translateY(0)" : "translateY(1rem)",
                  }}
                >
                  Specializing in Ethiopian restaurant marketing and digital presence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <PageHeader
        title="Our Services"
        description="Elevate your restaurant's digital presence with our comprehensive solutions, specializing in Ethiopian and international cuisines"
      />

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-[#ff6b00]/50 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#ff6b00]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-[#ff6b00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-[#ff6b00] hover:bg-[#ff8533] group"
                    onClick={() => setSelectedService(service.title)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService}
          description={services.find((s) => s.title === selectedService)?.learnMore || ""}
        />
      )}
    </main>
  )
}

