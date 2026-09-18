function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-8 mt-8">

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Sign Up For Our Daily Insider
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border p-3 text-black"
        />

        <button className="bg-white text-gray-700 p-3 ml-2">
          Subscribe
        </button>
      </div>

      <div className="flex justify-around">

        <div>
          <h3 className="text-xl font-bold mb-2">
            Explore
          </h3>
          <p>Home</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">
            Support
          </h3>
          <p>Help</p>
          <p>Contact Us</p>
          <p>FAQ</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">
            Stay Connected
          </h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>

      </div>

      <p className="text-center mt-8">
         2026 DEV@Deakin
      </p>

    </footer>
  )
}

export default Footer