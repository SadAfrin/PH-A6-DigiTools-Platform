import productsData from "../products.json"; 
import Card from "./Card";

const ProductSection = () => {
  return (
    <div className="bg-slate-50 py-20 px-4 md:px-10 lg:px-40">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Premium Digital Tools</h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-10">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
        

        <div className="inline-flex items-center gap-12 p-2">
            
            <button className="bg-gradient-to-r from-indigo-500 to-purple-800 text-white px-8 py-2.5 rounded-full font-semibold shadow-md">
                Products
            </button>

            {/* Cart Button with Fixed Hover Style */}
            <button className="text-gray-700 px-8 py-2.5 rounded-full font-semibold transition-all hover:from-indigo-500 hover:to-purple-800 hover:bg-gradient-to-r hover:text-white hover:shadow-md">
                Cart (0)
            </button>
        </div>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;