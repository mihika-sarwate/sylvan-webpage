"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { ArrowRight, MapPin, Lock, TrendingUp, CheckCircle, Users, Clock } from "lucide-react"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            entry.target.classList.add("fade-in")
            entry.target.classList.add("slide-in-from-bottom-4")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    )

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f1a] via-[#0d2825] to-[#0a1f1a] overflow-hidden">
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes floatUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-float-up {
          animation: floatUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
      `}</style>
      <Navbar />

      {/* Section 1 - Hero with Featured Deal */}
      <section id="hero" className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#17c641]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#02624c]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#17c641] via-[#02624c] to-[#17c641] bg-clip-text text-transparent mb-8 text-balance leading-[1.15] tracking-tight animate-float-up" style={{ animationDelay: "0s" }}>
              Structured real estate exposure simplified for RIAs
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-float-up" style={{ animationDelay: "0.2s" }}>
              Sylvan delivers structured real estate exposure through pre-approved, ring fenced SPVs with lockbox
              governed rental cash distributions. All of which provides RIAs a faster and more controlled path to real
              estate income.
            </p>

            <div className="flex justify-center mb-20 animate-float-up" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-br from-[#17c641] to-[#02624c] hover:from-[#02624c] hover:to-[#17c641] text-white text-lg px-12 py-7 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(23,198,65,0.4)] transition-all duration-500 hover:scale-110 font-semibold rounded-xl group relative overflow-hidden"
              >
                <Link href="/listings" className="flex items-center gap-2 relative">
                  <span>View Current Listings</span>
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 group-hover:-translate-y-0.5 duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Featured Deal Card */}
          <Card className="max-w-5xl mx-auto overflow-hidden border-2 border-[#17c641]/30 hover:border-[#17c641]/60 transition-all duration-700 hover:shadow-[0_25px_50px_-12px_rgba(23,198,65,0.3)] hover:-translate-y-2 animate-float-up cursor-pointer group bg-gradient-to-br from-[#0d2825] to-[#0a1f1a]" style={{ animationDelay: "0.6s" }}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 md:h-auto bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="The Highland Residences"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-4 left-4 bg-[#17c641] hover:bg-[#02624c] text-white font-semibold px-4 py-2 shadow-lg">
                  ACTIVE
                </Badge>
              </div>

              {/* Content Side */}
              <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-[#0d2825] to-[#0a1f1a]">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">The Highland Residences</h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-6">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Austin, TX</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#17c641]/10 border border-[#17c641]/30 rounded-lg p-4">
                      <p className="text-xs text-[#17c641] font-semibold uppercase tracking-wide">Target IRR</p>
                      <p className="text-2xl font-bold text-[#17c641] mt-1">14.2%</p>
                    </div>
                    <div className="bg-[#17c641]/10 border border-[#17c641]/30 rounded-lg p-4">
                      <p className="text-xs text-[#17c641] font-semibold uppercase tracking-wide">Cash Yield</p>
                      <p className="text-2xl font-bold text-[#17c641] mt-1">6.5%</p>
                    </div>
                    <div className="bg-[#707573]/10 border border-[#707573]/30 rounded-lg p-4">
                      <p className="text-xs text-gray-300 font-semibold uppercase tracking-wide">LTV</p>
                      <p className="text-2xl font-bold text-gray-200 mt-1">62%</p>
                    </div>
                    <div className="bg-[#02624c]/10 border border-[#02624c]/30 rounded-lg p-4">
                      <p className="text-xs text-[#02624c] font-semibold uppercase tracking-wide">Closing</p>
                      <p className="text-2xl font-bold text-[#17c641] mt-1">48h</p>
                    </div>
                  </div>

                  <div className="mb-6 bg-[#02624c]/20 p-4 rounded-lg border border-[#02624c]/30">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-gray-300">Funding Progress</p>
                      <p className="text-sm font-bold text-[#17c641]">$8.2M of $10.0M</p>
                    </div>
                    <div className="w-full bg-[#02624c]/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#02624c] via-[#17c641] to-[#17c641] h-3 rounded-full shadow-lg" 
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-medium">82% committed</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-br from-[#17c641] to-[#02624c] hover:from-[#02624c] hover:to-[#17c641] text-white font-semibold py-6 group/btn transition-all duration-300 hover:shadow-xl" asChild>
                  <Link href="/listings" className="flex items-center justify-center gap-2">
                    View Deal Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 2 - Standardized Framework with Visual Structure */}
      <section id="standardized-framework" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#17c641]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#02624c]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 text-balance leading-[1.1]">
                Accelerate capital deployment with a standardized framework
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                RIAs face long approval cycles for unfamiliar investment products. Sylvan structures every investment
                around existing income producing real estate held in ring fenced SPVs with predefined assets and cash
                flows. Approve our framework once, then deploy capital into multiple assets without analysing a new
                structure every time.
              </p>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-[#17c641] text-[#17c641] hover:bg-[#17c641] hover:text-white text-lg px-8 py-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#17c641]/50 rounded-xl font-semibold group"
              >
                <Link href="/listings" className="flex items-center gap-2">
                  View Current Listings
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 duration-300" />
                </Link>
              </Button>
            </div>

            {/* Right - Enhanced Structure Diagram */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-white border-2 border-slate-200 p-8 shadow-2xl hover:shadow-3xl hover:border-[#17c641]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#17c641]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-[#02624c] mb-3">STRUCTURE</h3>
                  <Badge variant="outline" className="border-[#02624c] text-[#02624c] animate-shimmer">
                    BLUEPRINT
                  </Badge>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Senior Debt */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 relative hover:border-blue-300 hover:bg-blue-100/50 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-blue-900 uppercase">Senior Debt</span>
                      <Badge className="bg-blue-600 hover:bg-blue-700 text-white">First Position</Badge>
                      <Badge className="bg-blue-500/50 hover:bg-blue-600/60 text-blue-100 border border-blue-400/50">First Position</Badge>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-10 h-10 bg-[#0a1f1a] border-2 border-[#02624c] rounded-full flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-[#17c641] rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Sylvan Note */}
                  <div className="bg-[#17c641]/10 border-2 border-[#17c641]/30 rounded-xl p-5 relative mt-8 hover:border-[#17c641]/50 hover:bg-[#17c641]/15 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-[#02624c] uppercase flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 animate-pulse" />
                        Sylvan Note
                      </span>
                      <Badge className="bg-[#17c641] hover:bg-[#02624c] text-white font-semibold">12-14% Mezzanine</Badge>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-10 h-10 bg-[#0a1f1a] border-2 border-[#02624c] rounded-full flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-[#17c641] rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Developer Equity */}
                  <div className="bg-[#707573]/10 border-2 border-[#707573]/30 rounded-xl p-5 mt-8 hover:border-[#707573]/50 hover:bg-[#707573]/15 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-700 uppercase">Dev Equity</span>
                      <Badge className="bg-[#707573] hover:bg-slate-600 text-white font-semibold">First Loss</Badge>
                    </div>
                  </div>

                  <div className="pt-6 mt-2 border-t border-[#17c641]/20 flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-[#17c641] rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-300">STATUS: ACTIVE</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Lockbox Protected with Enhanced Visual */}
      <section id="lockbox-protection" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1f1a] via-[#0d2825] to-[#0a1f1a] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[#17c641]/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#02624c]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Enhanced Lockbox Diagram */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-gradient-to-br from-[#0d2825] to-[#0a1f1a] border-2 border-[#02624c]/40 p-8 shadow-2xl text-white hover:shadow-[0_30px_90px_-20px_rgba(23,198,65,0.3)] transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#17c641]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="text-center mb-8 relative z-10">
                  <div className="inline-flex items-center gap-3 mb-4 bg-[#17c641]/20 px-4 py-2 rounded-full border border-[#17c641]/40">
                    <Lock className="w-6 h-6 text-[#17c641] animate-pulse" />
                    <h3 className="text-2xl font-bold text-[#17c641]">LOCKBOX</h3>
                  </div>
                  <Badge className="bg-[#17c641] hover:bg-[#02624c] text-white font-semibold shadow-lg">
                    SECURITY PROTOCOL ACTIVE
                  </Badge>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Tenant Rent Input */}
                  <div className="bg-blue-500/10 border-2 border-blue-400/40 rounded-xl p-6 hover:border-blue-400/60 hover:bg-blue-500/15 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-bold text-blue-300">TENANT RENT</span>
                    </div>
                    <p className="text-sm text-gray-300 pl-16 font-medium">Collected Monthly</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <div className="w-10 h-10 bg-[#02624c] border-2 border-[#17c641]/40 rounded-full flex items-center justify-center group-hover:bg-[#02624c]/80 group-hover:border-[#17c641]/60 transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-[#17c641] rotate-90 animate-pulse" />
                    </div>
                  </div>

                  {/* Bank & Investors */}
                  <div className="bg-[#17c641]/20 border-2 border-[#17c641]/40 rounded-xl p-6 hover:border-[#17c641]/60 hover:bg-[#17c641]/30 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#17c641] to-[#02624c] rounded-lg flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-bold text-[#17c641]">BANK & INVESTORS</span>
                    </div>
                    <p className="text-sm text-[#17c641]/80 pl-16 font-medium">Priority Distribution</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <div className="w-10 h-10 bg-[#02624c] border-2 border-[#02624c]/40 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                    </div>
                  </div>

                  {/* Developer */}
                  <div className="bg-[#707573]/10 border-2 border-[#707573]/30 rounded-xl p-6 hover:border-[#707573]/50 hover:bg-[#707573]/20 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-[#707573]/50 rounded-lg flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <Users className="w-6 h-6 text-gray-300" />
                      </div>
                      <span className="text-lg font-bold text-gray-300">DEVELOPER</span>
                    </div>
                    <p className="text-sm text-gray-400 pl-16 font-medium">Residual Distribution</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Content */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#17c641] to-[#02624c] bg-clip-text text-transparent mb-8 text-balance leading-[1.1]">
                Lockbox protected cash flows by design
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8">
                With Sylvan, RIAs do not face uncertainty around cash flow control and capital priority. We enforce a
                prioritized distribution waterfall where rental income flows to the bank and Sylvan investors before the
                developer can access a single dollar. You gain the peace of mind that comes from a rigorous legal
                structure designed specifically to mitigate risk and prioritize the safety of your principal.
              </p>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-[#17c641] text-[#17c641] hover:bg-[#17c641] hover:text-white text-lg px-8 py-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#17c641]/50 rounded-xl font-semibold group"
              >
                <Link href="/listings" className="flex items-center gap-2">
                  <span>View Current Listings</span>
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Established Rental Yields with Performance Chart */}
      <section id="rental-yields" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-[#17c641]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#02624c]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 text-balance leading-[1.1]">
                Access established rental yields without ownership risk
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed font-light mb-10">
                RIAs can bypass the volatility of developer equity by participating in standardized debt issuance on
                existing properties. You are buying into proven rental yields rather than betting on the operational
                success of a developer. You get direct exposure to the performance of the real estate asset itself with a
                clear and secure path to returns.
              </p>

              {/* Stats Cards */}
              <div className="space-y-4 mb-10">
                <div className="bg-[#17c641]/10 border border-[#17c641]/30 rounded-xl p-6 hover:border-[#17c641]/60 hover:bg-[#17c641]/15 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <TrendingUp className="w-8 h-8 text-[#17c641]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Target Net Yield</p>
                      <p className="text-3xl font-bold text-[#17c641]">8-12%</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#02624c]/20 border border-[#02624c]/40 rounded-xl p-6 hover:border-[#02624c]/60 hover:bg-[#02624c]/25 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-[#17c641]" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Distribution Frequency</p>
                      <p className="text-2xl font-bold text-gray-200">Monthly</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                asChild
                className="bg-gradient-to-br from-[#17c641] to-[#02624c] hover:from-[#02624c] hover:to-[#17c641] text-white text-lg px-8 py-6 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(23,198,65,0.4)] transition-all duration-500 hover:scale-110 font-semibold rounded-xl group relative overflow-hidden"
              >
                <Link href="/listings" className="flex items-center gap-2 relative">
                  <span>View Current Listings</span>
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 duration-300" />
                </Link>
              </Button>
            </div>

            {/* Right - Performance Chart */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-white border-2 border-slate-200 p-8 shadow-2xl hover:shadow-3xl hover:border-[#02624c]/50 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#17c641]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="text-center mb-8 relative z-10">
                  <div className="inline-flex items-center gap-3 mb-3 bg-[#02624c]/10 px-4 py-2 rounded-full border border-[#02624c]/30">
                    <TrendingUp className="w-6 h-6 text-[#02624c]" />
                    <h3 className="text-2xl font-bold text-[#02624c]">PERFORMANCE</h3>
                  </div>
                  <Badge variant="outline" className="border-[#02624c] text-[#02624c]">
                    YIELD ANALYSIS
                  </Badge>
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-700">Consistent Yield</span>
                      <span className="text-lg font-bold text-[#02624c]">9.2%</span>
                    </div>
                    <div className="w-full bg-[#02624c]/50 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#02624c] to-[#17c641] h-3 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-700">Projected Return</span>
                      <span className="text-lg font-bold text-[#02624c]">10.8%</span>
                    </div>
                    <div className="w-full bg-[#02624c]/50 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#02624c] to-[#17c641] h-3 rounded-full" style={{ width: "108%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-slate-700">Historical Average</span>
                      <span className="text-lg font-bold text-[#02624c]">9.8%</span>
                    </div>
                    <div className="w-full bg-[#02624c]/50 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#02624c] to-[#17c641] h-3 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#02624c]/20">
                    <p className="text-xs text-slate-600 text-center font-medium">
                      Past performance is not indicative of future results
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
