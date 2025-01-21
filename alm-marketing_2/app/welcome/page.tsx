import { MainHeader } from "@/components/main-header"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { AdminLoginModal } from "@/components/admin-login-modal"
import Link from "next/link"

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <MainHeader />
      <PageHeader title="Welcome to ALM Marketing" description="Start your digital transformation journey today" />

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div id="new-clients" className="bg-gray-800 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6 text-[#ff6b00]">New Clients</h2>
            <p className="text-gray-300 mb-8">
              Ready to start your digital journey? We're excited to help you take your restaurant to new heights in the
              digital world. Our team is ready to create a customized strategy that fits your unique needs and goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#ff6b00] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Personalized digital marketing strategy</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#ff6b00] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Expert guidance every step of the way</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-[#ff6b00] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Tailored solutions for your restaurant's unique needs</span>
              </div>
            </div>
            <Button asChild className="mt-8 bg-[#ff6b00] hover:bg-[#ff8533]">
              <Link href="/contact#get-in-touch">Get Started</Link>
            </Button>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">Existing Clients</h2>
            <p className="text-gray-300 mb-6">Already working with us? Access your dashboard and view your progress.</p>
            <Button variant="outline" asChild className="w-full">
              <Link href="/login">Login to Dashboard</Link>
            </Button>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">Admin Access</h2>
            <p className="text-gray-300 mb-6">Authorized personnel only. Access the admin dashboard here.</p>
            <AdminLoginModal />
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Schedule a Free Consultation</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help your restaurant thrive in the digital space. No commitment required.
            </p>
            <Button size="lg" className="bg-[#ff6b00] hover:bg-[#ff8533]" asChild>
              <a href="tel:9137064284">Book Your Call</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

