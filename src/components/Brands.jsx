import { Link } from "react-router-dom";

export default function Brands() {
  const brands = [
    { name: "ZARA", style: "text-black font-bold text-3xl italic", path: "/brands/zara" },
    { name: "D&G", style: "text-black font-bold text-3xl", path: "/brands/dg" },
    { name: "H&M", style: "text-red-600 font-bold text-3xl", path: "/brands/hm" },
    { name: "CHANEL", style: "text-black font-bold text-xl", logo: "text-4xl", path: "/brands/chanel" },
    { name: "PRADA", style: "text-black font-bold text-2xl tracking-widest", path: "/brands/prada" },
    { name: "BIBA", style: "text-red-600 font-bold text-2xl", path: "/brands/biba" },
  ];

  return (
    <div className="container mx-auto px-4 py-6" id="brands">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Shop by Brands</h2>

      {/* Brand Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Link
            key={brand.name}
            to={brand.path}
            className="flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-24"
          >
            {brand.name === "CHANEL" ? (
              <div className="flex flex-col items-center">
                <span className={brand.logo}>CC</span>
                <span className={brand.style}>{brand.name}</span>
              </div>
            ) : (
              <span className={brand.style}>{brand.name}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}