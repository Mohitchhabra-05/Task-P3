function FeaturedArticles() {
  const articles = [
    {
      title: "Getting Started with React",
      author: "Mohit",
      image: "/images/article1.jpeg",
      description: "Learn the basics of React and how to create components.",
      rating: "★★★★★"
    },
    {
      title: "Artificial Intelligence",
      author: "Mohit",
      image: "/images/article2.jpeg",
      description: "Explore AI and how it is used in everyday life.",
      rating: "★★★★☆"
    },
    {
      title: "Web Development",
      author: "Mohit",
      image: "/images/article3.jpeg",
      description: "Understand the basics of building websites.",
      rating: "★★★★★"
    }
  ]

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        Featured Articles
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {articles.map((article) => (
          <div key={article.title} className="border p-4 w-80">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover"
            />

            <h3 className="text-xl font-bold mt-3">
              {article.title}
            </h3>

            <p>By {article.author}</p>
            <p className="mt-2">{article.description}</p>
            <p className="mt-2 text-yellow-500">{article.rating}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="bg-gray-700 text-white px-5 py-2">
          See All Articles
        </button>
      </div>
    </section>
  )
}

export default FeaturedArticles