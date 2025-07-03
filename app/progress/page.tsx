"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, MapPin, BarChart, Handshake } from "lucide-react"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function ProgressPage() {
  const progressSteps = [
    {
      number: "01",
      title: "Pamphlet Making and Distribution",
      description: "Created and distributed informational pamphlets to raise awareness about our educational services",
      icon: FileText,
      status: "completed",
    },
    {
      number: "02",
      title: "Collaborating with NGO",
      description: "Partnered with local NGOs to expand our reach and impact in underserved communities",
      icon: Users,
      status: "completed",
    },
    {
      number: "03",
      title: "Expanding Our Reach",
      description: "Providing home tuitions in different parts of West Bengal to make education accessible",
      icon: MapPin,
      status: "in-progress",
    },
    {
      number: "04",
      title: "Conducting Survey for Modifications",
      description: "Gathering feedback through surveys to improve our services and methodology",
      icon: BarChart,
      status: "in-progress",
    },
    {
      number: "05",
      title: "Contacting Other Business Collaborators",
      description: "Building partnerships with other educational institutions and businesses",
      icon: Handshake,
      status: "planned",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600 dark:bg-green-500"
      case "in-progress":
        return "bg-blue-600 dark:bg-yellow-600"
      case "planned":
        return "bg-gray-500 dark:bg-gray-600"
      default:
        return "bg-gray-500 dark:bg-gray-600"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "in-progress":
        return "In Progress"
      case "planned":
        return "Planned"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Progress and growth illustration"
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
                Progress Overview
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Track our journey as we work towards transforming education and creating opportunities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Progress Timeline */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {progressSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Line */}
                  {index < progressSteps.length - 1 && (
                    <div className="absolute left-1/2 top-24 w-0.5 h-20 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block" />
                  )}

                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Content Card */}
                    <div className="flex-1">
                      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge className={`${getStatusColor(step.status)} text-white`}>
                              {getStatusText(step.status)}
                            </Badge>
                            <span className="text-3xl font-bold text-blue-600 dark:text-yellow-400">{step.number}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Icon Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 dark:bg-yellow-600 rounded-full flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-white dark:text-black" />
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-yellow-400"
            >
              Our Impact So Far
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Students Reached" },
                { number: "50+", label: "Expert Tutors" },
                { number: "15+", label: "Areas Covered" },
                { number: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
