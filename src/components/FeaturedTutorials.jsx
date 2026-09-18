function FeaturedTutorials() {

  const tutorials = [
    {
      title: "React Basics",
      author: "Mohit",
      image: "/images/tutorial1.jpeg"
    },
    {
      title: "JavaScript Basics",
      author: "Mohit",
      image: "/images/tutorial2.jpeg"
    },
    {
      title: "Web Development",
      author: "Mohit",
      image: "/images/tutorial3.jpeg"
    }
  ]

  return (
    <section className="p-6">

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        Featured Tutorials
      </h2>

      <div className="flex gap-6 justify-center">

        {tutorials.map((tutorial) => (
          <div className="border p-4 w-80">

            <img
              src={tutorial.image}
              alt={tutorial.title}
              className="w-full h-40 object-cover"
            />

            <h3 className="text-xl font-bold mt-3">
              {tutorial.title}
            </h3>

            <p>
              By {tutorial.author}
            </p>

          </div>
        ))}

      </div>

      <div className="text-center mt-6">
        <button className="bg-gray-700 text-white px-5 py-2">
          See All Tutorials
        </button>
      </div>

    </section>
  )
}

export default FeaturedTutorials