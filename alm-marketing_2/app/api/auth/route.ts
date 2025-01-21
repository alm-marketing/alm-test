import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { rateLimit } from "@/lib/rate-limit"

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH
const JWT_SECRET = process.env.JWT_SECRET

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

export async function POST(request: Request) {
  try {
    // Apply rate limiting
    await limiter.check(request, 10, "CACHE_TOKEN") // 10 requests per minute

    const { email, password } = await request.json()

    if (email === ADMIN_EMAIL) {
      const isValid = await compare(password, ADMIN_PASSWORD_HASH || "")
      if (isValid) {
        // Generate a JWT token
        const token = sign({ email, role: "admin" }, JWT_SECRET || "", { expiresIn: "1h" })

        // Set HttpOnly cookie with the JWT
        const response = NextResponse.json({ success: true })
        response.cookies.set("auth_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 3600, // 1 hour
          path: "/",
        })

        return response
      }
    }

    return NextResponse.json({ success: false }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}

