import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getVisitById } from "../api/visitApi";

export default function VisitDetail() {
  const { id } = useParams();
  const [visit, setVisit] = useState(null);

  useEffect(() => {
    const fetchVisit = async () => {
      const res = await getVisitById(id);
      setVisit(res.data);
    };
    fetchVisit();
  }, [id]);

  if (!visit) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {visit.guestName}
      </h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Date:</span> {visit.visitDate}{" "}
          {visit.visitTime}
        </p>
        <p>
          <span className="font-medium">Email:</span> {visit.email}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {visit.countryCode}{" "}
          {visit.phoneNumber}
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          <span className="capitalize">{visit.status}</span>
        </p>
        <p>
          <span className="font-medium">Address:</span> {visit.address}
        </p>
        <p>
          <span className="font-medium">Aadhaar:</span> {visit.aadhaar}
        </p>
        <p>
          <span className="font-medium">Notes:</span> {visit.notes}
        </p>
      </div>
      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
