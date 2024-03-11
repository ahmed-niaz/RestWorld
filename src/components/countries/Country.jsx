import { useState } from "react";

export default function Country({ cntry,handleVisitedCountry }) {
  const { name, flags, population, region, capital, cca3 } = cntry;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
const passWithParams = ()=> {
    handleVisitedCountry(cntry)
}
  return (
    <main>
      <div
        className={`mt-5 ${visited ? "bg-[#eef4ed]" : "bg-white"} rounded-lg`}
      >
        <div className="card w-full shadow-xl ">
          <img className="w-full h-64 rounded-2xl bg-cover" src={flags.png} />

          <div className="card-body">
            <h2
              className={`card-title ${
                visited ? "text-[#a4161a]" : "text-black"
              }`}
            >
              {name?.common}
              <div className="badge badge-secondary">{region}</div>
            </h2>
            <p>{name.official}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{capital}</div>
              <div className="badge badge-outline">{population}</div>
              <div className="badge badge-outline">{cca3}</div>
            </div>
            <div className="flex flex-col">
              <button className="btn text-2xl font-bold bg-[#22223b] text-white hover:bg-black mt-4 " onClick={passWithParams}>
                Marked as visited
              </button>
              <button
                className="btn text-2xl font-bold bg-[#22223b] text-white hover:bg-black mt-4"
                onClick={handleVisited}
              >
                {visited ? `visited` : `Want to go`}
              </button>
              {visited ? `I have visited this country` : `I want to visit`}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

{
  /* <h3>Name:  </h3>
        <img src={flags.png} alt=""  />
        <p>Population: {population}</p> */
}
