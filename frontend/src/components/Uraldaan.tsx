import { useState } from "react";

type SportCategory = "J1" | "J2" | "J3";

export default function Uraldaan() {
  const [activeTab, setActiveTab] = useState<"traditional" | "sport">(
    "traditional"
  );
  const [sportCategory, setSportCategory] = useState<SportCategory>("J1");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          🏇 Уралдаан
        </h1>

        {/* Main Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("traditional")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "traditional"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Үндэсний уламжлалт
          </button>

          <button
            onClick={() => setActiveTab("sport")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "sport"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Спорт уралдаан
          </button>
        </div>

        {/* Content */}
        {activeTab === "traditional" && (
          <section className="space-y-4 text-gray-700">
            <h2 className="text-2xl font-semibold">
              Үндэсний уламжлалт морин уралдаан
            </h2>
            <p>
              Монголын уламжлалт морин уралдаан нь олон зуун жилийн түүхтэй
              бөгөөд наадам, баяр ёслолын үеэр зохион байгуулагддаг.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Даага, шүдлэн, хязаалан</li>
              <li>Соёолон, их нас</li>
              <li>Уламжлалт дэг жаяг, ёс заншил</li>
            </ul>
          </section>
        )}

        {activeTab === "sport" && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">
              Спорт морин уралдаан
            </h2>

            {/* Sport Categories */}
            <div className="flex gap-3 mb-6">
              {(["J1", "J2", "J3"] as SportCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSportCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    sportCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Category Content */}
            {sportCategory === "J1" && (
              <div className="bg-gray-50 p-5 rounded-xl shadow text-gray-700">
                <h3 className="text-xl font-semibold mb-2">
                  J1 ангилал
                </h3>
                <p>
                  Анхан шатны спорт морин уралдаан.
                  Шинээр оролцож буй уралдаанчид, морьд оролцоно.
                </p>
              </div>
            )}

            {sportCategory === "J2" && (
              <div className="bg-gray-50 p-5 rounded-xl shadow text-gray-700">
                <h3 className="text-xl font-semibold mb-2">
                  J2 ангилал
                </h3>
                <p>
                  Дунд түвшний спорт уралдаан.
                  Туршлагатай уралдаанчид оролцоно.
                </p>
              </div>
            )}

            {sportCategory === "J3" && (
              <div className="bg-gray-50 p-5 rounded-xl shadow text-gray-700">
                <h3 className="text-xl font-semibold mb-2">
                  J3 ангилал
                </h3>
                <p>
                  Ахисан түвшний спорт морин уралдаан.
                  Мэргэжлийн уралдаанчид оролцоно.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
