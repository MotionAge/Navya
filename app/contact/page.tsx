"use client"

import { MapPin, Phone, Clock } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-1-4567890", "+977-98XXXXXXXX"],
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Navya Clinic", "Kathmandu, Nepal"],
      description: "Visit us at our clinic",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sun-Fri: 9:00 AM - 6:00 PM", "Saturday: Closed"],
      description: "Our operating hours",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with Navya Clinic. We're here to help with all your ENT needs and answer any questions you
            may have.
          </p>
        </div>

        {/* Contact Info & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{info.title}</h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Contact</h3>
              <p className="text-red-700 mb-3">For urgent ENT emergencies outside business hours:</p>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-red-600" />
                <span className="font-semibold text-red-800">+977-98XXXXXXXX</span>
              </div>
              <p className="text-sm text-red-600 mt-2">Available 24/7 for genuine emergencies only</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Navya Clinic, Kathmandu</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Directions:</strong> Located in the heart of Kathmandu, easily accessible by public transport.
                Parking available on-site for patients.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I book an appointment?</h3>
              <p className="text-gray-600">
                You can book by calling us directly, or visit our clinic in person.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you accept walk-in patients?</h3>
              <p className="text-gray-600">
                We accept walk-ins based on availability, but appointments are recommended to avoid waiting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How can I get my test results?</h3>
              <p className="text-gray-600">
                Test results are typically available within 24-48 hours and be collected in person.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
