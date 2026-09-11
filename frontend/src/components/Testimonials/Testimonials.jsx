function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      place: "Delhi",
      review:
        "Amazing experience! Everything was perfectly managed and the trip was unforgettable.",
    },
    {
      name: "Priya Verma",
      place: "Jaipur",
      review:
        "Very affordable packages and excellent customer support. Highly recommended!",
    },
    {
      name: "Amit Patel",
      place: "Ahmedabad",
      review:
        "Best travel agency. Hotels, transport and sightseeing were all well organized.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Thousands of happy travellers trust us every year.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <div className="text-yellow-500 text-2xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-5 text-gray-600">
                "{review.review}"
              </p>

              <h3 className="mt-6 font-bold text-xl">
                {review.name}
              </h3>

              <p className="text-gray-500">
                {review.place}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;