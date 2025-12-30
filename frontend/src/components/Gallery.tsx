// Gallery.tsx
export default function Gallery() {
  return (
    <div className="p-6 space-y-6">
      {/* Зурагны хэсэг */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Зурагнууд</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-300 h-32 rounded" />
          <div className="bg-gray-300 h-32 rounded" />
          <div className="bg-gray-300 h-32 rounded" />
        </div>
      </section>

      {/* Видео хэсэг */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Видео</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-black h-32 rounded flex items-center justify-center text-white">
            Видео 1
          </div>
          <div className="bg-black h-32 rounded flex items-center justify-center text-white">
            Видео 2
          </div>
          <div className="bg-black h-32 rounded flex items-center justify-center text-white">
            Видео 3
          </div>
        </div>
      </section>
    </div>
  );
}
