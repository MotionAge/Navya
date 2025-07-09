import { Stethoscope, Ear, Wind, Zap, Scissors, TestTube } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "ENT Services - Navya Clinic",
  description:
    "Comprehensive ENT services including hearing tests, sinus treatment, allergy care, tinnitus management, and surgery consultations in Kathmandu.",
}

export default function Services() {
  const services = [
    {
      icon: Ear,
      title: "Hearing Tests & Audiometry",
      description:
        "Comprehensive hearing evaluations using state-of-the-art audiometric equipment to assess hearing loss and determine appropriate treatment options.",
      features: [
        "Pure tone audiometry",
        "Speech audiometry",
        "Tympanometry",
        "Hearing aid consultations",
        "Pediatric hearing assessments",
      ],
    },
    {
      icon: Wind,
      title: "Sinus Treatment",
      description:
        "Advanced diagnosis and treatment of acute and chronic sinusitis, nasal polyps, and other sinus-related conditions.",
      features: [
        "Nasal endoscopy",
        "CT scan interpretation",
        "Medical management",
        "Functional endoscopic sinus surgery (FESS)",
        "Balloon sinuplasty",
      ],
    },
    {
      icon: TestTube,
      title: "Allergy Care & Testing",
      description:
        "Comprehensive allergy testing and personalized treatment plans for respiratory and environmental allergies.",
      features: [
        "Skin prick tests",
        "Blood allergy tests",
        "Immunotherapy",
        "Environmental allergy management",
        "Food allergy consultations",
      ],
    },
    {
      icon: Zap,
      title: "Tinnitus Management",
      description:
        "Specialized care for tinnitus (ringing in ears) with comprehensive evaluation and personalized treatment approaches.",
      features: [
        "Tinnitus assessment",
        "Hearing aid therapy",
        "Sound therapy",
        "Counseling and support",
        "Lifestyle modifications",
      ],
    },
    {
      icon: Scissors,
      title: "ENT Surgery Consultations",
      description: "Expert surgical consultations for various ENT conditions requiring surgical intervention.",
      features: [
        "Tonsillectomy",
        "Adenoidectomy",
        "Septoplasty",
        "Turbinate reduction",
        "Thyroid surgery consultations",
      ],
    },
    {
      icon: Stethoscope,
      title: "General ENT Consultations",
      description: "Comprehensive evaluation and treatment of common ear, nose, and throat conditions.",
      features: [
        "Ear infections",
        "Throat infections",
        "Voice disorders",
        "Dizziness and balance issues",
        "Sleep apnea consultations",
      ],
    },
  ]

  const procedures = [
    "Ear wax removal",
    "Nasal cautery",
    "Foreign body removal",
    "Biopsy procedures",
    "Injection treatments",
    "Minor surgical procedures",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our ENT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive ear, nose, and throat care with advanced diagnostic tools and personalized treatment plans for
            optimal patient outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Procedures */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Procedures</h2>
            <p className="text-lg text-gray-600">We also offer various minor procedures and treatments</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((procedure, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{procedure}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Do I need a referral to see an ENT specialist?
              </h3>
              <p className="text-gray-600">
                No referral is required. You can book an appointment directly with us for any ENT concerns.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What should I bring to my first appointment?</h3>
              <p className="text-gray-600">
                Please bring any previous medical records, current medications list, and your insurance information if
                applicable.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How long do appointments typically take?</h3>
              <p className="text-gray-600">
                Initial consultations usually take 30-45 minutes, while follow-up appointments are typically 15-30
                minutes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let ENT problems affect your quality of life. Schedule your consultation today and take the first step
            towards better health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
