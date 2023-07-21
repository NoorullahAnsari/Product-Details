import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import ProductDetailsPage from "./[productId]";

const ProductList = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://grpeazvfm4.execute-api.us-east-1.amazonaws.com/cars/cars"
        );
        const data = await response.json();
        setCars(data.cars);
        setFilteredCars(data.cars); // Set initial filteredCars to all cars
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query, filterOption) => {
    let filtered = cars;

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filtered = cars.filter((car) => {
        if (filterOption === "all") {
          return (
            car.name.toLowerCase().includes(lowerCaseQuery) ||
            car.companyname.toLowerCase().includes(lowerCaseQuery) ||
            car.modeltype.toLowerCase().includes(lowerCaseQuery) ||
            car.price.toString().includes(query)
          );
        } else if (filterOption === "name") {
          return car.name.toLowerCase().includes(lowerCaseQuery);
        } else if (filterOption === "companyname") {
          return car.companyname.toLowerCase().includes(lowerCaseQuery);
        } else if (filterOption === "modeltype") {
          return car.modeltype.toLowerCase().includes(lowerCaseQuery);
        } else if (filterOption === "price") {
          return car.price.toString().includes(query);
        }
      });
    }

    setFilteredCars(filtered);
  };

  const handleProductClick = (car) => {
    setSelectedCar(car);
  };

  let content;
  if (selectedCar) {
    content = <ProductDetailsPage car={selectedCar} />;
  } else if (filteredCars.length === 0) {
    content = (
      <div>
        <p>Sorry, product not found.</p>
        <Link legacyBehavior href="/product-not-found">
          Go back to homepage
        </Link>
      </div>
    );
  } else {
    content = (
      <div>
        <SearchBar cars={cars} onSearch={handleSearch} />
        <div className="product-card-container">
          {filteredCars.map((car) => (
            <div key={car.id} onClick={() => handleProductClick(car)}>
              <ProductCard car={car} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ProductList;
