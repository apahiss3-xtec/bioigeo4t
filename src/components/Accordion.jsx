import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-start"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-lg">{title}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          className="text-[var(--purple)] font-display text-xl"
          aria-hidden="true"
        >
          ›
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
