import { NextResponse } from "next/server"
import { verify } from "jsonwebtoken"

// This should be the same as in your auth routes
const JWT_SECRET = "your-super-secret-jwt-key"

// In a real-world scenario, this would fetch from a database
const reports: any[] = []

export async function GET(request: Request) {
  const token = request.headers.get("Cookie")?.split("auth_token=")?.[1]

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const decoded = verify(token, JWT_SECRET)
    if (decoded && (decoded as any).role === "client") {
      return NextResponse.json({ success: true, reports })
    } else {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  } catch (error) {
    console.error("Token verification failed:", error)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
}

