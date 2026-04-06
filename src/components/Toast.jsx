import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Toast = memo(({ isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        key="toast"
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.92 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] glass-panel px-4 py-3 rounded-xl flex items-center gap-3 text-white"
      >
        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
          <Check size={14} strokeWidth={3} />
        </div>
        <span className="font-medium text-sm whitespace-nowrap">
          Code <strong>ARIYD8B6</strong> copied to clipboard!
        </span>
      </motion.div>
    )}
  </AnimatePresence>
));

Toast.displayName = 'Toast';
export default Toast;
