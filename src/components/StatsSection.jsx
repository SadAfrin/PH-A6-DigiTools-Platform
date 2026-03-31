const StatsSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12">
        
        <div className="flex-col md:flex-row flex justify-between items-center">
  
            <div className="flex-1 text-center py-8 md:py-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</h2>
                <p className="text-sm md:text-base font-medium text-purple-100 opacity-90">
                Active Users
                </p>
            </div>

            <div className="flex-1 text-center border-y md:border-y-0 md:border-x-2 border-gray-300/40 py-8 md:py-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">200+</h2>
                <p className="text-sm md:text-base font-medium text-purple-100 opacity-90">
                Premium Tools
                </p>
            </div>

            <div className="flex-1 text-center py-8 md:py-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</h2>
                <p className="text-sm md:text-base font-medium text-purple-100 opacity-90">
                Rating
                </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;