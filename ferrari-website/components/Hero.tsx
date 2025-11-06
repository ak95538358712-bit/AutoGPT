export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-ferrari-red/20" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ferrari-red rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ferrari-red rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight">
          FERRARI
        </h1>
        <p className="font-inter text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Where passion meets performance. Experience the pinnacle of Italian automotive excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#models"
            className="px-8 py-4 bg-ferrari-red text-white font-inter font-semibold rounded-sm hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore Models
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-inter font-semibold rounded-sm hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
