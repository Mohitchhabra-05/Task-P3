function Gallery() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
        My Gallery
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        <img
          src="/images/gallery1.jpeg"
          alt="Gallery image 1"
          className="size-85 object-cover"
        />

        <img
          src="/images/gallery2.jpeg"
          alt="Gallery image 2"
          className="size-85 object-cover"
        />

        <img
          src="/images/gallery3.jpeg"
          alt="Gallery image 3"
          className="size-85 object-cover"
        />

        <img
          src="/images/gallery4.jpeg"
          alt="Gallery image 4"
          className="size-85 object-cover"
        />
      </div>
    </section>
  )
}

export default Gallery