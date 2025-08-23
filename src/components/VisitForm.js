import { useState } from "react";
import { createVisit } from "../api/visitApi";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

export default function VisitForm({ onSuccess }) {
  const [form, setForm] = useState({
    guestName: "",
    visitDate: "",
    visitTime: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
    address: "",
    aadhaar: "",
    notes: "",
  });

  const navigate = useNavigate(); // ✅ create navigate instance

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // combine date + time into ISO datetime
      const visitAt = new Date(
        `${form.visitDate}T${form.visitTime}`
      ).toISOString();

      const payload = {
        ...form,
        visitAt, // backend expects this field
        status: "scheduled", // default status
      };

      await createVisit(payload);
      alert("Visit created successfully!");

      // reset form
      setForm({
        guestName: "",
        visitDate: "",
        visitTime: "",
        countryCode: "+91",
        phoneNumber: "",
        email: "",
        address: "",
        aadhaar: "",
        notes: "",
      });

      if (onSuccess) onSuccess();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create visit");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">New Visit Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          name="guestName"
          placeholder="Guest Name"
          value={form.guestName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          name="visitDate"
          value={form.visitDate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          name="visitTime"
          value={form.visitTime}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          name="phoneNumber"
          placeholder="Phone Number"
          value={form.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 sm:col-span-2"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          name="aadhaar"
          placeholder="Aadhaar (12 digits)"
          value={form.aadhaar}
          onChange={handleChange}
        />
        <textarea
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 sm:col-span-2"
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Create Visit
      </button>

      <button
        type="button"
        onClick={() => navigate("/")}
        className="w-full py-2 mt-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
      >
        Go to Home
      </button>
    </form>
  );
}
