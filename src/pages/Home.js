import VisitList from "../components/VisitList";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Guest Visit Scheduler
        </h1>
        <Link
          to="/create"
          className="mb-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          + Create New Visit
        </Link>
        <VisitList />
      </div>
    </div>
  );
}
