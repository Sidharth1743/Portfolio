'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'AI Developer',
      company: 'SpineDAO',
      location: 'Remote',
      period: 'Current',
      description: [
        'Contributing to AI team on social network and Chronos agent development',
        'Working with RAG pipelines and LangGraph/LangChain',
        'Building production-grade AI agents integrated with Gmail and social platforms',
        'Developing multi-agent systems and knowledge graphs',
      ],
    },
    // Add more experiences here
  ];

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <h2 className="mb-6 text-3xl font-semibold text-foreground md:text-4xl">
        Work Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl bg-accent p-6 md:p-8"
          >
            <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                  {exp.title}
                </h3>
                <p className="text-lg font-medium text-muted-foreground">
                  {exp.company}
                </p>
              </div>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                <div className="flex items-center gap-1 md:justify-end">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center gap-1 md:justify-end">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground md:text-base"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
