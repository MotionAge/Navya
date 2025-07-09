"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "" // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hello! I would like to book an appointment at Motion Age Clinic.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}
