// import Link from "next/link"
// import Image from "next/image"
// import { Calendar, Users, Award, Clock, Phone, MapPin } from "lucide-react"

// export default function Home() {
//   const services = [
//     {
//       title: "Hearing Tests",
//       description: "Comprehensive audiological evaluations and hearing assessments",
//       icon: "👂",
//     },
//     {
//       title: "Sinus Treatment",
//       description: "Advanced treatment for chronic sinusitis and nasal disorders",
//       icon: "👃",
//     },
//     {
//       title: "Allergy Care",
//       description: "Specialized allergy testing and immunotherapy treatments",
//       icon: "🤧",
//     },
//     {
//       title: "Tinnitus Management",
//       description: "Comprehensive care for ringing in ears and hearing disorders",
//       icon: "🔊",
//     },
//     {
//       title: "Surgery Consultations",
//       description: "Expert surgical consultations for ENT conditions",
//       icon: "⚕️",
//     },
//   ]

//   const stats = [
//     { icon: Users, number: "500+", label: "Patients Treated" },
//     { icon: Award, number: "2+", label: "Years Experience" },
//     { icon: Calendar, number: "98%", label: "Success Rate" },
//   ]

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//                 Specialized Care for Your <span className="text-blue-600">Ears, Nose, and Throat</span>
//               </h1>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Expert ENT services with compassionate care in Kathmandu. Your health and comfort are our
//                 top priorities.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/contact"
//                   className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
//                 >
//                  Book Appointment
//                 </Link>
//                 <Link
//                   href="/services"
//                   className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-center"
//                 >
//                   Our Services
//                 </Link>
//               </div>
//             </div>
//             <div className="relative">
//               <Image
//                 src="/placeholder.svg?height=500&width=600"
//                 alt="Friendly ENT doctor consulting with patient"
//                 width={600}
//                 height={500}
//                 className="rounded-lg shadow-xl"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
//                 <p className="text-gray-600">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Specialized Services</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Comprehensive ENT care with state-of-the-art equipment and experienced specialists
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="text-4xl mb-4">{service.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{service.description}</p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Link
//               href="/services"
//               className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
//             >
//               View All Services
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* About Preview Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Image
//                 src="/placeholder.svg?height=400&width=500"
//                 alt="Dr. Amit Jha - ENT Specialist"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//             <div className="space-y-6">
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Dr. Amit Jha</h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 With over 5 years of experience in ENT medicine, Dr. Jha is dedicated to providing exceptional
//                 care for all ear, nose, and throat conditions. His expertise and compassionate approach have helped
//                 thousands of patients in Nepal.
//               </p>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <Award className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">Board Certified ENT Specialist</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Users className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">500+ Successful Treatments</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                   <span className="text-gray-700">5+ Years Experience</span>
//                 </div>
//               </div>
//               <Link
//                 href="/about"
//                 className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
//               >
//                 Learn More About Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Care of Your Health?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Don't wait for symptoms to worsen. Schedule your consultation today and get the expert ENT care you deserve.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <div className="flex items-center space-x-2">
//               <Phone className="h-5 w-5" />
//               <span className="text-lg">+977-9767475005</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <MapPin className="h-5 w-5" />
//               <span className="text-lg">Balkhu, Kathmandu, Nepal</span>
//             </div>
//           </div>
//           <div className="mt-8">
//             <Link
//               href="/contact"
//               className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
//             >
//               Book Your Appointment Now
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-9767475005"],
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["navyaenthealth@gmail.com"],
      description: "Email us for any queries",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Navya ENT and Health Care Center", "Balkhu, Kathmandu, Nepal"],
      description: "Visit us at our clinic",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sun-Fri: 8:00 AM - 8:00 PM", "Saturday: Closed"],
      description: "Our operating hours",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">🚧 Website Under Construction 🚧</h1>
          <h3 className="text-2xl md:text-5xl font-bold text-gray-800 mb-6">Contact Us</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with Navya ENT and Health Care Center. We're here to help with all your ENT needs and answer any questions you
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
                <span className="font-semibold text-red-800">+977-9767475005</span>
              </div>
              <p className="text-sm text-red-600 mt-2">Available 24/7 for genuine emergencies only</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Us</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.555445540288!2d85.29509631156536!3d27.68667412885377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18418484f5cb%3A0x47248c3878873e24!2sBalkhu%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1752057132897!5m2!1sen!2snp" 
              width="550" 
              height="500" 
              style={{ border: 0 }} 
              allowFullScreen loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
             <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Directions:</strong> Located in the heart of Kathmandu, easily accessible by public transport.
                Parking available on-site for patients.
              </p>
            </div>
          </div>
        </div>

         {/* Social Links Section */}
        <div className="text-center">
         <h5 className="text-2xl md:text-2xl font-bold text-gray-800 mt-10 mb-6">Find Us on:</h5>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61570251633348"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/navya.ent/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        

        {/* FAQ Section */}
        {/* <section className="mt-20">
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
        </section> */}
      </div>
    </div>
  )
}
