function About() {
  return (
    <section className="p-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">
        About Me
      </h2>

      <img
        src="/images/Mohit.jpeg"
        alt="My profile photo"
        className="size-50 object-cover rounded-full mx-auto mb-6"
      />

      <p className="max-w-2xl mx-auto text-lg">
        Hi, I'm Mohit. I am a student interested in programming,
        artificial intelligence and web development.
      </p>
    </section>
  )
}

export default About