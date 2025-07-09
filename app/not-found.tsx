"use client"

import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <div className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</div>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
            wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <Home className="h-5 w-5" />
            <span>Go Home</span>
          </Link>

          <div className="text-center">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </button>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            If you're looking for specific information, try these popular pages:
          </p>
          <div className="space-y-2 text-sm">
            <Link href="/services" className="block text-blue-600 hover:text-blue-700">
              • Our ENT Services
            </Link>
            <Link href="/appointments" className="block text-blue-600 hover:text-blue-700">
              • Book an Appointment
            </Link>
            <Link href="/contact" className="block text-blue-600 hover:text-blue-700">
              • Contact Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
