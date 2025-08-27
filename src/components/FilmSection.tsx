"use client";

import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Video, Download, Star, Camera, Play } from "lucide-react";
import { useEffect, useRef } from "react";

export function FilmSection() {
  return (
    <Section 
      id="film"
      className="bg-background-lighter"
    >
      {/* Top Section - STARLIGHT Hero */}
      <div className="flex flex-col items-center justify-center pt-8 pb-16 px-4 text-center">
        <Reveal delay={0.2}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-bold mb-8 max-w-3xl">
            GAME FILM POWERED BY <span className="text-primary">STARLIGHT</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.4}>
          <div className="mb-6">
            <img 
              src="/sl.png" 
              alt="Starlight" 
              className="w-32 md:w-40 h-auto object-contain"
            />
          </div>
        </Reveal>
        

        
        <Reveal delay={0.8}>
          <Button 
            variant="cta" 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://starlighttv.net/events/5', '_blank')}
          >
            Order Game Film
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
        </Reveal>
      </div>

      {/* Bottom Section - Video Demo */}
      <div className="px-4 pb-16">
        <Reveal delay={0.2}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
              Player Tagging & Breakdown Preview
            </h2>
            
            {/* Centered Video */}
            <div className="flex justify-center mb-16">
              <video
                className="w-full max-w-5xl rounded-xl shadow-2xl"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/demo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Feature Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Reveal delay={0.3}>
                <div className="bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">4K Game Film</h3>
                  <p className="text-foreground-muted text-sm">Crystal clear 4K resolution capturing every detail</p>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Player Tagging and Breakdown</h3>
                  <p className="text-foreground-muted text-sm">Advanced analytics with individual player tracking</p>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Available in 2-4 Days</h3>
                  <p className="text-foreground-muted text-sm">Fast turnaround for immediate review and analysis</p>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className="bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">College Coach Game Film Access</h3>
                  <p className="text-foreground-muted text-sm">Direct access for college recruiters and coaches</p>
                </div>
              </Reveal>

              <Reveal delay={0.7}>
                <div className="bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Preorder for a 20% Discount</h3>
                  <p className="text-foreground-muted text-sm">Save on your game film package with early booking</p>
                </div>
              </Reveal>

              <Reveal delay={0.8}>
                <div className="bg-card border border-primary/10 rounded-xl p-8 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Personal Highlights</h3>
                  <p className="text-foreground-muted text-sm">Custom player highlight reels available upon request</p>
                </div>
              </Reveal>
            </div>

            {/* Partnership Information */}
            <Reveal delay={0.9}>
              <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-xl p-8 text-center max-w-4xl mx-auto">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Partnership Information</h3>
                <p className="text-foreground-muted text-lg leading-relaxed">
                  We have partnered with Starlight to be the sole provider of game film at Centerstage. Any elevated poles for game film purposes are not allowed and will result in removal if not taken down.
                </p>
              </div>
            </Reveal>

            {/* Bottom Order Button */}
            <Reveal delay={1.0}>
              <div className="text-center mt-12">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://starlighttv.net/events/5', '_blank')}
                >
                  Order Game Film
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}