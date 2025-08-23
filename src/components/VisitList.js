import { useEffect, useState } from "react";
import { getVisits, deleteVisit } from "../api/visitApi";
import { Link } from "react-router-dom";

export default function VisitList() {
  const [visits, setVisits] = useState([]);

  const fetchVisits = async () => {
    const res = await getVisits();
    setVisits(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this visit?")) {
      await deleteVisit(id);
      fetchVisits();
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-6 bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Scheduled Visits
      </h2>
      {visits.length === 0 ? (
        <p className="text-gray-500">No visits scheduled yet.</p>
      ) : (
        <ul className="space-y-3">
          {visits.map((v) => (
            <li
              key={v._id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between border p-4 rounded-lg hover:shadow-md transition"
            >
              <div>
                <p className="font-medium text-gray-800">{v.guestName}</p>
                <p className="text-sm text-gray-500">
                  {v.visitDate} {v.visitTime} • {v.status}
                </p>
              </div>
              <div className="flex gap-2 mt-2 sm:mt-0">
                <Link
                  to={`/visit/${v._id}`}
                  className="ml-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View
                </Link>

                <button
                  onClick={() => handleDelete(v._id)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
