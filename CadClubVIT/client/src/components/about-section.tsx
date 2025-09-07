import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { number: "150+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Industry Collaborations" },
    { number: "5+", label: "Years of Excellence" }
  ];

  const values = [
    {
      icon: "fas fa-drafting-compass",
      color: "text-cad-primary",
      bgColor: "bg-cad-primary/10",
      title: "Mission",
      description: "To foster innovation and technical excellence in computer-aided design, bridging the gap between theoretical knowledge and practical application in engineering."
    },
    {
      icon: "fas fa-eye",
      color: "text-cad-secondary",
      bgColor: "bg-cad-secondary/10",
      title: "Vision",
      description: "To become the premier hub for CAD education and innovation at VIT Chennai, producing industry-ready engineers who can design the future."
    },
    {
      icon: "fas fa-users",
      color: "text-cad-primary",
      bgColor: "bg-cad-primary/20",
      title: "Community",
      description: "A collaborative environment where students learn, share knowledge, and work on real-world projects using industry-standard CAD software and methodologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-cad-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-cad-primary mb-4"
            variants={itemVariants}
          >
            About CAD Club
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-cad-secondary mx-auto mb-8"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-cad-light-gray max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Empowering the next generation of engineers through hands-on experience with cutting-edge CAD technologies
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Students working on CAD projects" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-3xl font-bold text-cad-primary mb-6"
              variants={itemVariants}
            >
              Who We Are
            </motion.h3>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className={`w-12 h-12 ${value.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <i className={`${value.icon} ${value.color} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-cad-primary mb-2">{value.title}</h4>
                    <p className="text-cad-light-gray">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className={`text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-cad-primary' : 'text-cad-secondary'}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-cad-light-gray">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
