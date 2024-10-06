import { motion } from 'framer-motion';

const Transition = ({ children }) => {
  return (
    <>
      {/* Exiting screen - moving up */}
      <motion.div
        className="slideOut"
        initial={{ y: 0 }}     // starts at the current position
        animate={{ y: '-100%' }}  // moves out upwards
        exit={{ y: '-100%' }}     // stays at top when exiting
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}
      />
      
      {/* Entering screen - moving in from bottom */}
      <motion.div
        className="slideIn"
        initial={{ y: '100%' }}    // starts off-screen at the bottom
        animate={{ y: 0 }}         // slides into view
        exit={{ y: 0 }}            // stays in place when entering
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Transition;
