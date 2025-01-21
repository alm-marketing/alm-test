"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Save,
  FileSpreadsheet,
  BarChart2,
  Plus,
  Download,
  Upload,
  Filter,
} from "lucide-react"

export function AdminToolbar() {
  return (
    <div className="bg-white border-b p-2 flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Marketing Analytics 2024"
          className="max-w-xs bg-transparent hover:bg-gray-50 focus:bg-white"
          defaultValue="Marketing Analytics 2024"
        />
        <Button variant="ghost" size="sm" className="text-green-600">
          <Save className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-1 border-l border-r px-4">
        <Button variant="ghost" size="sm">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Underline className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-1 border-r px-4">
        <Button variant="ghost" size="sm">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        <Button variant="ghost" size="sm">
          <Upload className="h-4 w-4 mr-2" />
          Import
        </Button>
        <Button variant="ghost" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button variant="ghost" size="sm">
          <BarChart2 className="h-4 w-4 mr-2" />
          Analytics
        </Button>
      </div>
    </div>
  )
}

