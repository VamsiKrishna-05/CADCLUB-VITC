import { motion } from "framer-motion";
import { faculty, students } from "@/data/members";

export default function MembersSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="members" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Our Team
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-cad-secondary mx-auto mb-8"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="text-xl text-cad-light-gray max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Meet the dedicated individuals who drive innovation and excellence at CAD Club VIT Chennai
          </motion.p>
        </motion.div>

        {/* Faculty Section */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-cad-primary mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Faculty Advisors
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {faculty.map((member, index) => (
              <motion.div 
                key={index}
                className="member-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.1)" }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-xl font-semibold text-cad-primary text-center mb-2">{member.name}</h4>
                <p className="text-cad-secondary text-center font-medium mb-3">{member.position}</p>
                <p className="text-cad-light-gray text-sm text-center mb-4">{member.department}</p>
                <div className="flex justify-center space-x-3">
                  <motion.a 
                    href="#" 
                    className="text-cad-primary hover:text-cad-secondary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin text-lg"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-cad-light-gray hover:text-cad-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-envelope text-lg"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Student Members Section */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-cad-primary mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Club Members
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {students.map((member, index) => (
              <motion.div 
                key={index}
                className="member-card bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.1)" }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-cad-primary text-center mb-2">{member.name}</h4>
                <p className="text-cad-secondary text-center font-medium mb-2">{member.position}</p>
                <p className="text-cad-light-gray text-xs text-center mb-3">{member.year}</p>
                <div className="flex justify-center space-x-3">
                  <motion.a 
                    href="#" 
                    className="text-cad-primary hover:text-cad-secondary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fab fa-linkedin text-sm"></i>
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-cad-light-gray hover:text-cad-primary transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className="fas fa-envelope text-sm"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
