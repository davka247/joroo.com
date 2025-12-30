import { useEffect, useState } from "react";
import { fetchHorses, type HorsePayload } from "../api/horses";

export default function Home() {
  const [horses, setHorses] = useState<HorsePayload[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHorses();
      setHorses(data as HorsePayload[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ачааллахад алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Нүүр хуудас</h1>
          <p className="text-sm text-gray-500">Бүртгэгдсэн морьдын жагсаалт.</p>
        </div>
        <button
          onClick={load}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Шинэчилж байна..." : "Шинэчлэх"}
        </button>
      </div>

      {error && <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-red-700">{error}</div>}

      {loading && horses.length === 0 && (
        <p className="text-gray-500 text-sm">Ачаалж байна...</p>
      )}

      {!loading && horses.length === 0 && !error && (
        <p className="text-gray-500 text-sm">Одоогоор бүртгэлгүй байна.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {horses.map((horse, idx) => (
          <div key={`${horse.name}-${idx}`} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-3">
              {horse.imageUrl ? (
                <img
                  src={horse.imageUrl}
                  alt={horse.name}
                  className="h-16 w-16 rounded-lg object-cover border"
                />
              ) : (
                <div className="h-16 w-16 rounded-lg bg-gray-100 border flex items-center justify-center text-xs text-gray-400">
                  No image
                </div>
              )}
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{horse.name}</h4>
                <p className="text-xs text-gray-500">
                  {horse.color ? `${horse.color} · ` : ""}
                  {horse.age ? `${horse.age} настай` : "нас оруулаагүй"}
                </p>
                <p className="text-xs text-gray-600">
                  Эзэмшигч: {horse.ownerName} ({horse.ownerPhone})
                </p>
                {horse.trainerName && (
                  <p className="text-xs text-gray-600">
                    Уяач: {horse.trainerName}
                    {horse.trainerPhone ? ` (${horse.trainerPhone})` : ""}
                  </p>
                )}
              </div>
            </div>
            {horse.birthPlace && (
              <p className="mt-2 text-xs text-gray-500">Төрсөн газар: {horse.birthPlace}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
