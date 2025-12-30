
type Branch = {
  name: string;
  address: string;
  phone: string;
  email?: string;
};

const branches: Branch[] = [
  {
    name: "Улаанбаатар хот",
    address: "Сүхбаатар дүүрэг, Хан-Уулын гудамж 12",
    phone: "9911-1234",
    email: "ub@example.com",
  },
  {
    name: "Дархан",
    address: "Дархан-Уул аймаг, 3-р баг, Энхтайваны гудамж 5",
    phone: "9922-5678",
    email: "darhan@example.com",
  },
];

export default function Departments() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Салбар холбоо</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {branches.map((branch, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{branch.name}</h2>
            <p className="text-gray-700"><strong>Хаяг:</strong> {branch.address}</p>
            <p className="text-gray-700"><strong>Утас:</strong> {branch.phone}</p>
            {branch.email && (
              <p className="text-gray-700"><strong>И-мэйл:</strong> {branch.email}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
