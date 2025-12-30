
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Хуудас олдсонгүй</h2>
      <p className="text-gray-700 mb-6">
        Та оролдож буй URL буруу эсвэл энэ хуудас байхгүй байна.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Нүүр хуудас руу буцах
      </button>
    </div>
  );
}
