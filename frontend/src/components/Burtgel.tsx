import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { createHorse, fetchHorses, type HorsePayload } from "../api/horses";
import { getDirectImageUploadUrl } from "../api/uploads";

const emptyForm: HorsePayload = {
  name: "",
  ownerName: "",
  ownerPhone: "",
  trainerName: "",
  trainerPhone: "",
  age: "",
  birthPlace: "",
  fatherLine: ["", "", "", "", ""],
  motherLine: ["", "", "", "", ""],
  imageUrl: null,
  color: "",
};

export default function Burtgel() {
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<HorsePayload>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [horses, setHorses] = useState<HorsePayload[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [uploading, setUploading] = useState(false);

  const inputClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLineChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "fatherLine" | "motherLine",
    index: number
  ) => {
    const updated = [...formData[type]];
    updated[index] = e.target.value;
    setFormData((prev) => ({ ...prev, [type]: updated }));
  };

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const { uploadURL, publicURL } = await getDirectImageUploadUrl();
      const uploadPayload = new FormData();
      uploadPayload.append("file", file);

      const resp = await fetch(uploadURL, { method: "POST", body: uploadPayload });
      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(errText || "Зураг илгээхэд алдаа гарлаа.");
      }

      setFormData((prev) => ({ ...prev, imageUrl: publicURL }));
      setPreview(publicURL);
      setMessage({ type: "success", text: "Зураг Cloudflare-д илгээлээ." });
    } catch (err) {
      const text = err instanceof Error ? err.message : "Зураг илгээхэд алдаа гарлаа.";
      setMessage({ type: "error", text });
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    if (!formData.imageUrl) {
      setMessage({ type: "error", text: "Зураг заавал байршуулаарай." });
      setSaving(false);
      return;
    }

    try {
      await createHorse(formData);
      setMessage({ type: "success", text: "Амжилттай хадгаллаа." });
      setFormData(emptyForm);
      setPreview(null);
      await loadHorses();
    } catch (err) {
      const text = err instanceof Error ? err.message : "Хадгалж чадсангүй.";
      setMessage({ type: "error", text });
    } finally {
      setSaving(false);
    }
  };

  const loadHorses = async () => {
    setLoadingList(true);
    try {
      const data = await fetchHorses();
      setHorses(data as HorsePayload[]);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    loadHorses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-700">Морь бүртгэл</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Морь, эзэмшигчийн мэдээллийг бөглөж зураг байршуулаад хадгална.
        </p>

        {message && (
          <div
            className={`mb-4 rounded-lg border px-4 py-3 text-sm ${
              message.type === "success"
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Морьны нэр *</label>
              <input
                name="name"
                required
                placeholder="Морьны нэр"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Өнгө</label>
              <input
                name="color"
                placeholder="хар, бор..."
                value={formData.color ?? ""}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Нас</label>
              <input
                name="age"
                type="number"
                min="0"
                placeholder="Нас"
                value={formData.age}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Төрсөн газар</label>
              <input
                name="birthPlace"
                placeholder="аймаг/сум"
                value={formData.birthPlace}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Эзэмшигчийн нэр *</label>
              <input
                name="ownerName"
                required
                placeholder="Эзэмшигчийн нэр"
                value={formData.ownerName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Эзэмшигчийн утас *</label>
              <input
                name="ownerPhone"
                required
                placeholder="Эзэмшигчийн утас"
                value={formData.ownerPhone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Уяачийн нэр</label>
              <input
                name="trainerName"
                placeholder="Уяачийн нэр"
                value={formData.trainerName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Уяачийн утас</label>
              <input
                name="trainerPhone"
                placeholder="Уяачийн утас"
                value={formData.trainerPhone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Зураг байршуулах (Cloudflare)</label>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="mt-1" />
            {preview && (
              <img
                src={preview}
                className="mt-3 h-48 w-full rounded-xl object-cover md:w-72"
                alt="preview"
              />
            )}
            <p className="mt-2 text-xs text-gray-500">
              Cloudflare Images шууд upload ашиглаж, буцааж өгсөн public URL-ийг хадгална.
            </p>
            {uploading && <p className="text-xs text-blue-600 mt-1">Илгээж байна...</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-base font-semibold mb-2">Эцгийн удам (5 мөр)</h2>
              <div className="space-y-2">
                {formData.fatherLine.map((value, i) => (
                  <input
                    key={`father-${i}`}
                    placeholder={`${i + 1}-р мөр`}
                    value={value}
                    onChange={(e) => handleLineChange(e, "fatherLine", i)}
                    className={inputClass}
                  />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold mb-2">Эхийн удам (5 мөр)</h2>
              <div className="space-y-2">
                {formData.motherLine.map((value, i) => (
                  <input
                    key={`mother-${i}`}
                    placeholder={`${i + 1}-р мөр`}
                    value={value}
                    onChange={(e) => handleLineChange(e, "motherLine", i)}
                    className={inputClass}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-60"
            disabled={saving}
          >
            {saving ? "Хадгалж байна..." : "Хадгалах"}
          </button>
        </form>

        <div className="mt-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-800">Бүртгэлтэй морьд</h3>
            <button
              type="button"
              onClick={loadHorses}
              className="text-sm text-blue-600 hover:underline disabled:opacity-60"
              disabled={loadingList}
            >
              {loadingList ? "Дуудаж байна..." : "Сэргээх"}
            </button>
          </div>

          {horses.length === 0 && !loadingList && (
            <p className="text-sm text-gray-500">Морь бүртгэл хараахан алга.</p>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {horses.map((horse, idx) => (
              <div
                key={`${horse.name}-${idx}`}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  {horse.imageUrl ? (
                    <img
                      src={horse.imageUrl}
                      alt={horse.name}
                      className="h-16 w-16 rounded-lg object-cover border"
                    />
                  ) : (
                    <div className="h-16 w-16 rounded-lg bg-white border flex items-center justify-center text-xs text-gray-400">
                      No image
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{horse.name}</h4>
                    <p className="text-xs text-gray-500">
                      {horse.color ? `${horse.color} ` : ""}
                      {horse.age ? `${horse.age} настай` : "Нас тодорхойгүй"}
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
      </div>
    </div>
  );
}
