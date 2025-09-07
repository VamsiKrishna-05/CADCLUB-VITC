import { motion } from "framer-motion";

export default function Footer() {
  const logoSvg = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="20" fill="#F59E0B"/>
      <svg x="8" y="8" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 9V15M9 12H15M21 12A9 9 0 1 1 3 12A9 9 0 0 1 21 12Z" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </svg>
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Our Team', id: 'members' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  const programs = [
    'CAD Workshops',
    'Design Competitions',
    'Industry Projects',
    'Technical Seminars',
    'Certification Courses'
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Club Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              {logoSvg}
              <div>
                <h3 className="text-2xl font-bold text-cad-secondary">CAD CLUB</h3>
                <p className="text-cad-light-gray">VIT Chennai</p>
              </div>
            </div>
            <p className="text-cad-light-gray mb-4 max-w-md">
              Empowering the next generation of engineers through innovative CAD technologies, 
              hands-on learning, and collaborative projects that shape the future of design and manufacturing.
            </p>
            <p className="text-sm text-cad-light-gray">
              © 2024 CAD Club VIT Chennai. All rights reserved.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.id)}
                    className="text-cad-light-gray hover:text-cad-secondary transition-colors text-left"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <motion.a 
                    href="#" 
                    className="text-cad-light-gray hover:text-cad-secondary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {program}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-cad-gray mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-cad-light-gray">
            Made with <i className="fas fa-heart text-cad-secondary"></i> by CAD Club VIT Chennai | 
            <a href="#" className="hover:text-cad-secondary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-cad-secondary transition-colors ml-1">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
