"use client";

import { EVENT_DATA } from "@/lib/constants";

export function MapEmbed() {
  return (
    <div className="relative w-full h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-primary/20 bg-card">
      {/* Google Maps Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.5!2d-72.8018!3d41.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65a8c0f1a1a1f%3A0x5c5c5c5c5c5c5c5c!2sWestminster%20School%2C%20995%20Hopmeadow%20St%2C%20Simsbury%2C%20CT%2006070!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Westminster School Location"
        className="w-full h-full"
      />
      
      {/* Info Overlay on Hover */}
      <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-lg p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
                            <h3 className="font-display text-foreground text-sm">Westminster School</h3>
            <p className="text-xs text-foreground-muted">{EVENT_DATA.address}</p>
          </div>
        </div>
      </div>

      {/* Direct link for fallback */}
      <a
        href={`https://maps.google.com/?q=${encodeURIComponent('Westminster School Simsbury CT')}`}
        target="_blank"
        rel="noopener noreferrer"
                        className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-display hover:bg-primary/90 transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Open in Maps
      </a>
    </div>
  );
}