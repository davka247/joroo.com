import { Outlet, NavLink, useNavigate } from "react-router-dom";

type LayoutProps = {
  loggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
};

export default function Layout({ loggedIn, setLoggedIn }: LayoutProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow-md flex flex-wrap gap-4 justify-between items-center">
        <h1 className="text-xl font-bold">Joroo.com</h1>
        <nav className="flex flex-wrap gap-3 text-sm">
          <NavLink to="/home" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Нүүр</NavLink>
          <NavLink to="/burtgel" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Бүртгэл</NavLink>
          <NavLink to="/uraldaan" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Уралдаан</NavLink>
          <NavLink to="/aylal" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Аялал</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Галерей</NavLink>
          <NavLink to="/durem" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Дүрэм</NavLink>
          <NavLink to="/salbar-holboo" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Салбар холбоо</NavLink>
          <NavLink to="/amjilt" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Амжилт</NavLink>
          <NavLink to="/holboo-barih" className={({ isActive }) => (isActive ? "underline font-semibold" : "")}>Холбоо барих</NavLink>
        </nav>
        {loggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-sm font-semibold"
          >
            Гарах
          </button>
        )}
      </header>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

      <footer className="bg-gray-200 p-4 text-center text-gray-600 text-sm">
        © 2025 Joroo.com
      </footer>
    </div>
  );
}
