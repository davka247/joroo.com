export default function Durem() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          🏇 Морин уралдааны дүрэм, журам
        </h1>

        {/* Ерөнхий заалт */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            1. Ерөнхий заалт
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Энэхүү дүрэм, журам нь Монгол Улсад зохион байгуулагдаж буй
            уламжлалт болон спорт морин уралдааныг шударга, аюулгүй,
            соёлтой явуулахад чиглэгдэнэ.
          </p>
        </section>

        {/* Уралдаанд оролцох нөхцөл */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            2. Уралдаанд оролцох нөхцөл
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Морь нь эрүүл, нас ангилалд тохирсон байх</li>
            <li>Морь бүртгэлийн мэдээлэл үнэн зөв байх</li>
            <li>Уяач нь албан ёсоор бүртгүүлсэн байх</li>
            <li>Уралдаанч хүүхэд хамгаалалтын хэрэгсэлтэй байх</li>
          </ul>
        </section>

        {/* Насны ангилал */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            3. Насны ангилал
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              Даага – 2 нас
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              Шүдлэн – 3 нас
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              Хязаалан – 4 нас
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              Соёолон – 5 нас
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              Их нас – 6 ба түүнээс дээш
            </div>
          </div>
        </section>

        {/* Уралдааны явц */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            4. Уралдааны явц
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Уралдаан эхлэхээс өмнө морьд гарааны зурваст
            зохион байгуулалтын дагуу жагсаж, дохионы дараа уралдана.
            Замд морь, уралдаанчид саад учруулахыг хориглоно.
          </p>
        </section>

        {/* Шагнал урамшуулал */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            5. Шагнал, урамшуулал
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Түрүүлсэн моринд шагнал олгоно</li>
            <li>Аман хүзүү, айрагдсан морьд урамшуулал авна</li>
            <li>Шилдэг уяач, уралдаанчийг шалгаруулна</li>
          </ul>
        </section>

        {/* Хариуцлага */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            6. Хариуцлага
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Дүрэм зөрчсөн уяач, оролцогчийг уралдаанаас хасах,
            дахин оролцуулахгүй байх арга хэмжээ авна.
          </p>
        </section>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2025 Морин уралдааны нэгдсэн дүрэм
        </p>
      </div>
    </div>
  );
}
