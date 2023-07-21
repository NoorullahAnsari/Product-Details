import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const ProductDetails = ({ car }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedCar, setEditedCar] = useState({ ...car });

  // Function to handle the delete action
  const handleDelete = async () => {
    // Show a confirmation dialog before proceeding with deletion
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (confirmed) {
      try {
        const response = await fetch(
          `https://grpeazvfm4.execute-api.us-east-1.amazonaws.com/cars/cars/${car.id}/${car.email}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // If the deletion is successful, navigate back to the product list page
          router.push("/");
        } else {
          console.error("Error deleting car:", response.status);
        }
      } catch (error) {
        console.error("Error deleting car:", error);
      }
    }
  };

  // Function to handle the edit action
  const handleEdit = async () => {
    try {
      const response = await fetch(
        `https://grpeazvfm4.execute-api.us-east-1.amazonaws.com/cars/cars/${car.id}/${car.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedCar),
        }
      );

      if (response.ok) {
        // If the edit is successful, show an alert and navigate back to the product list page
        window.alert("Data updated successfully!");
        router.push("/");
      } else {
        console.error("Error editing car:", response.status);
      }
    } catch (error) {
      console.error("Error editing car:", error);
    }
  };
  // Function to show the delete confirmation modal
  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  // Function to hide the delete confirmation modal
  const handleHideConfirmation = () => {
    setShowConfirmation(false);
  };

  // Function to show the edit form
  const handleShowEditForm = () => {
    setShowEditForm(true);
  };

  // Function to hide the edit form
  const handleHideEditForm = () => {
    setShowEditForm(false);
    setEditedCar({ ...car });
  };
  return (
    <div className="w-1/2 content-center">
      <h2>Product Details</h2>
      <div className="product-card">
        <Image src={car.image_url} alt={car.name} width={200} height={200} />
        <h3>{car.name}</h3>
        <p>{car.description}</p>
        <p>Price: ${car.price}</p>
        <p>Company: {car.companyname}</p>
        <p>Model: {car.modeltype}</p>
      </div>
      {session?.user?.email === car.email ? (
        <div>
          <button
            type="button"
            className="inline-flex m-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleShowConfirmation}
          >
            Delete
          </button>
          <button
            type="button"
            className="inline-flex m-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
            onClick={handleShowEditForm}
          >
            Edit
          </button>
        </div>
      ) : (
        <div>Nothing</div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-500">
          <div className="bg-white p-6 rounded-lg">
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white"
                onClick={handleHideConfirmation}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                onClick={() => {
                  handleDelete();
                  handleHideConfirmation();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Form */}
      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 ">
          <div className="rounded-lg bg-indigo-100 rounded p-8 mx-auto py-6 w-1/3">
            <h2 className="text-center text-red-700 text-3xl font-bold">
              Edit Product
            </h2>
            <div className="mt-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-gray-300 h-8 pl-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={editedCar.name}
                onChange={(e) =>
                  setEditedCar({ ...editedCar, name: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="description"
                className="block font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                className="mt-1 block w-full border-gray-300 h-8 pl-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={editedCar.description}
                onChange={(e) =>
                  setEditedCar({ ...editedCar, description: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="price"
                className="block font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                className="mt-1 block w-full border-gray-300 rounded-md h-8 pl-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={editedCar.price}
                onChange={(e) =>
                  setEditedCar({ ...editedCar, price: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="comapanyname"
                className="block font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="companyname"
                className="mt-1 block w-full border-gray-300 rounded-md h-8 pl-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={editedCar.companyname}
                onChange={(e) =>
                  setEditedCar({ ...editedCar, companyname: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="model"
                className="block font-medium text-gray-700"
              >
                Model
              </label>
              <input
                type="text"
                id="model"
                className="mt-1 block w-full border-gray-300 rounded-md h-8 pl-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={editedCar.model}
                onChange={(e) =>
                  setEditedCar({ ...editedCar, model: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                id="image_url"
                className="mt-1 block w-full border-gray-300 rounded-md h-8 pl-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={editedCar.image_url}
                onChange={(e) =>
                  setEditedCar({ ...editedCar, image_url: e.target.value })
                }
              />
            </div>
            {/* Add other input fields for editing other properties as needed */}
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white"
                onClick={handleHideEditForm}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  handleEdit();
                  handleHideEditForm();
                }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
