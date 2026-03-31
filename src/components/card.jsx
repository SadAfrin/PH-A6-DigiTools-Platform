const Card = ({ product }) => {
  const isPopular = product.tagType === "popular";

  return (
    <div className="bg-white border border-gray-200 rounded-[2rem] p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full relative group">
      
      {/* tag */}
      <div
        className={`absolute top-5 right-5 px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm
        ${isPopular ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"}`}
      >
        {product.tag}
      </div>

      {/* icon section */}
      <div className="mb-6 w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl p-3 border border-slate-100 shadow-inner group-hover:bg-indigo-50 transition-colors">
        {product.icon ? (
          <img
            src={product.icon}
            alt={product.name}
            className="w-full h-full object-contain"
            onError={(e) => (e.target.parentElement.style.display = "none")}
          />
        ) : (
          <div className="text-2xl">📦</div> 
        )}
      </div>

      {/* text section */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          {product.description}
        </p>

        {/* price section */}
        <div className="mb-8 flex items-baseline gap-1">
          <span className="text-3xl font-bold text-slate-900">${product.price}</span>
          <span className="text-slate-400 text-sm font-medium">
            /{product.period === "Monthly" ? "Mo" : "One-time"}
          </span>
        </div>

        {/* features list */}
        <ul className="space-y-4 mb-8">
          {product.features.map((feature, index) => (
            <li key={index} className="text-sm text-slate-600 flex items-center gap-2">
              <span className="text-green-500 font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/*  */}
        <button className="w-full text-white font-bold py-4 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#A855F7] hover:from-[#4F46E5] hover:to-[#9333EA] transition-all duration-300 shadow-lg shadow-indigo-100 active:scale-95 border-none outline-none">
        Buy Now
        </button>
    </div>
  );
};

export default Card;