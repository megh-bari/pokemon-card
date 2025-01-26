import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loading from "./Loading"; // Assuming you have the Loading component
import Footer from "./Footer";
import { Github } from "lucide-react";
const ApiData = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start with loading state set to true
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const api = "https://pokeapi.co/api/v2/pokemon?limit=104"; // Fetch list of all Pokémon (up to 1000)

  const fetchPokemonList = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();

      // Fetch detailed data for each Pokémon
      const detailedPokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonRes = await fetch(pokemon.url);
          const pokemonData = await pokemonRes.json();
          return pokemonData;
        })
      );

      // Set the detailed Pokémon data to the state
      setApiData(detailedPokemonData);
      console.log(detailedPokemonData);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemonList();

    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 5 seconds
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; // Show loading component while fetching data
  }

  if (error) {
    return (
      <h1
        style={{
          color: "red",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Error: {error.message}
      </h1>
    );
  }

  const getSpeed = (stats) => {
    const speedStat = stats.find((stat) => stat.stat.name === "speed");
    return speedStat ? speedStat.base_stat : "N/A";
  };

  // Corrected search filter
  const filterPokemon = apiData.filter(
    (currPokemon) =>
      currPokemon.name.toLowerCase().includes(search.toLowerCase()) // This will filter based on the search input
  );

  return (
    <>
      <div className="text-white text-center py-10 rounded-b-lg shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#FF9A00] to-[#FFD93D]">
            Let's Catch Pokemon
          </h1>

          <p className="text-lg md:text-xl font-medium opacity-90 max-w-xl mx-auto mb-4">
            Discover and explore the vast and exciting world of Pokemon!
          </p>
        </div>

        <form>
          <div className="mb-10 text-white">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find Pokemon"
              className={`w-full max-w-xs sm:max-w-md text-white py-3 px-4 rounded-md  bg-[#151030] border border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200`}
            />
          </div>
        </form>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/megh-bari/pokemon-card.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center h-10 px-4 text-sm font-medium bg-black text-white hover:bg-black/80 transition-all duration-300 border border-transparent cursor-pointer hover:border-white rounded-md">
              <Github className="mr-2 h-4 w-4" />
              megh-bari/pokemon-card
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {filterPokemon.map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            src={pokemon.sprites.other.dream_world.front_default}
            height={pokemon.height}
            weight={pokemon.weight}
            speed={getSpeed(pokemon.stats)}
            type={pokemon.types.map((curType) => curType.type.name).join(", ")}
            experience={pokemon.base_experience}
            info={pokemon.stats[1].base_stat}
            abilities={pokemon.abilities
              .map((abi) => abi.ability.name)
              .slice(0, 1)
              .join("-")}
          />
        ))}
        {filterPokemon.length === 0 && (
          <div className="text-center py-8">
            <p className="text-red-600 mb-2">
              No Pokémon found matching your search.
            </p>
            <p className="text-yellow-500 font-medium mb-2">
              "If you’re looking for your favorites or beloved Pokémon, <br />
              they might not be showing up due to the large amount of data from
              the API."
              <br />
              Please try a different search!
            </p>
          </div>
        )}
      </div>

      <Footer className="mt-auto font-medium dark:border-gray800" />
    </>
  );
};

export default ApiData;
