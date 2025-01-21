"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center">
      <Link href="/" className="mr-8">
        <Plus className="h-6 w-6" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/arbeit" className="hover-accent">
          Arbeit
        </Link>
        <Link href="/texte" className="hover-accent">
          Texte
        </Link>
        <Link href="/publikationen" className="hover-accent">
          Publikationen
        </Link>
        <Link href="/newsletter" className="hover-accent">
          Newsletter
        </Link>
        <Link href="/artikel" className="hover-accent">
          Artikel
        </Link>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black/95">
          <div className="flex flex-col space-y-4 mt-8">
            <Link href="/arbeit" className="text-2xl hover-accent" onClick={() => setIsOpen(false)}>
              Arbeit
            </Link>
            <Link href="/texte" className="text-2xl hover-accent" onClick={() => setIsOpen(false)}>
              Texte
            </Link>
            <Link href="/publikationen" className="text-2xl hover-accent" onClick={() => setIsOpen(false)}>
              Publikationen
            </Link>
            <Link href="/newsletter" className="text-2xl hover-accent" onClick={() => setIsOpen(false)}>
              Newsletter
            </Link>
            <Link href="/artikel" className="text-2xl hover-accent" onClick={() => setIsOpen(false)}>
              Artikel
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

