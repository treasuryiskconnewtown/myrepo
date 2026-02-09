
import React, { useState } from 'react';

import { 
  EVENT_TITLE, 
  VENUE, 
  DATES, 
  ACTIVITIES, 
  SCHEDULE, 
  CONTACTS 
} from './constants';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <header className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay - Scenic Ocean View */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80")',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-slate-900/90" />
        
        {/* Logo and Content */}
        <div className="relative z-20 container mx-auto px-6 text-white">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="flex items-center space-x-3 mb-4 animate-fade-in">
              <img 
                src="https://picsum.photos/seed/iskcon/100/100" 
                alt="ISKCON Logo" 
                className="h-16 w-16 bg-white rounded-full p-2 border-2 border-saffron"
              />
              <span className="text-xl font-extrabold tracking-widest text-saffron uppercase">ISKCON EIDC</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-tight max-w-4xl animate-fade-in [animation-delay:200ms]">
              {EVENT_TITLE}
              <span className="text-saffron"> 2026</span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-xl md:text-2xl font-medium animate-fade-in [animation-delay:400ms]">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl">
                <svg className="h-6 w-6 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {DATES}
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-xl">
                <svg className="h-6 w-6 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {VENUE}
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-12 py-5 bg-saffron hover:bg-orange-600 text-white font-black text-xl rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 animate-fade-in [animation-delay:600ms] uppercase tracking-wider"
            >
              Register Now
            </button>
          </div>
        </div>
      </header>

      {/* Activities & Poster Section */}
      <main className="flex-grow">
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
              {/* Activity Points (Left) */}
              <div className="lg:w-5/12 flex flex-col justify-center space-y-6">
                <div className="mb-4">
                  <h2 className="text-saffron font-black text-2xl uppercase tracking-[0.2em] animate-fade-in">Our Activities</h2>
                  <div className="w-16 h-1.5 bg-saffron mt-2 rounded-full"></div>
                </div>
                {ACTIVITIES.map((activity, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-6 p-6 md:p-8 bg-orange-50/40 rounded-3xl border border-orange-100 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 animate-fade-in group"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-saffron flex items-center justify-center text-white shadow-lg group-hover:rotate-3 transition-transform">
                      <svg className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xl md:text-2xl font-extrabold text-slate-800 leading-tight">
                      {activity}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Event Poster (Right) */}
              <div className="lg:w-7/12 w-full flex justify-center items-center">
                <div className="relative animate-fade-in [animation-delay:600ms] w-full max-w-lg">
                  {/* Outer Frame Effect */}
                  <div className="relative bg-slate-100 rounded-[2.5rem] p-3 shadow-2xl border border-slate-200 group transition-all duration-500 hover:shadow-saffron/20">
                    <div className="overflow-hidden rounded-[2rem] bg-slate-200 aspect-[3/4.2] flex items-center justify-center relative">
                      <img 
                        src="https://accounts.iskconnewtown.com/eidcposter.jpeg"
                        alt="EIDC Brahmachari Sangotsava 2026 Poster" 
                        className="w-full h-full object-contain bg-white rounded-[1.8rem] transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback to a nice colored gradient if user's direct link is blocked or down
                          e.currentTarget.style.backgroundColor = '#f1f5f9';
                        }}
                      />
                      {/* Sub-label for visual context */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Sangotsava Flyer</span>
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-orange-200/40 rounded-full blur-3xl"></div>
                  <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-saffron/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-black text-slate-900">Event Schedule</h2>
              <div className="w-24 h-1.5 bg-saffron mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SCHEDULE.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-saffron uppercase tracking-widest mb-2">{item.date}</h3>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <div className="flex items-center gap-2 text-slate-500 mb-6 pb-6 border-b border-slate-100">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-sm font-medium">{item.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {item.activities.map((act, i) => (
                      <li key={i} className="text-slate-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="py-16 bg-saffron text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Join the Celebration?</h2>
              <p className="text-lg opacity-90">Secure your spot today for the 2026 Sangotsava.</p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-saffron font-black text-lg rounded-full shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 active:translate-y-0 uppercase tracking-wider"
            >
              Register Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="https://picsum.photos/seed/iskcon/100/100" alt="ISKCON Logo" className="h-12 w-12 bg-white rounded-full p-1" />
                <span className="text-xl font-bold text-white">ISKCON EIDC</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Empowering the Brahmachari community through spiritual education, sanga, and dedicated service.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Contact Us</h4>
              <div className="space-y-4">
                {CONTACTS.map((contact, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-saffron">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 font-bold uppercase">{contact.label}</span>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-white font-medium hover:text-saffron transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 text-center md:text-right">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Join Us In</h4>
              <p className="text-3xl font-serif italic text-saffron">Visakhapatnam</p>
              <p className="text-slate-500">April 2026 • Brahmachari Sangotsava</p>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ISKCON EIDC Brahmachari Sangotsava. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Registration Modal Overlay */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default App;
