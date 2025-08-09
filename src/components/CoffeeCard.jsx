import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, quantity, photo } = coffee;

  return (
    <div className="card bg-base-100 shadow-md border rounded-lg overflow-hidden flex flex-col md:flex-row">
      {/* Image */}
      <figure className="w-full md:w-1/3">
        <img
          src={photo}
          alt={name}
          className="w-full h-48 md:h-full object-cover"
        />
      </figure>

      {/* Details & Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full p-4 gap-4">
        {/* Coffee Info */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">
            Price: <span className="font-medium">${price}</span>
          </p>
          <p className="text-gray-600">
            Quantity: <span className="font-medium">{quantity}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex md:flex-col gap-2">
          <Link to={`/coffee/${_id}`}>
            <button className="btn btn-sm btn-outline hover:bg-amber-100 hover:border-amber-500">
              <FaEye className="text-amber-600" size={20} />
            </button>
          </Link>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn btn-sm btn-warning hover:bg-amber-500 hover:border-amber-600">
              <FaEdit className="text-white" size={18} />
            </button>
          </Link>
          <button className="btn btn-sm btn-error text-white hover:bg-red-600 hover:border-red-700">
            <FaTrash size={16} className="mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
