"use client";
import { useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({
    ngo_id: "",
    month: "",
    people_helped: "",
    events_conducted: "",
    funds_utilized: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("http://localhost:8000/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      setForm({
        ngo_id: "",
        month: "",
        people_helped: "",
        events_conducted: "",
        funds_utilized: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-700"> Submit Monthly Report</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "NGO ID", name: "ngo_id", type: "text" },
            { label: "Month", name: "month", type: "month" },
            { label: "People Helped", name: "people_helped", type: "number" },
            { label: "Events Conducted", name: "events_conducted", type: "number" },
            { label: "Funds Utilized (₹)", name: "funds_utilized", type: "number", step: "0.01" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-1 text-sm font-semibold">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                step={field.step}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Submit Report
          </button>

          {status === "loading" && <p className="text-yellow-600">Submitting...</p>}
          {status === "success" && <p className="text-green-600">Report submitted successfully!</p>}
          {status === "error" && <p className="text-red-600">Submission failed. Try again.</p>}
        </form>
      </div>
    </main>
  );
}
    