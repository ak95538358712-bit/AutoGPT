const features = [
  {
    title: "Aerodynamics",
    description: "Every curve, every line is sculpted to perfection, maximizing downforce while minimizing drag for ultimate performance.",
    stat: "800+ kg",
    label: "Downforce at 250 km/h",
  },
  {
    title: "Power",
    description: "Ferrari engines represent the pinnacle of automotive engineering, delivering breathtaking power with unmistakable sound.",
    stat: "1000 CV",
    label: "Maximum Power Output",
  },
  {
    title: "Innovation",
    description: "From Formula 1 to the road, Ferrari's cutting-edge technology pushes the boundaries of what's possible.",
    stat: "75+ Years",
    label: "Racing Innovation",
  },
  {
    title: "Craftsmanship",
    description: "Each Ferrari is hand-assembled by master craftsmen in Maranello, ensuring perfection in every detail.",
    stat: "100%",
    label: "Made in Italy",
  },
];

export default function Performance() {
  return (
    <section id="performance" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Performance Excellence
          </h2>
          <p className="font-inter text-xl text-gray-400 max-w-2xl mx-auto">
            Engineering perfection meets Italian artistry in every Ferrari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-black to-gray-900 border border-gray-800 rounded-lg hover:border-ferrari-red transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-ferrari-red opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative">
                <h3 className="font-playfair text-3xl font-bold text-white mb-4 group-hover:text-ferrari-red transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-inter text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-end gap-2">
                  <div className="font-playfair text-4xl font-bold text-ferrari-red">
                    {feature.stat}
                  </div>
                  <div className="font-inter text-sm text-gray-500 pb-1">
                    {feature.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-ferrari-red to-red-800 p-12 text-center">
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="relative z-10">
            <h3 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Experience the Prancing Horse
            </h3>
            <p className="font-inter text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a test drive and feel the power, precision, and passion that defines Ferrari
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-ferrari-red font-inter font-semibold rounded-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Test Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
