'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, buttonText, buttonLink }) {
  return (
    <motion.div  
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='w-full h-full '
    > 
      <div className='shadow-2xl shadow-accent/40 rounded-4xl w-full h-[50vh] relative'>
        <h2 className='w-max mb-6 text-xl absolute -top-3 -left-3 font-[700] border-2 border-accent bg-accent/20 px-3 py-1 rounded-full text-accent'>
          {title}
        </h2>
        <Link 
          target='_blank' 
          href={buttonLink} 
          className='btn absolute bottom-5 left-1/2 -translate-x-1/2'
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
}