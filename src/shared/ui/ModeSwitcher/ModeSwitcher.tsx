'use client';

import { IoMdMoon } from 'react-icons/io';
import { IoSunnyOutline } from 'react-icons/io5';
import { useToggleMode } from '@/shared/hooks';
import { Mode } from '@/shared/hooks/useToggleMode';
import { motion, AnimatePresence } from 'framer-motion';

export const ModeSwitcher = () => {
  const { mode, toggleMode } = useToggleMode();
  const isDarkMode = mode === Mode.DARK;

  const motionProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.3 },
  };
  return (
    <motion.button
      onClick={toggleMode}
      className="relative flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-gray-900 shadow-xl transition-all hover:shadow-lg active:scale-95 dark:border-gray-600 dark:bg-neutral-700 dark:text-white"
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div key="moon" {...motionProps}>
            <IoSunnyOutline size={20} />
          </motion.div>
        ) : (
          <motion.div key="sun" {...motionProps}>
            <IoMdMoon size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
