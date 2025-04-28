const NotFoundPage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-500">404</h1>
          <p className="text-xl mt-4 text-gray-700">Oops! Page not found.</p>
          <p className="mt-2 text-gray-500">The page you are looking for doesn’t exist.</p>
          <a
            href="/"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;
  