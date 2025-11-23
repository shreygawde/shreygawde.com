export default function Contact() {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="text-lg text-gray-600">
        Feel free to reach out through the form below.
      </p>
      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </section>
  );
}
