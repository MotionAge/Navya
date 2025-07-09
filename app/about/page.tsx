import Image from "next/image"
import { Award, Users, Clock, Heart, Shield, Star } from "lucide-react"

export const metadata = {
  title: "About Us - Navya Clinic",
  description:
    "Learn about Navya Clinic and Dr. Ram, our experienced ENT specialist serving Kathmandu, Nepal.",
}

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with empathy, understanding, and genuine concern for their wellbeing.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our priority. We maintain the highest standards of medical safety and hygiene.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, from diagnosis to treatment and follow-up care.",
    },
  ]

  const qualifications = [
    "MBBS - Tribhuvan University, Nepal",
    "MS in ENT - Institute of Medicine, Nepal",
    "Fellowship in Rhinology - India",
    "Member of Nepal Medical Association",
    "Certified in Advanced ENT Surgery",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Navya Clinic</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing exceptional ENT care with a personal touch. Our mission is to improve the quality of
            life for our patients through expert medical care and compassionate service.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Navya Clinic, we are committed to providing world-class ENT care that is accessible,
                  affordable, and delivered with compassion. We believe that everyone deserves quality healthcare, and
                  we work tirelessly to make that a reality for our community in Kathmandu.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our approach combines cutting-edge medical technology with personalized care, ensuring that each
                  patient receives treatment tailored to their unique needs and circumstances.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Navya Clinic interior"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Dr. Ram - ENT Specialist"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Dr. Ram</h2>
                  <p className="text-xl text-blue-600 font-semibold">ENT Specialist & Surgeon</p>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Ram is a highly experienced ENT specialist with over 5 years of dedicated service in
                  the field of otolaryngology. He has successfully treated thousands of patients and is known for his
                  meticulous approach to diagnosis and treatment.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Qualifications & Certifications</h3>
                  <ul className="space-y-2">
                    {qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="font-bold text-2xl text-gray-800">500+</p>
                    <p className="text-sm text-gray-600">Patients</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="font-bold text-2xl text-gray-800">5+</p>
                    <p className="text-sm text-gray-600">Years</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="font-bold text-2xl text-gray-800">98%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Navya Clinic
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Navya Clinic?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Expert Care</h3>
              <p className="text-sm opacity-90">Specialized ENT expertise with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Compassionate</h3>
              <p className="text-sm opacity-90">Patient-centered care with personal attention</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Safe & Clean</h3>
              <p className="text-sm opacity-90">Highest standards of safety and hygiene</p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Convenient</h3>
              <p className="text-sm opacity-90">Flexible scheduling and accessible location</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
