"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />

      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-black/90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 dark:bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600/10 dark:bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-8">
              <Image src="/logo.png" alt="Wish Catalyst Logo" width={80} height={80} className="mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-blue-600 dark:text-yellow-400">Welcome Back</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to your account or create a new one</p>
            </div>

            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl">
              <CardContent className="p-6">
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-gray-700">
                    <TabsTrigger
                      value="login"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-yellow-600 dark:data-[state=active]:text-black"
                    >
                      Login
                    </TabsTrigger>
                    <TabsTrigger
                      value="register"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:data-[state=active]:bg-yellow-600 dark:data-[state=active]:text-black"
                    >
                      Register
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black font-semibold">
                      Sign In
                    </Button>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="registerEmail"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="registerPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="pl-10 pr-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="pl-10 pr-10 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-gray-400 hover:text-white"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black font-semibold">
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
