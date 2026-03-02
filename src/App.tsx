/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Facebook, MessageCircle, ArrowRight, ExternalLink } from "lucide-react";

const Logo = () => (
  <div className="flex flex-col items-center justify-center tracking-[0.2em]">
    <span className="font-serif text-3xl md:text-4xl font-medium text-stone-900">MAGENTA</span>
    <span className="font-sans text-[10px] md:text-xs font-semibold text-stone-500 uppercase mt-1">Cosmetics & Academy</span>
  </div>
);

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col selection:bg-magenta/20 selection:text-magenta">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 bg-[#FAFAFA]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-4xl mx-auto text-center space-y-12"
        >
          <Logo />
          
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-900 leading-[1.1] tracking-tight">
              Próximamente nuestra <br className="hidden md:block" />
              <span className="italic">tienda online</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light tracking-wide">
              Productos profesionales para cejas, pestañas y uñas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-magenta text-white font-sans font-medium rounded-full flex items-center justify-center gap-2 transition-colors hover:bg-magenta-light shadow-lg shadow-magenta/20"
            >
              <MessageCircle size={20} />
              Escríbenos por WhatsApp
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-stone-300 text-stone-800 font-sans font-medium rounded-full flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors"
            >
              Ver catálogo actual
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Descubre más</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-300 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-magenta/5 border border-magenta/10 rounded-full">
                <span className="text-magenta text-xs font-semibold uppercase tracking-widest">Sobre Nosotros</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                Calidad profesional en cada detalle
              </h2>
              <div className="space-y-6 text-stone-600 font-sans text-lg leading-relaxed font-light">
                <p>
                  En MAGENTA COSMETICS & ACADEMY, nos dedicamos a elevar los estándares de la belleza profesional. 
                  Nuestra pasión por la excelencia nos ha llevado a desarrollar una línea exclusiva de productos 
                  especializados para el cuidado de cejas, pestañas y uñas.
                </p>
                <p>
                  Actualmente estamos trabajando en nuestra nueva plataforma de ecommerce para brindarte una 
                  experiencia de compra excepcional. Mientras tanto, seguimos atendiendo todos tus pedidos 
                  y asesorías de forma personalizada a través de nuestros canales directos.
                </p>
              </div>
              <div className="pt-4">
                <a 
                  href="https://wa.me/your-number" 
                  className="inline-flex items-center gap-2 text-magenta font-medium hover:underline underline-offset-8 decoration-2"
                >
                  Realizar pedido ahora <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional Beauty Tools" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-magenta/5 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notice Block */}
      <section className="py-24 px-6 bg-stone-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="w-12 h-px bg-magenta mx-auto" />
          <p className="font-serif text-2xl md:text-3xl text-stone-800 leading-relaxed italic">
            “Estamos preparando una experiencia de compra online moderna y fácil. 
            Muy pronto podrás comprar directamente desde nuestra tienda.”
          </p>
          <div className="w-12 h-px bg-magenta mx-auto" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-stone-400 text-sm font-light tracking-wide">
              Elevando la belleza a un nivel profesional.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-8">
              <a href="#" className="text-stone-400 hover:text-magenta transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-magenta transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-stone-400 hover:text-magenta transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Contáctanos</span>
              <a href="mailto:info@magentacosmetics.com" className="text-stone-600 hover:text-magenta transition-colors text-sm">
                info@magentacosmetics.com
              </a>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-stone-400 text-xs font-light tracking-widest uppercase">
              &copy; {currentYear} MAGENTA COSMETICS & ACADEMY
            </p>
            <p className="text-stone-300 text-[10px] tracking-widest uppercase">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
