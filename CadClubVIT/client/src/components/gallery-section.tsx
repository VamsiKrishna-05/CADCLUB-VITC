import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import Lightbox from "@/components/ui/lightbox";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [visibleImages, setVisibleImages] = useState(12);

  const categories = ["all", "workshops", "projects", "competitions", "events"];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter((img: any) => img.category === selectedCategory);

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  const loadMoreImages = () => {
    setVisibleImages(prev => prev + 8);
  };

  return (
    <section id="gallery" className="py-20 bg-cad-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cad-primary mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-cad-secondary mx-auto mb-8"></div>
          <p className="text-xl text-cad-light-gray max-w-3xl mx-auto">
            Explore our journey through workshops, projects, competitions, and memorable moments
          </p>
        </motion.div>

        {/* Gallery Categories */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleImages(12);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-cad-secondary text-black'
                  : 'bg-cad-gray text-cad-light-gray hover:bg-cad-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div 
          className="photo-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {filteredImages.slice(0, visibleImages).map((image: any, index: number) => (
            <motion.div 
              key={index}
              className="aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setLightboxImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {visibleImages < filteredImages.length && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button 
              onClick={loadMoreImages}
              className="bg-cad-secondary text-black px-8 py-3 rounded-lg font-semibold hover:bg-cad-primary hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-images mr-2"></i>Load More Photos
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox
          src={lightboxImage}
          alt="Gallery Image"
          onClose={() => setLightboxImage(null)}
        />
      )}
    </section>
  );
}
