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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-200 via-amber-100 to-blue-100 bg-clip-text text-transparent mb-8 text-balance leading-[1.15] tracking-tight animate-float-up" style={{ animationDelay: "0s" }}>
              Structured real estate exposure simplified for RIAs
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-float-up" style={{ animationDelay: "0.2s" }}>
              Sylvan delivers structured real estate exposure through pre-approved, ring fenced SPVs with lockbox
              governed rental cash distributions. All of which provides RIAs a faster and more controlled path to real
              estate income.
            </p>

            <div className="flex justify-center mb-20 animate-float-up" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-lg px-12 py-7 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(217,119,6,0.6)] transition-all duration-500 hover:scale-110 font-semibold rounded-xl group relative overflow-hidden"
              >
                <Link href="/listings" className="flex items-center gap-2 relative">
                  <span>View Current Listings</span>
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 group-hover:-translate-y-0.5 duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Featured Deal Card */}
          <Card className="max-w-5xl mx-auto overflow-hidden border-2 border-amber-500/30 hover:border-amber-400/60 transition-all duration-700 hover:shadow-[0_25px_50px_-12px_rgba(217,119,6,0.3)] hover:-translate-y-2 animate-float-up cursor-pointer group bg-gradient-to-br from-slate-800 to-slate-900" style={{ animationDelay: "0.6s" }}>
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 md:h-auto bg-slate-100 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="The Highland Residences"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2 shadow-lg">
                  ACTIVE
                </Badge>
              </div>

              {/* Content Side */}
              <div className="p-8 bg-white relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#008929]/5 to-transparent rounded-bl-3xl"></div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-2 relative z-10">The Highland Residences</h3>
                <p className="flex items-center gap-2 text-slate-600 mb-8 relative z-10">
                  <MapPin className="w-4 h-4 text-[#008929]" />
                  Austin, TX
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-50/50 p-4 rounded-xl border border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
                    <p className="text-xs text-emerald-700 uppercase tracking-wide font-semibold">Target IRR</p>
                    <p className="text-3xl font-bold text-[#008929] mt-1">14.2%</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-50/50 p-4 rounded-xl border border-emerald-200 hover:border-emerald-300 transition-colors duration-300">
                    <p className="text-xs text-emerald-700 uppercase tracking-wide font-semibold">Cash Yield</p>
                    <p className="text-3xl font-bold text-[#008929] mt-1">6.5%</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-50/50 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-300">
                    <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold">LTV</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">62%</p>
                  </div>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-50/50 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors duration-300">
                    <p className="text-xs text-slate-600 uppercase tracking-wide font-semibold">Min Investment</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">$50K</p>
                  </div>
                </div>

                <div className="mb-8 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-slate-700">Funding Progress</p>
                    <p className="text-sm font-bold text-slate-900">$8.2M of $10.0M</p>
                  </div>
                  <div className="w-full bg-slate-300 rounded-full h-4 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#095520] via-[#008929] to-[#008929] h-4 rounded-full shadow-lg transition-all duration-1000 ease-out animate-shimmer" 
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium">82% committed</p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-200 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#008929]" />
                    <span className="text-sm font-semibold text-slate-700">42+ investors</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-bold">Closing in 48h</span>
                  </div>
                </div>

                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 group/btn transition-all duration-300 hover:shadow-xl" asChild>
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
      <section id="standardized-framework" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-300 to-blue-200 bg-clip-text text-transparent mb-8 text-balance leading-[1.1]">
                Accelerate capital deployment with a standardized framework
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                RIAs face long approval cycles for unfamiliar investment products. Sylvan structures every investment
                around existing income producing real estate held in ring fenced SPVs with predefined assets and cash
                flows. Approve our framework once, then deploy capital into multiple assets without analysing a new
                structure every time.
              </p>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-900 text-lg px-8 py-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 rounded-xl font-semibold group"
              >
                <Link href="/listings" className="flex items-center gap-2">
                  View Current Listings
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 duration-300" />
                </Link>
              </Button>
            </div>

            {/* Right - Enhanced Structure Diagram */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-amber-500/30 p-8 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(217,119,6,0.3)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="text-center mb-8 relative z-10">
                  <h3 className="text-2xl font-bold text-amber-300 mb-3">STRUCTURE</h3>
                  <Badge variant="outline" className="border-amber-500 text-amber-400 animate-shimmer bg-amber-500/10">
                    BLUEPRINT
                  </Badge>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Senior Debt */}
                  <div className="bg-blue-500/10 border-2 border-blue-400/40 rounded-xl p-5 relative hover:border-blue-400/60 hover:bg-blue-500/15 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-blue-300 uppercase">Senior Debt</span>
                      <Badge className="bg-blue-500/50 hover:bg-blue-600/60 text-blue-100 border border-blue-400/50">First Position</Badge>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-10 h-10 bg-slate-800 border-2 border-slate-600 rounded-full flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Sylvan Note */}
                  <div className="bg-amber-500/10 border-2 border-amber-400/40 rounded-xl p-5 relative mt-8 hover:border-amber-400/60 hover:bg-amber-500/15 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-amber-300 uppercase flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 animate-pulse" />
                        Sylvan Note
                      </span>
                      <Badge className="bg-amber-500/50 hover:bg-amber-600/60 text-amber-100 font-semibold border border-amber-400/50">12-14% Mezzanine</Badge>
                    </div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="w-10 h-10 bg-white border-2 border-slate-300 rounded-full flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <ArrowRight className="w-6 h-6 text-slate-700 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Developer Equity */}
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 mt-8 hover:border-amber-300 hover:bg-amber-100/50 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-amber-900 uppercase">Dev Equity</span>
                      <Badge variant="outline" className="border-amber-600 text-amber-700 font-semibold">
                        First Loss
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 relative z-10">
                  <div className="flex items-center justify-center gap-2 text-emerald-700 bg-emerald-50 px-4 py-3 rounded-lg">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold">STATUS: ACTIVE</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Lockbox Protected with Enhanced Visual */}
      <section id="lockbox-protection" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Enhanced Lockbox Diagram */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 p-8 shadow-2xl text-white hover:shadow-[0_30px_90px_-20px_rgba(0,137,41,0.3)] transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#008929]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="text-center mb-8 relative z-10">
                  <div className="inline-flex items-center gap-3 mb-4 bg-white/10 px-4 py-2 rounded-full">
                    <Lock className="w-6 h-6 text-emerald-400 animate-pulse" />
                    <h3 className="text-2xl font-bold">LOCKBOX</h3>
                  </div>
                  <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg">
                    SECURITY PROTOCOL ACTIVE
                  </Badge>
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Tenant Rent Input */}
                  <div className="bg-slate-700/50 border-2 border-blue-400/50 rounded-xl p-6 hover:border-blue-400 hover:bg-slate-700/70 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-bold">TENANT RENT</span>
                    </div>
                    <p className="text-sm text-slate-300 pl-16 font-medium">Collected Monthly</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <div className="w-10 h-10 bg-slate-700 border-2 border-slate-600 rounded-full flex items-center justify-center group-hover:bg-slate-600 group-hover:border-slate-500 transition-all duration-300">
                      <ArrowRight className="w-6 h-6 text-emerald-400 rotate-90 animate-pulse" />
                    </div>
                  </div>

                  {/* Bank & Investors */}
                  <div className="bg-emerald-500/20 border-2 border-emerald-400 rounded-xl p-6 hover:border-emerald-300 hover:bg-emerald-500/30 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-bold">BANK & INVESTORS</span>
                    </div>
                    <p className="text-sm text-emerald-200 pl-16 font-medium">Priority Distribution</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center py-2">
                    <div className="w-10 h-10 bg-slate-700 border-2 border-slate-600 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-slate-500 rotate-90" />
                    </div>
                  </div>

                  {/* Developer */}
                  <div className="bg-slate-700/30 border-2 border-slate-600 rounded-xl p-6 hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300 group/item cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center shadow-lg group-hover/item:shadow-xl transition-all duration-300">
                        <Users className="w-6 h-6 text-slate-300" />
                      </div>
                      <span className="text-lg font-bold">DEVELOPER</span>
                    </div>
                    <p className="text-sm text-slate-400 pl-16 font-medium">Residual Distribution</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Content */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-300 to-blue-200 bg-clip-text text-transparent mb-8 text-balance leading-[1.1]">
                Lockbox protected cash flows by design
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                With Sylvan, RIAs do not face uncertainty around cash flow control and capital priority. We enforce a
                prioritized distribution waterfall where rental income flows to the bank and Sylvan investors before the
                developer can access a single dollar. You gain the peace of mind that comes from a rigorous legal
                structure designed specifically to mitigate risk and prioritize the safety of your principal.
              </p>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-slate-900 text-lg px-8 py-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 rounded-xl font-semibold group"
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
      <section id="rental-yields" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-amber-500/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-300 to-blue-200 bg-clip-text text-transparent mb-8 text-balance leading-[1.1]">
                Access established rental yields without ownership risk
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
                RIAs can bypass the volatility of developer equity by participating in standardized debt issuance on
                existing properties. You are buying into proven rental yields rather than betting on the operational
                success of a developer. You get direct exposure to the performance of the real estate asset itself with a
                clear and secure path to returns.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <Card className="bg-gradient-to-br from-[#095520] via-[#095520] to-[#008929] text-white p-8 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <p className="text-sm mb-3 opacity-90 font-medium uppercase tracking-wide">Target Net Yields</p>
                  <p className="text-4xl font-bold group-hover:text-white transition-colors duration-300">8-12%</p>
                </Card>
                <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <p className="text-sm mb-3 opacity-90 font-medium uppercase tracking-wide">Distributions</p>
                  <p className="text-4xl font-bold group-hover:text-white transition-colors duration-300">Monthly</p>
                </Card>
              </div>

              <Button
                size="lg"
                asChild
                className="bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 text-lg px-8 py-6 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(217,119,6,0.6)] transition-all duration-500 hover:scale-110 font-semibold rounded-xl group relative overflow-hidden"
              >
                <Link href="/listings" className="flex items-center gap-2 relative">
                  <span>View Current Listings</span>
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2 duration-300" />
                </Link>
              </Button>
            </div>

            {/* Right - Performance Chart */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#008929]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Performance Analysis</h3>
                </div>

                <div className="mb-8 relative z-10">
                  <p className="text-sm text-slate-600 mb-3 font-medium">Yield Consistency vs. Volatility</p>
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-2 border-emerald-200 rounded-xl p-6 hover:border-emerald-300 transition-colors duration-300">
                    <p className="text-3xl font-bold text-emerald-700">+12.4%</p>
                    <p className="text-sm text-emerald-600 mt-1">Annualized Return</p>
                  </div>
                </div>

                {/* Animated Bar Chart */}
                <div className="space-y-4 relative z-10">
                  {[
                    { label: "Q1", value: 64, percent: "6.4%" },
                    { label: "Q2", value: 78, percent: "7.8%" },
                    { label: "Q3", value: 73, percent: "7.3%" },
                    { label: "Q4", value: 85, percent: "8.5%" },
                    { label: "Q1 '24", value: 96, percent: "9.6%" },
                    { label: "Q2 '24", value: 92, percent: "9.2%" },
                    { label: "Q3 '24", value: 102, percent: "10.2%" },
                    { label: "Q4 '24", value: 106, percent: "10.6%" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group/bar">
                      <span className="text-xs font-bold text-slate-700 w-14 group-hover/bar:text-slate-900 transition-colors duration-300">{item.label}</span>
                      <div className="flex-1 bg-slate-200 rounded-full h-8 overflow-hidden relative hover:bg-slate-300 transition-colors duration-300">
                        <div
                          className="bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 h-full flex items-center justify-end pr-3 transition-all duration-1000 ease-out shadow-lg group-hover/bar:shadow-emerald-500/50 group-hover/bar:shadow-lg"
                          style={{ width: `${item.value}%` }}
                        >
                          <span className="text-xs font-bold text-white font-mono">{item.percent}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 relative z-10">
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-2 group/legend">
                      <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-md group-hover/legend:shadow-lg transition-all duration-300"></div>
                      <span className="text-slate-600 font-medium">Actual Yield</span>
                    </div>
                    <div className="flex items-center gap-2 group/legend">
                      <div className="w-4 h-4 bg-slate-300 rounded-md group-hover/legend:bg-slate-400 transition-all duration-300"></div>
                      <span className="text-slate-600 font-medium">Projected</span>
                    </div>
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
