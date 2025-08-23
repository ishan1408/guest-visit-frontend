import VisitForm from "../components/VisitForm";

export default function CreateVisit() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create New Visit
      </h1>
      <VisitForm />
    </div>
  );
}
