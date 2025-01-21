"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  FileSpreadsheet,
  BarChart2,
  TableIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  FolderOpen,
  Settings,
  History,
} from "lucide-react"

export function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
      <div className="p-4 flex justify-between items-center">
        {!isCollapsed && <h2 className="text-lg font-semibold">Workspace</h2>}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:text-gray-300"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <div className="p-2">
        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 mb-2">
          <Plus className="h-4 w-4 mr-2" />
          {!isCollapsed && "New Sheet"}
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 mb-2">
          <FolderOpen className="h-4 w-4 mr-2" />
          {!isCollapsed && "Open"}
        </Button>

        <div className="h-px bg-gray-800 my-4" />

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 mb-2">
          <TableIcon className="h-4 w-4 mr-2" />
          {!isCollapsed && "All Sheets"}
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 mb-2">
          <BarChart2 className="h-4 w-4 mr-2" />
          {!isCollapsed && "Analytics"}
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 mb-2">
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          {!isCollapsed && "Reports"}
        </Button>

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800 mb-2">
          <History className="h-4 w-4 mr-2" />
          {!isCollapsed && "Recent"}
        </Button>

        <div className="h-px bg-gray-800 my-4" />

        <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-800">
          <Settings className="h-4 w-4 mr-2" />
          {!isCollapsed && "Settings"}
        </Button>
      </div>
    </div>
  )
}

