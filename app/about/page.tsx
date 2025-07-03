"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Students learning together"
              fill
              className="object-cover opacity-10 dark:opacity-5"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
                About Wish Catalyst
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transforming education through innovative online and home tutoring solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Area of Concern */}
        <section className="py-20 bg-white dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Educational challenges illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-yellow-400">Area of Concern</h2>
                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      The challenge in education, employment, and skill development is creating a system that prepares
                      people for the workforce. This means fixing problems like outdated career guidance and mismatched
                      skills. There are also unequal opportunities due to limited access to quality education and
                      training.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-yellow-400">Our Mission</h2>
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      Create an inclusive system that bridges the gap between education and employment, providing
                      everyone with equal access to quality education, practical skills, and career opportunities to
                      ensure readiness for the workforce.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Enable skill loans for poor students. "Earn While You Learn" scheme in various universities allow
                      poor students to support themselves.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Students achieving success"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-20 bg-white dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Online learning platform"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-yellow-400">Our Solution</h2>
                <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      We are conducting surveys through Google forms to understand problems and develop solutions
                      through our business idea. We focus on upgrading education to meet industry needs and promoting
                      equal access through online platforms and community hubs. Our approach enhances job readiness with
                      both technical and soft skills, bridges the digital divide, and supports lifelong learning. We
                      encourage diversity in hiring and continuous skill development, with data-driven monitoring to
                      ensure effectiveness.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-yellow-400"
            >
              Our Values
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Committed to delivering the highest quality education",
                },
                {
                  icon: Eye,
                  title: "Innovation",
                  description: "Embracing new technologies and teaching methodologies",
                },
                {
                  icon: Users,
                  title: "Inclusivity",
                  description: "Equal opportunities for all students regardless of background",
                },
                {
                  icon: BookOpen,
                  title: "Accessibility",
                  description: "Making quality education available to everyone",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-yellow-600 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <value.icon className="h-12 w-12 mx-auto mb-4 text-blue-500 dark:text-yellow-400" />
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
