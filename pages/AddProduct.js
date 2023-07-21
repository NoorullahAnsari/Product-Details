import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const AddProduct = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState(session?.user?.email || "");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    companyname: "",
    modeltype: "",
    image_url: "",
    // Add other relevant fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://grpeazvfm4.execute-api.us-east-1.amazonaws.com/cars/cars",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, email }),
        }
      );

      if (response.ok) {
        // Clear form data after successful submission
        setFormData({
          name: "",
          description: "",
          price: "",
          companyname: "",
          modeltype: "",
          image_url: "",
          // Add other relevant fields here
        });

        // Show success message in an alert
        window.alert("Product added successfully.");

        const newCar = {
          ...formData,
          email,
        };
        const responseData = await response.json();
        newCar.id = responseData.id;
        setCars((prevCars) => [...prevCars, newCar]);

        // Navigate back to the home page after 0.5 seconds
        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container bg-indigo-100 rounded p-8 mx-auto py-6 w-1/3">
      <h1 className="text-3xl font-bold mb-4 text-center text-red-600">
        Add Product
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Toyota XY"
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="The Toyota Camry XSE offers a perfect blend of comfort and performance."
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price:
          </label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="1200000"
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company:
          </label>
          <input
            type="text"
            name="companyname"
            value={formData.companyname}
            onChange={handleChange}
            required
            placeholder="Toyota"
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Model:
          </label>
          <input
            type="text"
            name="modeltype"
            value={formData.modeltype}
            onChange={handleChange}
            required
            placeholder="MNFG"
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            required
            placeholder="asdfghjk3456789#$%^&"
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@example.com"
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
