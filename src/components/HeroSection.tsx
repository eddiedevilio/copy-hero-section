
import React from 'react';
import { Facebook, Instagram, ShoppingCart, CreditCard, Package, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-[#D8A094] bg-gradient-to-r from-[#f9f2f0] to-[#fff9f8] overflow-hidden shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image placeholder */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-400 h-[400px] w-full rounded-lg">
              {/* Image placeholder */}
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Logo and brand at top right */}
            <div className="flex justify-end">
              <div className="text-[#D8A094] font-bold text-xl sm:text-2xl">
                URBANIQ
              </div>
            </div>
            
            {/* Main content */}
            <div className="space-y-4">
              <p className="text-gray-700 text-lg">We are now accepting</p>
              <h1 className="text-5xl sm:text-6xl font-black">SHEIN</h1>
              
              {/* Icons row */}
              <div className="flex justify-center gap-6 py-4">
                <ShoppingCart className="text-[#D8A094]" size={24} />
                <div className="h-6 border-l border-[#D8A094]"></div>
                <CreditCard className="text-[#D8A094]" size={24} />
                <div className="h-6 border-l border-[#D8A094]"></div>
                <Package className="text-[#D8A094]" size={24} />
              </div>
              
              {/* List of services */}
              <div className="space-y-1 text-center">
                <p className="text-gray-800">Browse and place your order.</p>
                <p className="text-gray-800">Pay securely (online or cash).</p>
                <p className="text-gray-800">Receive your order at your doorstep!</p>
              </div>
              
              {/* ID number */}
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold">9790065</p>
              </div>
              
              {/* CTA button */}
              <div className="pt-2">
                <Button 
                  className="w-full bg-white hover:bg-gray-50 text-[#D8A094] border border-[#D8A094] rounded-full py-6 font-semibold text-lg"
                >
                  ORDER NOW
                </Button>
              </div>
              
              {/* Contact buttons */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button 
                  variant="outline"
                  className="border-[#D8A094] text-[#D8A094] rounded-full"
                >
                  <Phone size={18} className="mr-2" />
                  Contact
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#D8A094] text-[#D8A094] rounded-full"
                >
                  <Phone size={18} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
            
            {/* Social icons */}
            <div className="flex justify-end items-center gap-4 pt-4">
              <Facebook className="text-[#D8A094]" size={20} />
              <Instagram className="text-[#D8A094]" size={20} />
            </div>
            
            {/* Footer text */}
            <div className="text-end text-xs text-gray-600">
              URBANIQ BY TRIPL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
