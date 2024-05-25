import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Tai Shopping Site</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-4">Find the best products here with us.</p>
            <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Start Shopping</a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <img src={`https://via.placeholder.com/150?text=Product+${index + 1}`} alt={`Product ${index + 1}`} className="mb-4 rounded" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Product {index + 1}</h3>
                <p className="text-gray-600 mb-4">This is a great product.</p>
                <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-600">&copy; 2024 Shopping Site. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
