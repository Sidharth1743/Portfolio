'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export function Contact() {
  // Contact information
  const contactInfo = {
    name: 'Sidharthan',
    location: 'Coimbatore',
    role: 'AI Freelancer',
    email: 'sid250581@gmail.com',
    socials: [
      {
        name: 'Gmail',
        url: 'mailto:sid250581@gmail.com',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sidharthan1743/',
      },
      {
        name: 'X',
        url: 'https://x.com/sid250581',
      },
      {
        name: 'Hashnode Blog',
        url: 'https://dirtyhands.hashnode.dev/',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/Sidharth1743',
      },
    ],
  };

  // Function to handle opening links
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto mt-8 w-full">
      <div className="bg-accent w-full overflow-hidden rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
            {contactInfo.name}
          </h2>
          <p className="text-muted-foreground mt-2 text-base">
            {contactInfo.role}
          </p>
          <p className="text-muted-foreground text-sm">
            {contactInfo.location}
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-col gap-4 md:mt-10">
          {contactInfo.socials.map((social) => (
            <button
              key={social.name}
              className="group flex items-center gap-2 text-left transition-colors"
              onClick={() => openLink(social.url)}
              title={social.name}
            >
              <span className="text-base font-medium text-blue-500 hover:underline sm:text-lg">
                {social.name}
              </span>
              <ChevronRight className="h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
