export default function PreformsGrid() {
    const preforms = [
      // Regular Preforms
      { id: 1, type: "29/21 Alaska", usage: "Water Packing", color: "blue", category: "Bottles" },
      { id: 2, type: "29/21 CTC", usage: "Edible/Palm Oil", color: "yellow", category: "Bottles" },
      { id: 3, type: "29/21 TST", usage: "Soda & Cold Drinks", color: "green", category: "Bottles" },
      
      // Wide Mouth Preforms
      { id: 4, type: "83mm", usage: "Wide Mouth Container", color: "purple", category: "Wide Mouth" },
      { id: 5, type: "90mm", usage: "Wide Mouth Container", color: "purple", category: "Wide Mouth" },
      { id: 6, type: "100mm", usage: "Wide Mouth Container", color: "purple", category: "Wide Mouth" },
      { id: 7, type: "110mm", usage: "Wide Mouth Container", color: "purple", category: "Wide Mouth" },
      { id: 8, type: "120mm", usage: "Wide Mouth Container", color: "purple", category: "Wide Mouth" },
      
      // Closures
      { id: 9, type: "Standard Closure", usage: "For Bottles", color: "gray", category: "Closure" },
      { id: 10, type: "Wide Mouth Closure", usage: "For Jars", color: "gray", category: "Closure" }
    ];
  
    const getPreformColorClass = (color: string): string => {
      switch (color) {
        case "blue": return "fill-blue-500";
        case "yellow": return "fill-yellow-500";
        case "green": return "fill-green-500";
        case "purple": return "fill-purple-500";
        case "gray": return "fill-gray-500";
        default: return "fill-blue-500";
      }
    };
  
    const getTextColorClass = (color: string): string => {
      switch (color) {
        case "blue": return "text-blue-500";
        case "yellow": return "text-yellow-500";
        case "green": return "text-green-500";
        case "purple": return "text-purple-500";
        case "gray": return "text-gray-500";
        default: return "text-blue-500";
      }
    };
  
    const renderPreformSVG = (preform: {
      id: number;
      type: string;
      usage: string;
      color: string;
      category: string;
    }) => {
      const colorClass = getPreformColorClass(preform.color);
      
      if (preform.category === "Bottles") {
        // Regular preform shape
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Neck Ring */}
            {/* <circle cx="50" cy="25" r="15" className={`${colorClass} opacity-90 group-hover:opacity-100`} /> */}
            
            {/* Thread Detail */}
            <rect x="42" y="15" width="16" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="42" y="19" width="16" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="42" y="23" width="16" height="2" rx="1" className="fill-white opacity-30" />
            
            {/* Neck */}
            <rect x="45" y="25" width="10" height="15" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Support Ring */}
            <rect x="40" y="40" width="20" height="5" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Body */}
            <path 
              d={`M40,45 
                  Q40,50 38,55 
                  L38,115 
                  Q38,125 50,125 
                  Q62,125 62,115 
                  L62,55 
                  Q60,50 60,45 
                  Z`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Highlight */}
            <path 
              d={`M45,50 
                  L45,115 
                  Q45,120 50,120 
                  Q55,120 55,115 
                  L55,50`} 
              className="fill-white opacity-10 group-hover:opacity-20" 
            />
            
            {/* Bottom Dot */}
            <circle cx="50" cy="123" r="2" className="fill-white opacity-30" />
          </svg>
        );
      } else if (preform.category === "Wide Mouth") {
        // Wide mouth preform
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Neck Ring */}
            {/* <circle cx="50" cy="25" r="25" className={`${colorClass} opacity-90 group-hover:opacity-100`} /> */}
            
            {/* Thread Detail */}
            <rect x="30" y="15" width="40" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="30" y="19" width="40" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="30" y="23" width="40" height="2" rx="1" className="fill-white opacity-30" />
            
            {/* Neck */}
            <rect x="35" y="25" width="30" height="10" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Support Ring */}
            <rect x="30" y="35" width="40" height="5" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Body */}
            <path 
              d={`M30,40 
                  Q30,45 28,50 
                  L28,115 
                  Q28,125 50,125 
                  Q72,125 72,115 
                  L72,50 
                  Q70,45 70,40 
                  Z`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Highlight */}
            <path 
              d={`M35,45 
                  L35,115 
                  Q35,120 50,120 
                  Q65,120 65,115 
                  L65,45`} 
              className="fill-white opacity-10 group-hover:opacity-20" 
            />
            
            {/* Bottom Dot */}
            {/* <circle cx="50" cy="123" r="2" className="fill-white opacity-30" /> */}
          </svg>
        );
      } else {
        // Closure
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Closure Top */}
            <rect x="30" y="30" width="40" height="5" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Closure Body */}
            <path 
              d={`M30,35 
                  L30,60 
                  Q30,65 35,65 
                  L65,65 
                  Q70,65 70,60 
                  L70,35 
                  Z`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Closure Threads */}
            <rect x="32" y="40" width="36" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="32" y="45" width="36" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="32" y="50" width="36" height="2" rx="1" className="fill-white opacity-30" />
            <rect x="32" y="55" width="36" height="2" rx="1" className="fill-white opacity-30" />
            
            {/* Seal */}
            <rect x="35" y="60" width="30" height="5" rx="2" className="fill-white opacity-30" />
          </svg>
        );
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-20 px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mt-4">
          PET Preforms & Closures
        </h2>
        <p className="text-gray-600 mt-6 text-center max-w-2xl">
          High-quality PET preforms and closures for various applications including bottles, wide mouth containers, and specialty packaging.
        </p>
  
        {/* Category navigation */}
        {/* <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            All Items
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Bottle Preforms
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Wide Mouth Preforms
          </button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Closures
          </button>
        </div>
   */}
        {/* Preforms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12 w-full max-w-6xl">
          {preforms.map((preform) => {
            const textColorClass = getTextColorClass(preform.color);
            
            return (
              <div
                key={preform.id}
                className="rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1 group"
              >
                <div className="relative w-full h-48 mb-4 flex items-center justify-center">
                  {/* Preform SVG */}
                  {renderPreformSVG(preform)}
                  
                  {/* Type Label */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow-md border border-gray-200 group-hover:bg-opacity-100 group-hover:shadow-lg transition-all duration-300">
                    <span className={`${textColorClass} font-bold text-lg`}>{preform.type}</span>
                  </div>
                </div>
                
                {/* Additional text below the preform */}
                <h3 className="font-medium text-gray-700 text-center mt-2">
                  {preform.category}
                </h3>
                <p className="text-gray-500 text-sm text-center mt-1">
                  {preform.usage}
                </p>
                
                {/* Specifications tag */}
                <div className="mt-4 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                  Premium Quality
                </div>
              </div>
            );
          })}
        </div>
        
      
      </div>
    );
  }