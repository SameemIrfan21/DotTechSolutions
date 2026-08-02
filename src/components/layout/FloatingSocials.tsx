"use client";

import { MessageCircle } from "lucide-react";

/**
 * Floating WhatsApp Button
 * Fixed on the bottom right corner as per reference design.
 */
export default function FloatingSocials() {
  return (
    <a 
      href="https://wa.me/919025088044" 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp no-print" 
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
