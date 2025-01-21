import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

// In a real-world scenario, this would be stored in a database
const reports: any[] = []

export async function POST(request: Request) {
  const { title, content } = await request.json()

  const newReport = {
    id: uuidv4(),
    title,
    date: new Date().toISOString(),
    content,
  }

  reports.push(newReport)

  return NextResponse.json({ success: true, report: newReport })
}

