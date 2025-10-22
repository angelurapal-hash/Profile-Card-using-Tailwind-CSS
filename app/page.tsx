export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-6">
      {}
      <img
        src="/61d448f6-be71-44bd-bc22-9de7498272c3.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg transform transition-transform duration-300 hover:scale-105"
      />

      {}
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-blue-400 text-center">
        Rapal, Angelo
      </h1>

      {}
      <p className="text-center md:text-left max-w-xl mt-4 px-4 text-gray-400 leading-relaxed">
        I’m an IT student focused on learning web development. I enjoy building simple,
        responsive websites and constantly exploring new technologies to improve my skills.
      </p>

      {}
      <div className="flex flex-row items-center justify-center gap-4 mt-8 text-lg">
        <a
          href="https://www.instagram.com/angelomoto17/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-500 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
        >
          Instagram
        </a>
        <a
          href="https://github.com/angelurapal-hash"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
        >
          GitHub
        </a>
        <a
          href="https://www.facebook.com/angelo.rapal"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}
