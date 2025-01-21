import { NextResponse } from "next/server"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { rateLimit } from "@/lib/rate-limit"

// In a real-world scenario, these would be stored securely, preferably in a database
const CLIENT_CREDENTIALS = [
  { email: "client1@example.com", passwordHash: "$2a$12$Q0grHjH9PXc6SxivC8m12.2mZJ9BbKcgFpwSG4Y1ZEII8HJVzWeyS" }, // Password: clientpass1
  { email: "client2@example.com", passwordHash: "$2a$12$Q0grHjH9PXc6SxivC8m12.2mZJ9BbKcgFpwSG4Y1ZEII8HJVzWeyS" }, // Password: clientpass2
]

const JWT_SECRET = "your-super-secret-jwt-key" // In production, use a strong, unique secret stored in an environment variable

const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500, // Max 500 users per second
})

export async function POST(request: Request) {
  try {
    // Apply rate limiting
    await limiter.check(request, 10, "CACHE_TOKEN") // 10 requests per minute

    const { email, password } = await request.json()

    const client = CLIENT_CREDENTIALS.find((c) => c.email === email)
    if (client) {
      const isValid = await compare(password, client.passwordHash)
      if (isValid) {
        // Generate a JWT token
        const token = sign({ email, role: "client" }, JWT_SECRET, { expiresIn: "1h" })

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

