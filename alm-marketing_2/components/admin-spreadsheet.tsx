"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Cell {
  value: string
  isEditing: boolean
}

const INITIAL_DATA = [
  ["Date", "Campaign", "Impressions", "Clicks", "CTR", "CPC", "Conversions", "Conv. Rate", "Spend", "Revenue"],
  ["2024-01-15", "Facebook Ads", "15000", "750", "5.00%", "$2.00", "45", "6.00%", "$1,500", "$3,000"],
  ["2024-01-15", "Google Ads", "20000", "1000", "5.00%", "$2.50", "60", "6.00%", "$2,500", "$5,000"],
  ["2024-01-15", "Instagram", "10000", "500", "5.00%", "$1.80", "30", "6.00%", "$900", "$1,800"],
  // Add more sample data rows here
]

export function AdminSpreadsheet() {
  const [data, setData] = useState<Cell[][]>(
    INITIAL_DATA.map((row) => row.map((cell) => ({ value: cell, isEditing: false }))).concat(
      Array(15)
        .fill(null)
        .map(() =>
          Array(10)
            .fill(null)
            .map(() => ({ value: "", isEditing: false })),
        ),
    ),
  )

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setData((prev) =>
      prev.map((row, i) =>
        row.map((cell, j) => ({
          ...cell,
          isEditing: i === rowIndex && j === colIndex,
        })),
      ),
    )
  }

  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    setData((prev) =>
      prev.map((row, i) => row.map((cell, j) => (i === rowIndex && j === colIndex ? { ...cell, value } : cell))),
    )
  }

  const handleCellBlur = () => {
    setData((prev) => prev.map((row) => row.map((cell) => ({ ...cell, isEditing: false }))))
  }

  const handlePostReport = async () => {
    const title = prompt("Enter report title:")
    if (!title) return

    const reportData = data.map((row) => row.map((cell) => cell.value))

    try {
      const response = await fetch("/api/admin/post-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content: reportData }),
      })

      if (response.ok)

