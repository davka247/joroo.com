



type Achievement = {
  year: number;
  name: string;
  description: string;
};

const achievements: Achievement[] = [
  { year: 2021, name: "Сумын алдарт уяач", description: "2021 онд сумын алдарт уяач боллоо." },
  { year: 2022, name: "Аймгийн аварга", description: "2022 онд аймгийн аварга морь уяач болов." },
  { year: 2023, name: "Үндэсний уяач", description: "2023 онд үндэсний хэмжээний амжилт гаргалаа." },
];

export default function Amjilt() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-yellow-50 to-yellow-100 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-yellow-700 text-center mb-6">
          Амжилтууд
        </h1>

        {achievements.map((achieve, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500"
          >
            <h2 className="text-2xl font-bold text-yellow-600">
              {achieve.year} - {achieve.name}
            </h2>
            <p className="text-gray-700 mt-2">{achieve.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
