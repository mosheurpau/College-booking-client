const NotFound = () => {
  return (
    <section>
      <div className="min-h-screen  flex items-center justify-center bg-gray-900">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            Oops! The page you are looking for does not exist.
          </p>
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-red-500 inline-block mb-4 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
