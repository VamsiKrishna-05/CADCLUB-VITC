import { motion } from "framer-motion";

export default function HeroSection() {
  const gearVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const gearReverseVariants = {
    animate: {
      rotate: -360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [-20, 0, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const wireframeVariants = {
    animate: {
      pathLength: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900/20 bg-mechanical flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gears */}
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 text-cad-primary/30"
          variants={gearVariants}
          animate="animate"
        >
          <i className="fas fa-cog text-6xl gear-animation"></i>
        </motion.div>
        
        <motion.div 
          className="absolute top-40 right-20 w-12 h-12 text-cad-secondary/25"
          variants={gearReverseVariants}
          animate="animate"
        >
          <i className="fas fa-cog text-4xl gear-animation"></i>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 left-20 w-20 h-20 text-cad-primary/20"
          variants={gearVariants}
          animate="animate"
        >
          <i className="fas fa-cog text-7xl gear-animation"></i>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-14 h-14 text-cad-secondary/20"
          variants={gearReverseVariants}
          animate="animate"
        >
          <i className="fas fa-cog text-5xl gear-animation"></i>
        </motion.div>
        
        {/* CAD Wireframe Animation */}
        <motion.svg 
          className="absolute top-1/2 right-10 w-32 h-32 opacity-10" 
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
        >
          <motion.rect 
            x="10" y="10" width="80" height="80" 
            fill="none" stroke="hsl(60 100% 50%)" strokeWidth="1"
            variants={wireframeVariants}
            animate="animate"
          />
          <motion.circle 
            cx="50" cy="50" r="30" 
            fill="none" stroke="hsl(45 100% 60%)" strokeWidth="1"
            variants={wireframeVariants}
            animate="animate"
          />
          <motion.line 
            x1="20" y1="20" x2="80" y2="80" 
            stroke="hsl(60 100% 50%)" strokeWidth="1"
            variants={wireframeVariants}
            animate="animate"
          />
          <motion.line 
            x1="80" y1="20" x2="20" y2="80" 
            stroke="hsl(45 100% 60%)" strokeWidth="1"
            variants={wireframeVariants}
            animate="animate"
          />
        </motion.svg>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          variants={floatVariants}
          animate="animate"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-cad-primary mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CAD CLUB
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-cad-secondary mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            VIT Chennai
          </motion.h2>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-2xl text-cad-light-gray mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Designing Tomorrow's Engineers Through Innovation, Creativity, and Technical Excellence
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button 
            className="bg-cad-primary text-cad-black px-8 py-3 rounded-lg font-semibold hover:bg-cad-secondary transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-rocket mr-2"></i>Join Our Club
          </motion.button>
          <motion.button 
            className="border-2 border-cad-primary text-cad-primary px-8 py-3 rounded-lg font-semibold hover:bg-cad-primary hover:text-cad-black transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('gallery');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fas fa-play mr-2"></i>Explore Projects
          </motion.button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-2xl text-cad-primary opacity-70"></i>
        </motion.div>
      </div>
    </section>
  );
}
