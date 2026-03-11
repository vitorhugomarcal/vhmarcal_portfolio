"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  content: string;
  link: string;
  image: string;
  label?: string;
}

export function Certificate({image, title, content, link, label = 'Show certificate'}: Props) {
  return (
    <motion.div
      className="max-w-md mx-8 mb-8 bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl lg:max-w-6xl w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
    >
      <div className="md:flex lg:justify-center lg:items-center">
        <div className="md:shrink-0 overflow-hidden">
          <motion.img
            className="h-48 w-full object-cover md:h-full md:object-right md:w-80 lg:w-full lg:h-80"
            src={image}
            alt={title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-8">
          <div className="flex flex-row text-center items-center gap-1 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <ShieldCheck className='w-4 h-4' />
            {title}
          </div>
          <p className="mt-2 text-slate-500">{content}</p>
          <div className='flex gap-4 mt-4 items-center justify-center'>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-md leading-tight font-light text-indigo-500 hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}