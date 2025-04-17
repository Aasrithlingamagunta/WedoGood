"use client";
import { useState } from "react";

export default function AdminPage() {
  const [month, setMonth] = useState("");
  const [summary, setSummary] = useState(null);
  const [status, setStatus] = useState(null);

  const fetchSummary = async () => {
    if (!month) return;
    setStatus("loading");
    try {
      const res = await fetch(`http://localhost:8000/dashboard?month=${month}`);
      if (!res.ok) throw new Error("Error fetching summary");
      const data = await res.json();
      setSummary(data);
      setStatus("success");
    } catch (err) {
      setSummary(null);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 text-gray-900">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-blue-700"> Admin Dashboard</h1>

        <label className="block mb-2 font-semibold text-sm">Select Month (YYYY-MM)</label>
        <input
          type="month"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />

        <button
          onClick={fetchSummary}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          View Summary
        </button>

        {status === "loading" && <p className="mt-4 text-yellow-600">Loading...</p>}
        {status === "error" && <p className="mt-4 text-red-600">Failed to fetch data</p>}

        {summary && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Total NGOs Reporting:</span>
              <span>{summary.total_ngos}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">People Helped:</span>
              <span>{summary.total_people_helped}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Events Conducted:</span>
              <span>{summary.total_events_conducted}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Funds Utilized (₹):</span>
              <span>₹ {summary.total_funds_utilized}</span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
