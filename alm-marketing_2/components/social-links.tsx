"use client"

import { Facebook, Twitter, Instagram, AirplayIcon as Spotify, Globe } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="https://facebook.com" className="text-white hover-accent">
        <Facebook size={18} />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link href="https://twitter.com" className="text-white hover-accent">
        <Twitter size={18} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link href="https://instagram.com" className="text-white hover-accent">
        <Instagram size={18} />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link href="https://spotify.com" className="text-white hover-accent">
        <Spotify size={18} />
        <span className="sr-only">Spotify</span>
      </Link>
      <Link href="https://web.com" className="text-white hover-accent">
        <Globe size={18} />
        <span className="sr-only">Website</span>
      </Link>
    </div>
  )
}

