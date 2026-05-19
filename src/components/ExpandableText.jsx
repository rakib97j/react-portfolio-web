import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ExpandableText({ children, className = "", bgClass = "from-slate-50 dark:from-[#080808]" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-start w-full">
      {/* Desktop version (Always visible) */}
      <p className={`hidden md:block ${className}`}>{children}</p>
      
      {/* Mobile version (Expandable) */}
      <div className="block md:hidden w-full">
        <div className="relative">
          <motion.div 
            initial={false}
            animate={{ 
               height: isExpanded ? 'auto' : '4.5rem',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`overflow-hidden`}
          >
            <p className={className}>{children}</p>
          </motion.div>
          
          {/* Subtle fade out at the bottom when collapsed */}
          {!isExpanded && (
            <div className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t ${bgClass} to-transparent pointer-events-none`}></div>
          )}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-[10px] font-mono font-bold text-brand uppercase tracking-widest hover:brightness-125 transition-all flex items-center gap-1"
        >
          {isExpanded ? '- SEE LESS' : '+ SEE MORE'}
        </button>
      </div>
    </div>
  );
}
