

type TravelItem = {
  title: string;
  description: string;
  image: string;
};

const travels: TravelItem[] = [
  {
    title: "Морин аялал",
    description:
      "Монгол адуугаар тал нутгаар аялах онцгой мэдрэмжийг танд санал болгож байна.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Эрүүл мэндийн аялал",
    description:
      "Агаар салхинд гарч, морин уналгаар бие сэтгэлээ амраах боломж.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "Соёлын аялал",
    description:
      "Уламжлалт морин уралдаан, ахуй соёлыг ойроос мэдрэх аялал.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
  },
];

export default function Aylal() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Аялал & Жуулчлал
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {travels.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-blue-600">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
