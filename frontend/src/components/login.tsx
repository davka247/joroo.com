
import { useState,type FormEvent } from "react";

type User = {
  username: string;
  password: string;
};

type loginProps = {
  loggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
};

export default function Login({ loggedIn, setLoggedIn }: loginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerMode, setRegisterMode] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoggedIn(true); // App.tsx-д state дамжуулж Layout гарна
    } else {
      alert("Нэр эсвэл нууц үг буруу байна");
    }
  };

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Бүх талбарыг бөглөнө үү");
      return;
    }
    const userExists = registeredUsers.find((u) => u.username === username);
    if (userExists) {
      alert("Энэ нэр аль хэдийн бүртгэгдсэн байна");
      return;
    }
    setRegisteredUsers([...registeredUsers, { username, password }]);
    alert("Амжилттай бүртгэгдлээ!");
    setRegisterMode(false);
    setUsername("");
    setPassword("");
  };

  // **Зөвхөн login/registration form харуулна.**
  // Хэрэв loggedIn = true бол Layout автоматаар App.tsx-д гарч ирнэ.
  if (loggedIn) {
    // Энд ямар нэг content харуулах шаардлагагүй
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">
          {registerMode ? "Бүртгүүлэх" : "Нэвтрэх"}
        </h2>
        <form
          onSubmit={registerMode ? handleRegister : handleLogin}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Хэрэглэгчийн нэр"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Нууц үг"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {registerMode ? "Бүртгүүлэх" : "Нэвтрэх"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          {registerMode ? "Бүртгэлтэй юу?" : "Шинэ хэрэглэгч үү?"}{" "}
          <span
            onClick={() => setRegisterMode(!registerMode)}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {registerMode ? "Нэвтрэх" : "Бүртгүүлэх"}
          </span>
        </p>
      </div>
    </div>
  );
}
