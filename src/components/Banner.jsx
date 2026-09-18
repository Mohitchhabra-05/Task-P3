function Banner() {
  return (
    <section className="relative group">
      <img
        src="/images/deakinuni.jpg"
        alt="Deakin University image"
        className="w-screen h-96 object-cover"
      />

      <p className="absolute bottom-0 w-full p-3 bg-black/70 text-white text-center opacity-0 group-hover:opacity-100">
        Hey, I'm Mohit
      </p>
    </section>
  )
}

export default Banner