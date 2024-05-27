"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProductsData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=15"
      );
      const data = await response.json();

      const detailedPromises = data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        const speciesResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`
        );
        const speciesData = await speciesResponse.json();

        return { ...pokemonData, species: speciesData };
      });

      const detailedData = await Promise.all(detailedPromises);

      setProducts(detailedData);
      console.log(detailedData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center bg-green-500 hover:bg-green-700 transition duration-300 text-white">
          <h1 className="text-2xl font-bold ">Tai Shopping Site</h1>
          <nav className="space-x-4">
            <a href="#" className="text-white hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-800">
              Shop
            </a>
            <a href="#" className="text-white hover:text-gray-800">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Welcome!
            </h2>
            <p className="text-gray-600 mb-4">
              Find the best Pokemon here with us.
            </p>
            <a
              href="#"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-green-500"
            >
              Start Select our best choice
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Recommended
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 &&
              products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                      index + 1
                    }.png`}
                    alt={product?.forms?.[0]?.name}
                    className="mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product?.forms?.[0]?.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product?.species?.flavor_text_entries
                      ?.find((entry) => entry.language.name === "en")
                      .flavor_text.replace(/\f/g, "")}
                  </p>
                  <a
                    href="#"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View Details
                  </a>
                </div>
              ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-600">
            &copy; 20?? Monster Site. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
