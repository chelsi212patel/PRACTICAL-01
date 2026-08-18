function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to React!
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          This is a simple React application built using JSX and
          functional components.
        </p>

        <div className="bg-blue-50 rounded-lg p-4 text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Technologies Used
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>React</li>
            <li>Node.js</li>
            <li>npm</li>
            <li>Tailwind CSS</li>
            <li>JSX</li>
            <li>Functional Components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;