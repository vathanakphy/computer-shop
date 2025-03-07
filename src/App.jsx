// App.js
import React from "react";
import Card from "./components/Card";
import { LABTOPS } from "./data";

function App() {
  return (
    <>
      <h2 className="text-center text-3xl font-extrabold mb-2">
        Available Laptops
      </h2>

      <p className="text-center text-lg font-medium">
        Discover the latest models and find the perfect laptop for your needs.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 w-[85%] mx-auto justify-center items-center min-h-screen">
        {LABTOPS.map((laptop) => (
          <Card
            key={laptop.id} // Add a key prop for each Card
            id={laptop.id}
            name={laptop.name}
            image={laptop.image}
            company={laptop.company}
            processor={laptop.spec.Processor}
            ram={laptop.spec.RAM}
            storage={laptop.spec.Storage}
            graphics={laptop.spec.Graphics}
            price={laptop.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
