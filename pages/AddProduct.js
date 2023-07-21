import { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

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
  if (session) {
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
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@example.com"
              className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hidden"
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
  } else {
    return (
      <div>
        <section className="bg-white dark:bg-gray-900 ">
          <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
              <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                Restricted
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Sign In required to Add contents{" "}
              </p>

              <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                <button
                  onClick={() => signIn()}
                  className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default AddProduct;
