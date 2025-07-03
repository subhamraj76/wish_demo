"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sun, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "./theme-provider"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/courses", label: "Courses" },
    { href: "/progress", label: "Progress" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Wish Catalyst" width={40} height={40} />
            <span className="text-xl font-bold text-blue-600 dark:text-yellow-400">Wish Catalyst</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-yellow-400"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black"
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-400 transition-colors duration-200 font-medium text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-yellow-400 self-start"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black mt-4"
                >
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  )
}
