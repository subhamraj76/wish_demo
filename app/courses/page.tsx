"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Clock, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      title: "Primary Education (Classes 1-5)",
      description: "Foundation building with focus on basic concepts in all subjects",
      price: "₹2,500",
      duration: "Monthly",
      features: [
        "All subjects covered",
        "Interactive learning",
        "Regular assessments",
        "Parent-teacher meetings",
        "Study materials included",
      ],
      popular: false,
    },
    {
      title: "Middle School (Classes 6-8)",
      description: "Comprehensive curriculum covering CBSE, ICSE, and State boards",
      price: "₹3,500",
      duration: "Monthly",
      features: [
        "Subject-wise expert teachers",
        "Concept clarity sessions",
        "Regular practice tests",
        "Doubt clearing sessions",
        "Progress tracking",
      ],
      popular: true,
    },
    {
      title: "Secondary Education (Classes 9-10)",
      description: "Board exam preparation with intensive coaching",
      price: "₹4,500",
      duration: "Monthly",
      features: [
        "Board exam focused curriculum",
        "Previous year papers",
        "Mock tests",
        "Individual attention",
        "Career guidance",
      ],
      popular: false,
    },
    {
      title: "Higher Secondary (Classes 11-12)",
      description: "Advanced learning for Science, Commerce, and Arts streams",
      price: "₹5,500",
      duration: "Monthly",
      features: [
        "Stream-specific coaching",
        "Competitive exam preparation",
        "College admission guidance",
        "Practical sessions",
        "Industry exposure",
      ],
      popular: false,
    },
    {
      title: "Competitive Exam Preparation",
      description: "JEE, NEET, and other competitive exam coaching",
      price: "₹7,500",
      duration: "Monthly",
      features: [
        "Expert faculty",
        "Comprehensive study material",
        "Regular mock tests",
        "Performance analysis",
        "Scholarship opportunities",
      ],
      popular: true,
    },
    {
      title: "Skill Development Program",
      description: "Technical and soft skills training for employment readiness",
      price: "₹4,000",
      duration: "Monthly",
      features: [
        "Industry-relevant skills",
        "Hands-on training",
        "Certification courses",
        "Job placement assistance",
        "Internship opportunities",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Online courses and learning"
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
                Our Courses
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of courses designed to excel in academics and beyond
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  {course.popular && (
                    <Badge className="absolute -top-2 left-4 z-10 bg-blue-600 dark:bg-yellow-600 text-white dark:text-black">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <Card
                    className={`bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-yellow-600 transition-all duration-300 h-full shadow-lg hover:shadow-xl ${course.popular ? "ring-2 ring-blue-500/50 dark:ring-yellow-600/50" : ""}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">{course.title}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{course.description}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div>
                          <span className="text-3xl font-bold text-blue-600 dark:text-yellow-400">{course.price}</span>
                          <span className="text-gray-500 dark:text-gray-400 ml-2">/{course.duration}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                            <Check className="w-4 h-4 text-blue-500 dark:text-yellow-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black font-semibold">
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-yellow-400"
            >
              Why Choose Our Courses?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Flexible Timing",
                  description: "Choose your preferred time slots that fit your schedule",
                },
                {
                  icon: Users,
                  title: "Expert Faculty",
                  description: "Learn from experienced and qualified teachers",
                },
                {
                  icon: Star,
                  title: "Proven Results",
                  description: "Track record of excellent academic performance",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <feature.icon className="h-16 w-16 mx-auto mb-4 text-blue-500 dark:text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
