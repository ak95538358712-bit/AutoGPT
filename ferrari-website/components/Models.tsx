const models = [
  {
    name: "SF90 Stradale",
    description: "The first plug-in hybrid from Ferrari, combining a V8 engine with three electric motors for unprecedented performance.",
    specs: "1000 CV • 0-100 km/h in 2.5s • 340 km/h",
    color: "from-red-900 to-red-600",
  },
  {
    name: "296 GTB",
    description: "A mid-rear-engined berlinetta that redefines the concept of driving pleasure with its V6 hybrid powertrain.",
    specs: "830 CV • 0-100 km/h in 2.9s • 330 km/h",
    color: "from-gray-800 to-gray-600",
  },
  {
    name: "812 Competizione",
    description: "The ultimate expression of Ferrari's V12 engine, delivering pure, unfiltered emotion and performance.",
    specs: "830 CV • 0-100 km/h in 2.85s • 340 km/h",
    color: "from-yellow-600 to-yellow-400",
  },
  {
    name: "Roma",
    description: "Contemporary elegance meets timeless design in this refined grand tourer that embodies la dolce vita.",
    specs: "620 CV • 0-100 km/h in 3.4s • 320 km/h",
    color: "from-blue-900 to-blue-700",
  },
];

export default function Models() {
  return (
    <section id="models" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Our Models
          </h2>
          <p className="font-inter text-xl text-gray-400 max-w-2xl mx-auto">
            Each Ferrari is a masterpiece of engineering, design, and passion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-ferrari-red transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className="h-48 mb-6 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-6xl font-playfair font-bold text-gray-700 group-hover:text-ferrari-red transition-colors duration-300">
                      {model.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <h3 className="font-playfair text-3xl font-bold text-white mb-3 group-hover:text-ferrari-red transition-colors duration-300">
                  {model.name}
                </h3>
                <p className="font-inter text-gray-400 mb-4 leading-relaxed">
                  {model.description}
                </p>
                <div className="font-inter text-sm text-ferrari-red font-semibold">
                  {model.specs}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ferrari-red to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
