"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the router
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const router = useRouter(); // Initialize the router
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    whatsappNumber: "",
    email: "", // New email field
    isWhatsappSame: true,
    childrenCount: 0,
    adultsCount: 1, // Default to 1 as at least one adult is required
    vegCount: 0,
    nonVegCount: 0,
    date: new Date(),
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
      whatsappNumber:
        name === "isWhatsappSame" && checked
          ? prevData.mobile
          : prevData.whatsappNumber,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const bookingData = {
      name: formData.name,
      mobile: formData.mobile,
      whatsapp: formData.isWhatsappSame,
      whatsappNumber: formData.isWhatsappSame ? formData.mobile : formData.whatsappNumber,
      email: formData.email, // Include email in the data
      numberOfChildren: formData.childrenCount,
      numberOfAdults: formData.adultsCount,
      numberOfVeg: formData.vegCount,
      numberOfNonVeg: formData.nonVegCount,
      bookingDate: formData.date.toISOString().split("T")[0], // Format date to YYYY-MM-DD
    };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setMessage("Booking submitted successfully!");
        setFormData({
          name: "",
          mobile: "",
          whatsappNumber: "",
          email: "", // Reset email field
          isWhatsappSame: true,
          childrenCount: 0,
          adultsCount: 1, // Reset to default value
          vegCount: 0,
          nonVegCount: 0,
          date: new Date(), // Reset the date
        });

        // Navigate to Razorpay URL
        router.push("https://pages.razorpay.com/pl_PZlhJtVnKOOdeT/view");
      } else {
        const error = await response.json();
        setMessage(error.error || "Failed to submit booking.");
      }
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Book Your Stay</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Mobile Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your mobile number"
            required
          />
        </div>

        {/* WhatsApp Number Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={
              formData.isWhatsappSame ? formData.mobile : formData.whatsappNumber
            }
            onChange={handleInputChange}
            disabled={formData.isWhatsappSame}
            className={`w-full px-3 py-2 border rounded-md ${
              formData.isWhatsappSame ? "bg-gray-100" : ""
            }`}
            placeholder="Enter your WhatsApp number"
          />
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              name="isWhatsappSame"
              checked={formData.isWhatsappSame}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label className="text-sm">Same as mobile number</label>
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Number of Children */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Number of Children</label>
          <input
            type="number"
            name="childrenCount"
            value={formData.childrenCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            min="0"
          />
        </div>

        {/* Number of Adults */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Number of Adults</label>
          <input
            type="number"
            name="adultsCount"
            value={formData.adultsCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            min="1"
            required
          />
        </div>

        {/* Veg Meals */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Veg Meals</label>
          <input
            type="number"
            name="vegCount"
            value={formData.vegCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            min="0"
          />
        </div>

        {/* Non-Veg Meals */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Non-Veg Meals</label>
          <input
            type="number"
            name="nonVegCount"
            value={formData.nonVegCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md"
            min="0"
          />
        </div>

        {/* Booking Date */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Booking Date</label>
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            minDate={getTomorrowDate()}
            className="w-full px-3 py-2 border rounded-md"
            dateFormat="yyyy-MM-dd"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Booking"}
        </button>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
}
