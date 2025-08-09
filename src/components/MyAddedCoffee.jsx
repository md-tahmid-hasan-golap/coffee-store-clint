import React, { useContext, useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { AuthContext } from "../contexts/AuthProvider";

const MyAddedCoffee = () => {
  const { user } = useContext(AuthContext);
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-coffees/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedCoffee;
