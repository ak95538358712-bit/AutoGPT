const milestones = [
  {
    year: "1947",
    title: "The Beginning",
    description: "Enzo Ferrari founded Scuderia Ferrari, marking the birth of an automotive legend.",
  },
  {
    year: "1950",
    title: "F1 Dominance",
    description: "Ferrari enters Formula 1, beginning an unparalleled legacy of racing excellence.",
  },
  {
    year: "1962",
    title: "250 GTO",
    description: "The iconic 250 GTO debuts, becoming one of the most valuable cars in history.",
  },
  {
    year: "2024",
    title: "Innovation Continues",
    description: "Ferrari leads the hybrid revolution while maintaining its racing DNA.",
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ferrari-red rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ferrari-red rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Racing Heritage
          </h2>
          <p className="font-inter text-xl text-gray-400 max-w-2xl mx-auto">
            Over 75 years of passion, innovation, and victory on the world's greatest circuits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ferrari-red via-ferrari-red to-transparent" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 bg-ferrari-red rounded-full transform -translate-x-1/2 ${
                      index % 2 === 0 ? "md:translate-x-0" : "md:-translate-x-0"
                    }`}
                  />
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <div className="inline-block px-4 py-2 bg-ferrari-red text-white font-playfair font-bold text-2xl rounded-sm mb-2">
                      {milestone.year}
                    </div>
                  </div>
                </div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg">
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-ferrari-red">240+</div>
              <div className="font-inter text-sm text-gray-400 mt-1">F1 Victories</div>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-ferrari-red">16</div>
              <div className="font-inter text-sm text-gray-400 mt-1">Constructors' Titles</div>
            </div>
            <div className="w-px h-12 bg-gray-800" />
            <div className="text-center">
              <div className="font-playfair text-4xl font-bold text-ferrari-red">15</div>
              <div className="font-inter text-sm text-gray-400 mt-1">Drivers' Championships</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
