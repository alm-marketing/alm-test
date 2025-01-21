"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ServiceModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
}

export function ServiceModal({ isOpen, onClose, title, description }: ServiceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900/95 backdrop-blur-sm text-white border-[#ff6b00]/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#ff6b00] flex items-center justify-between">
            {title}
            <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6 rounded-full hover:bg-white/10">
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription className="text-gray-300 mt-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {description}
            </motion.div>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <Button onClick={onClose} className="w-full bg-[#ff6b00] hover:bg-[#ff8533] transition-colors">
            Got it, thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

