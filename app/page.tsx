"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Users, Award, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-black/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/10 dark:bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <Image src="/logo.png" alt="Wish Catalyst Logo" width={200} height={200} className="mx-auto mb-8" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent"
          >
            WISH CATALYST
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-4 text-blue-600 dark:text-yellow-400 font-light"
          >
            YOUR WISH OUR MOTTO
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Bridging the gap between education and employment through quality home and online tuitions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black font-semibold px-8 py-4 text-lg"
            >
              <Link href="/courses">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-yellow-600 dark:text-yellow-400 dark:hover:bg-yellow-600 dark:hover:text-black px-8 py-4 text-lg bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600 dark:text-yellow-400"
          >
            Why Choose Wish Catalyst?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "All Subjects",
                description: "Classes 1-12th covering CBSE, ICSE, ISC, WB and other boards",
              },
              {
                icon: Users,
                title: "Expert Tutors",
                description: "Experienced and qualified faculty both male and female",
              },
              {
                icon: Award,
                title: "Quality Education",
                description: "Step-by-step tutoring methodology for all ages",
              },
              {
                icon: MapPin,
                title: "Home & Online",
                description: "Flexible learning at your home or online platform",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-yellow-600 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-500 dark:text-yellow-400 group-hover:text-blue-600 dark:group-hover:text-yellow-300 transition-colors" />
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-yellow-600 dark:to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-black"
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100 dark:text-black/80"
          >
            Join thousands of students who have transformed their academic journey with us
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-blue-600 dark:bg-black dark:hover:bg-gray-800 dark:text-white px-8 py-4 text-lg"
            >
              <Link href="/login">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
