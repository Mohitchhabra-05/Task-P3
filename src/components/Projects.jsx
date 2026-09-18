function Projects() {
  return (
    <section className="p-6">

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        My Projects
      </h2>

      <div className="border p-4 mb-6">
        <img
          src="/images/Project1.png"
          alt="Questara"
          className="size-50 object-cover mx-auto"
        />

        <h3 className="text-xl font-bold mt-3 text-center">
          Questara
        </h3>

        <p className="mt-2 text-center">
          A project which I made through vibecoding which can test your
          knowledge of AI.
        </p>
      </div>

      <div className="border p-4">
        <img
          src="/images/project2.png"
          alt="Portfolio Website"
          className="w-80 h-32 object-cover mx-auto"
        />

        <h3 className="text-xl font-bold mt-3 text-center">
          Portfolio Website
        </h3>

        <p className="mt-2 text-center">
          I made someone's portfolio website using different frontend
          technologies.
        </p>
      </div>

    </section>
  )
}

export default Projects