import { useState, type FormEvent, type ChangeEvent } from "react";

export default function HolbooBarih() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !phone || !message) {
      alert("Заавал бөглөх талбаруудыг гүйцээнэ үү");
      return;
    }

    // энд backend / API холбож болно
    console.log({ name, phone, email, message });

    setSent(true);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          📞 Холбоо барих
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Мэдээлэл</h2>
            <p className="text-gray-700">
              Та доорх мэдээллээр бидэнтэй холбогдох боломжтой.
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>📍 Байршил: Улаанбаатар хот</li>
              <li>📱 Утас: 9911-2233</li>
              <li>✉️ Имэйл: info@morin-uraldaan.mn</li>
            </ul>

            <div className="mt-4">
              <iframe
                title="map"
                className="w-full h-48 rounded-xl border"
                src="https://maps.google.com/maps?q=ulaanbaatar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Санал хүсэлт</h2>

            {sent && (
              <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                ✔️ Таны мессеж амжилттай илгээгдлээ
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Нэр *"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                type="tel"
                placeholder="Утас *"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                type="email"
                placeholder="Имэйл"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <textarea
                placeholder="Таны зурвас *"
                value={message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setMessage(e.target.value)
                }
                rows={4}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Илгээх
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2025 Морин уралдаан
        </p>
      </div>
    </div>
  );
}
