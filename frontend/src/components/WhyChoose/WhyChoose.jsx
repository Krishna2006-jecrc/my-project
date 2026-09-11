function WhyChoose() {
  const features = [
    {
      title: "Best Transport",
      description: "Comfortable buses and private vehicles for every trip.",
      icon: "🚌",
    },
    {
      title: "Affordable Price",
      description: "Budget-friendly packages with no hidden charges.",
      icon: "💰",
    },
    {
      title: "Safe Travel",
      description: "Your safety is our top priority throughout the journey.",
      icon: "🛡️",
    },
    {
      title: "24/7 Support",
      description: "Our travel experts are available whenever you need help.",
      icon: "📞",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Us
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          We make every journey comfortable, safe and memorable.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-5">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;