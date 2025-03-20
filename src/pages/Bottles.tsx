export default function BottlesGrid() {
  const bottles = [
    { id: 1, size: "80 ml", colorClass: "fill-blue-400" },
    { id: 2, size: "125 ml", colorClass: "fill-blue-500" },
    { id: 3, size: "250 ml", colorClass: "fill-blue-600" },
    { id: 4, size: "500 ml", colorClass: "fill-blue-700" },
    { id: 5, size: "750 ml", colorClass: "fill-blue-800" },
    { id: 6, size: "1 L", colorClass: "fill-teal-400" },
    { id: 7, size: "1.5 L", colorClass: "fill-teal-500" },
    { id: 8, size: "2 L", colorClass: "fill-teal-600" },
    { id: 9, size: "3 L", colorClass: "fill-teal-700" },
    { id: 10, size: "5 L", colorClass: "fill-purple-400" },
    { id: 11, size: "10 L", colorClass: "fill-purple-500" },
    { id: 12, size: "20 L", colorClass: "fill-purple-600" },
    { id: 13, size: "25 L", colorClass: "fill-purple-700" },
  ];

  // Function to determine bottle dimensions based on size
  interface Bottle {
    id: number;
    size: string;
    colorClass: string;
  }

  interface BottleDimensions {
    neckHeight: number;
    bodyHeight: number;
    neckWidth: number;
    bodyWidth: number;
  }

  const getBottleDimensions = (bottleSize: string): BottleDimensions => {
    const sizeValue = parseInt(bottleSize);

    // Adjust neck and body proportions based on bottle size
    if (sizeValue <= 250) {
      return { neckHeight: 30, bodyHeight: 90, neckWidth: 20, bodyWidth: 40 };
    } else if (sizeValue <= 1000 || bottleSize === "1 L") {
      return { neckHeight: 35, bodyHeight: 100, neckWidth: 22, bodyWidth: 45 };
    } else if (sizeValue <= 5000 || bottleSize === "3 L" || bottleSize === "5 L") {
      return { neckHeight: 40, bodyHeight: 110, neckWidth: 25, bodyWidth: 50 };
    } else {
      return { neckHeight: 45, bodyHeight: 120, neckWidth: 28, bodyWidth: 55 };
    }
  };

  // Get text color class based on bottle color
  const getTextColorClass = (colorClass: string): string => {
    return colorClass.replace("fill-", "text-");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-20 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mt-4">
        Premium Bottle Collection
      </h2>
      <p className="text-gray-600 mt-6 text-center max-w-2xl">
        Discover our extensive range of high-quality bottles in various sizes to perfectly suit your liquid storage requirements.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-16 w-full max-w-6xl">
        {bottles.map((bottle) => {
          const { neckHeight, bodyHeight, neckWidth, bodyWidth } = getBottleDimensions(bottle.size);
          const textColorClass = getTextColorClass(bottle.colorClass);
          
          return (
            <div
              key={bottle.id}
              className="rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1 group"
            >
              <div className="relative w-full h-48 mb-4">
                {/* Bottle SVG with improved design */}
                <svg
                  viewBox="0 0 100 150"
                  className="h-full w-full transition-all duration-300"
                >
                  {/* Bottle Cap */}
                  <rect
                    x={(100 - neckWidth) / 2}
                    y="5"
                    width={neckWidth}
                    height="10"
                    rx="2"
                    className="fill-gray-700 group-hover:fill-gray-800"
                  />
                  
                  {/* Bottle Neck */}
                  <rect
                    x={(100 - neckWidth) / 2}
                    y="15"
                    width={neckWidth}
                    height={neckHeight}
                    rx="3"
                    className={`${bottle.colorClass} opacity-80 group-hover:opacity-100`}
                  />
                  
                  {/* Neck to Body Transition */}
                  <path
                    d={`M${(100 - neckWidth) / 2},${15 + neckHeight} 
                        Q${(100 - bodyWidth) / 2},${15 + neckHeight + 10} ${(100 - bodyWidth) / 2},${15 + neckHeight + 10} 
                        L${(100 - bodyWidth) / 2},${15 + neckHeight + bodyHeight}
                        Q${50},${15 + neckHeight + bodyHeight + 10} ${(100 + bodyWidth) / 2},${15 + neckHeight + bodyHeight}
                        L${(100 + bodyWidth) / 2},${15 + neckHeight + 10}
                        Q${(100 + bodyWidth) / 2},${15 + neckHeight + 10} ${(100 + neckWidth) / 2},${15 + neckHeight}
                        Z`}
                    className={`${bottle.colorClass} opacity-80 group-hover:opacity-100`}
                  />
                  
                  {/* Bottle Body */}
                  <rect
                    x={(100 - bodyWidth) / 2}
                    y={15 + neckHeight + 10}
                    width={bodyWidth}
                    height={bodyHeight - 10}
                    rx="3"
                    className={`${bottle.colorClass} opacity-80 group-hover:opacity-100`}
                  />
                  
                  {/* Liquid Level */}
                  <rect
                    x={(100 - bodyWidth + 6) / 2}
                    y={15 + neckHeight + 20}
                    width={bodyWidth - 6}
                    height={bodyHeight - 30}
                    rx="2"
                    className={`${bottle.colorClass} opacity-30 group-hover:opacity-40`}
                  />
                  
                  {/* Shine Effect */}
                  <rect
                    x={(100 - bodyWidth + 30) / 2}
                    y={15 + neckHeight + 15}
                    width="10"
                    height={bodyHeight - 20}
                    rx="5"
                    className="fill-white opacity-20 group-hover:opacity-30"
                  />
                </svg>
                
                {/* Size Label */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow-md border border-gray-200 group-hover:bg-opacity-100 group-hover:shadow-lg transition-all duration-300">
                  <span className={`${textColorClass} font-bold text-lg`}>{bottle.size}</span>
                </div>
              </div>
              
              {/* Additional text below the bottle */}
              <h3 className="font-medium text-gray-700 text-center mt-2">
                {bottle.size.includes("ml") ? "Small" : 
                  parseInt(bottle.size) <= 5 || bottle.size === "5 L" ? "Medium" : "Large"} Bottle
              </h3>
              <p className="text-gray-500 text-sm text-center mt-1">
                Premium Quality
              </p>
            </div>
          );
        })}
      </div>
      
   
    </div>
  );
}