"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-[#8C9196]/15"
          : "bg-white border-b border-[#F4F6F5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex items-center group">
            <Image
              src="/sylvan-logo.png"
              alt="Sylvan"
              width={160}
              height={60}
              className="h-12 w-auto transition-all duration-500 group-hover:opacity-75 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="/"
              className="text-slate-600 hover:text-[#008929] transition-all duration-500 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#008929] after:transition-all after:duration-500 hover:after:w-full pb-1"
            >
              Home
            </Link>

            <Link
              href="/why-sylvan"
              className="text-slate-600 hover:text-[#008929] transition-all duration-500 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#008929] after:transition-all after:duration-500 hover:after:w-full pb-1"
            >
              Why Sylvan
            </Link>

            <Link
              href="/strategy"
              className="text-slate-600 hover:text-[#008929] transition-all duration-500 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#008929] after:transition-all after:duration-500 hover:after:w-full pb-1"
            >
              Strategy
            </Link>

            <Link
              href="/education"
              className="text-slate-600 hover:text-[#008929] transition-all duration-500 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#008929] after:transition-all after:duration-500 hover:after:w-full pb-1"
            >
              Education
            </Link>

            <Link
              href="/contact"
              className="text-slate-600 hover:text-[#008929] transition-all duration-500 text-sm font-semibold relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#008929] after:transition-all after:duration-500 hover:after:w-full pb-1"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-slate-600 hover:text-[#008929] hover:bg-[#F4F6F5] transition-all duration-300 font-semibold"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-gradient-to-br from-[#008929] to-[#095520] hover:from-[#095520] hover:to-[#008929] text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 font-semibold px-7 py-6 rounded-xl"
            >
              <Link href="/listings">View Listing</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/"
              className="block text-slate-700 hover:text-[#008929] py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/why-sylvan"
              className="block text-slate-700 hover:text-[#008929] py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Sylvan
            </Link>
            <Link
              href="/strategy"
              className="block text-slate-700 hover:text-[#008929] py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Strategy
            </Link>
            <Link
              href="/education"
              className="block text-slate-700 hover:text-[#008929] py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="/contact"
              className="block text-slate-700 hover:text-[#008929] py-2 text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex flex-col gap-3 pt-5 border-t border-slate-200">
              <Button
                variant="outline"
                asChild
                className="border-[#008929] text-[#008929] hover:bg-[#F4F6F5] bg-transparent"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-[#008929] hover:bg-[#095520]">
                <Link href="/listings">View Listing</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
