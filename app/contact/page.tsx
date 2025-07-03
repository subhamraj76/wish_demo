"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Contact us illustration"
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get in touch with us to start your learning journey or for any inquiries
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600 dark:text-yellow-400">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Enter subject"
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        rows={5}
                        className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                      />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black font-semibold">
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-yellow-400">Get in Touch</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                    We're here to help you with any questions about our courses, tutoring services, or educational
                    programs.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      content: "wishcatalyst@gmail.com",
                      description: "Send us an email anytime",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 9123644729",
                      description: "Call us during business hours",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "West Bengal, India",
                      description: "Serving across West Bengal",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Mon - Sat: 9AM - 8PM",
                      description: "Sunday: 10AM - 6PM",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="bg-blue-600 dark:bg-yellow-600 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-white dark:text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-blue-600 dark:text-yellow-400 font-medium">{item.content}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Survey Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400 mb-3">Help Us Improve</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Your feedback is valuable to us. Please take a moment to fill out our survey.
                  </p>
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black"
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSc4hkNeJzYmISuC5ppSeQIDf4CqkF4oJLNtsm23adUxIB9TqA/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Take Survey
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
