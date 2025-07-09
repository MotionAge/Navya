import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, Award, Clock, Phone, MapPin } from "lucide-react"

export default function Home() {
  const services = [
    {
      title: "Hearing Tests",
      description: "Comprehensive audiological evaluations and hearing assessments",
      icon: "👂",
    },
    {
      title: "Sinus Treatment",
      description: "Advanced treatment for chronic sinusitis and nasal disorders",
      icon: "👃",
    },
    {
      title: "Allergy Care",
      description: "Specialized allergy testing and immunotherapy treatments",
      icon: "🤧",
    },
    {
      title: "Tinnitus Management",
      description: "Comprehensive care for ringing in ears and hearing disorders",
      icon: "🔊",
    },
    {
      title: "Surgery Consultations",
      description: "Expert surgical consultations for ENT conditions",
      icon: "⚕️",
    },
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Patients Treated" },
    { icon: Award, number: "2+", label: "Years Experience" },
    { icon: Calendar, number: "98%", label: "Success Rate" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Specialized Care for Your <span className="text-blue-600">Ears, Nose, and Throat</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert ENT services with compassionate care in Kathmandu. Your health and comfort are our
                top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                >
                 Book Appointment
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Friendly ENT doctor consulting with patient"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive ENT care with state-of-the-art equipment and experienced specialists
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Dr. Amit Jha - ENT Specialist"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Dr. Amit Jha</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience in ENT medicine, Dr. Jha is dedicated to providing exceptional
                care for all ear, nose, and throat conditions. His expertise and compassionate approach have helped
                thousands of patients in Nepal.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Board Certified ENT Specialist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">500+ Successful Treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">5+ Years Experience</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Care of Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait for symptoms to worsen. Schedule your consultation today and get the expert ENT care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-lg">+977-9767475005</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">Balkhu, Kathmandu, Nepal</span>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Book Your Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
