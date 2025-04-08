export default function PackagingProductsGrid() {
  const products = [
    // Closures
    { 
      id: 1, 
      type: "28mm PCO", 
      usage: "Water & Beverage Bottles", 
      category: "Closure", 
      material: "HDPE",
      color: "blue"
    },
    { 
      id: 2, 
      type: "38mm Oil Cap", 
      usage: "Edible Oil Bottles", 
      category: "Closure", 
      material: "PP",
      color: "yellow"
    },
    { 
      id: 3, 
      type: "53mm Jar Cap", 
      usage: "Wide Mouth Jars", 
      category: "Closure", 
      material: "PP",
      color: "green"
    },
    { 
      id: 4, 
      type: "83mm Jar Lid", 
      usage: "Large Containers", 
      category: "Closure", 
      material: "PP",
      color: "purple"
    },
    
    // HDPE Bottles & Jars
    { 
      id: 5, 
      type: "100ml Bottle", 
      usage: "Pharmaceuticals", 
      category: "HDPE", 
      material: "HDPE",
      color: "white"
    },
    { 
      id: 6, 
      type: "250ml Bottle", 
      usage: "Chemicals", 
      category: "HDPE", 
      material: "HDPE",
      color: "white"
    },
    { 
      id: 7, 
      type: "500ml Jar", 
      usage: "Food Products", 
      category: "HDPE", 
      material: "HDPE",
      color: "white"
    },
    { 
      id: 8, 
      type: "1L Bottle", 
      usage: "Household Cleaners", 
      category: "HDPE", 
      material: "HDPE",
      color: "white"
    },
    { 
      id: 9, 
      type: "5L Container", 
      usage: "Industrial Liquids", 
      category: "HDPE", 
      material: "HDPE",
      color: "white"
    },
    
    // Co-polymer Containers with IML
    { 
      id: 10, 
      type: "250ml IML Cup", 
      usage: "Dairy Products", 
      category: "Co-polymer", 
      material: "PP/PS",
      color: "cyan"
    },
  //   { 
  //     id: 11, 
  //     type: "500ml IML Container", 
  //     usage: "Ready-to-eat Food", 
  //     category: "Co-polymer", 
  //     material: "PP/PS",
  //     color: "cyan"
  //   },
    { 
      id: 12, 
      type: "1L IML Bucket", 
      usage: "Ice Cream", 
      category: "Co-polymer", 
      material: "PP/PS",
      color: "cyan"
    }
  ];

  const getColorClass = (color: string): string => {
    switch (color) {
      case "blue": return "fill-blue-500";
      case "yellow": return "fill-yellow-500";
      case "green": return "fill-green-500";
      case "purple": return "fill-purple-500";
      case "white": return "fill-gray-200";
      case "cyan": return "fill-cyan-500";
      default: return "fill-gray-500";
    }
  };

  const getTextColorClass = (color: string): string => {
    switch (color) {
      case "blue": return "text-blue-500";
      case "yellow": return "text-yellow-500";
      case "green": return "text-green-500";
      case "purple": return "text-purple-500";
      case "white": return "text-gray-700";
      case "cyan": return "text-cyan-500";
      default: return "text-gray-500";
    }
  };

  const renderProductSVG = (product: {
    id: number;
    type: string;
    usage: string;
    category: string;
    material: string;
    color: string;
  }) => {
    const colorClass = getColorClass(product.color);
    
    if (product.category === "Closure") {
      // Closure SVG
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
          
          {/* Closure Texture */}
          <rect x="32" y="40" width="36" height="2" rx="1" className="fill-white opacity-30" />
          <rect x="32" y="45" width="36" height="2" rx="1" className="fill-white opacity-30" />
          <rect x="32" y="50" width="36" height="2" rx="1" className="fill-white opacity-30" />
          <rect x="32" y="55" width="36" height="2" rx="1" className="fill-white opacity-30" />
          
          {/* Tamper Evidence */}
          <path 
            d={`M30,60 
                L30,70 
                Q30,75 35,75 
                L65,75 
                Q70,75 70,70 
                L70,60`} 
            className={`${colorClass} opacity-60 group-hover:opacity-70`} 
            strokeWidth="0.5"
            stroke="gray"
          />
          
          {/* Perforation */}
          <path 
            d={`M30,60 L70,60`} 
            stroke="gray" 
            strokeWidth="0.5" 
            strokeDasharray="2,2" 
          />
          
          {/* Seal */}
          <rect x="35" y="35" width="30" height="3" rx="1" className="fill-white opacity-30" />
        </svg>
      );
    } else if (product.category === "HDPE") {
      // HDPE Bottle/Jar
      const isJar = product.type.includes("Jar");
      
      if (isJar) {
        // Wide mouth jar
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Neck */}
            <rect x="35" y="20" width="30" height="10" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Thread */}
            <rect x="35" y="20" width="30" height="5" rx="1" className="fill-white opacity-20" />
            
            {/* Body */}
            <path 
              d={`M30,30 
                  L30,110 
                  Q30,120 50,120 
                  Q70,120 70,110 
                  L70,30 
                  Z`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Handle (for larger jars) */}
            {product.type.includes("500ml") || product.type.includes("1L") || product.type.includes("5L") ? (
              <path 
                d={`M70,50 
                    Q80,50 80,60 
                    L80,90 
                    Q80,100 70,100`} 
                className={`${colorClass} opacity-90 group-hover:opacity-100`}
                strokeWidth="4"
                stroke={colorClass.replace("fill", "stroke")}
                fill="none"
              />
            ) : null}
            
            {/* Base */}
            <path 
              d={`M30,110 
                  Q30,120 50,120 
                  Q70,120 70,110`} 
              className={`${colorClass} opacity-90 group-hover:opacity-100`} 
            />
            
            {/* Label Area */}
            <rect x="35" y="50" width="30" height="40" rx="2" className="fill-white opacity-20" />
          </svg>
        );
      } else {
        // Regular bottle
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Neck */}
            <rect x="42" y="20" width="16" height="20" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Thread */}
            <rect x="42" y="20" width="16" height="5" rx="1" className="fill-white opacity-20" />
            
            {/* Shoulder */}
            <path 
              d={`M42,40 
                  Q30,50 30,60 
                  L30,110 
                  Q30,120 50,120 
                  Q70,120 70,110 
                  L70,60 
                  Q70,50 58,40`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Handle (for larger bottles) */}
            {product.type.includes("1L") || product.type.includes("5L") ? (
              <path 
                d={`M70,60 
                    Q80,60 80,70 
                    L80,90 
                    Q80,100 70,100`} 
                className={`${colorClass} opacity-90 group-hover:opacity-100`}
                strokeWidth="4"
                stroke={colorClass.replace("fill", "stroke")}
                fill="none"
              />
            ) : null}
            
            {/* Base */}
            <path 
              d={`M30,110 
                  Q30,120 50,120 
                  Q70,120 70,110`} 
              className={`${colorClass} opacity-90 group-hover:opacity-100`} 
            />
            
            {/* Label Area */}
            <rect x="35" y="60" width="30" height="40" rx="2" className="fill-white opacity-20" />
          </svg>
        );
      }
    } else if (product.category === "Co-polymer") {
      // Co-polymer Container with IML
      const isIceCreambucket = product.type.includes("Bucket");
      
      if (isIceCreambucket) {
        // Bucket style
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Top */}
            <ellipse cx="50" cy="30" rx="30" ry="10" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Lid Detail */}
            <ellipse cx="50" cy="30" rx="25" ry="7" className="fill-white opacity-20" />
            
            {/* Body */}
            <path 
              d={`M20,30 
                  L25,100 
                  Q30,120 50,120 
                  Q70,120 75,100 
                  L80,30`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Base */}
            <ellipse cx="50" cy="120" rx="25" ry="8" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Handle */}
            <path 
              d={`M75,40 
                  Q85,40 85,50 
                  L85,60 
                  Q85,70 75,70`} 
              className={`${colorClass} opacity-90 group-hover:opacity-100`}
              strokeWidth="4"
              stroke={colorClass.replace("fill", "stroke")}
              fill="none"
            />
            
            {/* IML Label */}
            <rect x="30" y="50" width="40" height="40" rx="2" className="fill-white opacity-40" />
            <text x="50" y="70" textAnchor="middle" className="text-xs fill-gray-700 font-bold">IML</text>
          </svg>
        );
      } else {
        // Cup style
        return (
          <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
            {/* Top */}
            <ellipse cx="50" cy="30" rx="30" ry="10" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* Lid Detail */}
            <ellipse cx="50" cy="30" rx="25" ry="7" className="fill-white opacity-20" />
            
            {/* Body */}
            <path 
              d={`M25,30 
                  L30,110 
                  Q35,120 50,120 
                  Q65,120 70,110 
                  L75,30`} 
              className={`${colorClass} opacity-80 group-hover:opacity-100`} 
            />
            
            {/* Base */}
            <ellipse cx="50" cy="120" rx="20" ry="5" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
            {/* IML Label */}
            <rect x="35" y="50" width="30" height="40" rx="2" className="fill-white opacity-40" />
            <text x="50" y="70" textAnchor="middle" className="text-xs fill-gray-700 font-bold">IML</text>
          </svg>
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-20 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center mt-4">
        Packaging Solutions
      </h2>
      <p className="text-gray-600 mt-6 text-center max-w-2xl">
        Complete range of packaging solutions including closures, HDPE bottles and jars, and co-polymer containers with in-mold labeling.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12 w-full max-w-6xl">
        {products.map((product) => {
          const textColorClass = getTextColorClass(product.color);
          
          return (
            <div
              key={product.id}
              className="rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1 group"
            >
              <div className="relative w-full h-48 mb-4 flex items-center justify-center">
                {/* Product SVG */}
                {renderProductSVG(product)}
                
                {/* Type Label */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow-md border border-gray-200 group-hover:bg-opacity-100 group-hover:shadow-lg transition-all duration-300">
                  <span className={`${textColorClass} font-bold text-lg`}>{product.type}</span>
                </div>
              </div>
              
              {/* Additional text below the product */}
              <h3 className="font-medium text-gray-700 text-center mt-2">
                {product.category}
              </h3>
              <p className="text-gray-500 text-sm text-center mt-1">
                {product.usage}
              </p>
              
              {/* Material tag */}
              <div className="mt-4 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                {product.material}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Custom Sizes Section */}
      <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <svg viewBox="0 0 100 150" className="w-full max-w-xs mx-auto">
              {/* Various size closures */}
              <rect x="30" y="20" width="40" height="5" rx="2" className="fill-gray-300" />
              <path 
                d={`M30,25 L30,40 Q30,45 35,45 L65,45 Q70,45 70,40 L70,25 Z`} 
                className="fill-gray-300" 
              />
              
              <rect x="25" y="60" width="50" height="5" rx="2" className="fill-blue-400" />
              <path 
                d={`M25,65 L25,85 Q25,90 30,90 L70,90 Q75,90 75,85 L75,65 Z`} 
                className="fill-blue-400" 
              />
              
              <rect x="20" y="100" width="60" height="5" rx="2" className="fill-green-400" />
              <path 
                d={`M20,105 L20,130 Q20,135 25,135 L75,135 Q80,135 80,130 L80,105 Z`} 
                className="fill-green-400" 
              />
              
              {/* Size indicators */}
              <text x="50" y="35" textAnchor="middle" className="text-xs fill-gray-700 font-bold">53mm</text>
              <text x="50" y="80" textAnchor="middle" className="text-xs fill-white font-bold">83mm</text>
              <text x="50" y="120" textAnchor="middle" className="text-xs fill-white font-bold">120mm</text>
            </svg>
          </div>
          
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-bold text-gray-800">Custom Size Options</h3>
            <p className="text-gray-600 mt-4">
              We provide all closure sizes ranging from 53mm to 120mm to meet your specific packaging requirements. Our custom solutions ensure the perfect fit for your containers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[53, 63, 70, 83, 89, 100, 110, 120].map((size) => (
                <span key={size} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-200 text-sm font-medium">
                  {size}mm
                </span>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-blue-700">
                Our engineering team can work with you to develop custom closure solutions tailored to your specific product requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function PackagingProductsGrid() {
//     const products = [
//       // Closures
//       { 
//         id: 1, 
//         type: "28mm PCO", 
//         usage: "Water & Beverage Bottles", 
//         category: "Closure", 
//         material: "HDPE",
//         color: "blue"
//       },
//       { 
//         id: 2, 
//         type: "38mm Oil Cap", 
//         usage: "Edible Oil Bottles", 
//         category: "Closure", 
//         material: "PP",
//         color: "yellow"
//       },
//       { 
//         id: 3, 
//         type: "53mm Jar Cap", 
//         usage: "Wide Mouth Jars", 
//         category: "Closure", 
//         material: "PP",
//         color: "green"
//       },
//       { 
//         id: 4, 
//         type: "83mm Jar Lid", 
//         usage: "Large Containers", 
//         category: "Closure", 
//         material: "PP",
//         color: "purple"
//       },
      
//       // HDPE Bottles & Jars
//       { 
//         id: 5, 
//         type: "100ml Bottle", 
//         usage: "Pharmaceuticals", 
//         category: "HDPE", 
//         material: "HDPE",
//         color: "white"
//       },
//       { 
//         id: 6, 
//         type: "250ml Bottle", 
//         usage: "Chemicals", 
//         category: "HDPE", 
//         material: "HDPE",
//         color: "white"
//       },
//       { 
//         id: 7, 
//         type: "500ml Jar", 
//         usage: "Food Products", 
//         category: "HDPE", 
//         material: "HDPE",
//         color: "white"
//       },
//       { 
//         id: 8, 
//         type: "1L Bottle", 
//         usage: "Household Cleaners", 
//         category: "HDPE", 
//         material: "HDPE",
//         color: "white"
//       },
//       { 
//         id: 9, 
//         type: "5L Container", 
//         usage: "Industrial Liquids", 
//         category: "HDPE", 
//         material: "HDPE",
//         color: "white"
//       },
      
//       // Co-polymer Containers with IML
//       { 
//         id: 10, 
//         type: "250ml IML Cup", 
//         usage: "Dairy Products", 
//         category: "Co-polymer", 
//         material: "PP/PS",
//         color: "cyan"
//       },
//     //   { 
//     //     id: 11, 
//     //     type: "500ml IML Container", 
//     //     usage: "Ready-to-eat Food", 
//     //     category: "Co-polymer", 
//     //     material: "PP/PS",
//     //     color: "cyan"
//     //   },
//       { 
//         id: 12, 
//         type: "1L IML Bucket", 
//         usage: "Ice Cream", 
//         category: "Co-polymer", 
//         material: "PP/PS",
//         color: "cyan"
//       }
//     ];
  
//     const getColorClass = (color: string): string => {
//       switch (color) {
//         case "blue": return "fill-blue-500";
//         case "yellow": return "fill-yellow-500";
//         case "green": return "fill-green-500";
//         case "purple": return "fill-purple-500";
//         case "white": return "fill-gray-200";
//         case "cyan": return "fill-cyan-500";
//         default: return "fill-gray-500";
//       }
//     };
  
//     const getTextColorClass = (color: string): string => {
//       switch (color) {
//         case "blue": return "text-blue-500";
//         case "yellow": return "text-yellow-500";
//         case "green": return "text-green-500";
//         case "purple": return "text-purple-500";
//         case "white": return "text-gray-700";
//         case "cyan": return "text-cyan-500";
//         default: return "text-gray-500";
//       }
//     };
  
//     const renderProductSVG = (product: {
//       id: number;
//       type: string;
//       usage: string;
//       category: string;
//       material: string;
//       color: string;
//     }) => {
//       const colorClass = getColorClass(product.color);
      
//       if (product.category === "Closure") {
//         // Closure SVG
//         return (
//           <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
//             {/* Closure Top */}
//             <rect x="30" y="30" width="40" height="5" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
            
//             {/* Closure Body */}
//             <path 
//               d={`M30,35 
//                   L30,60 
//                   Q30,65 35,65 
//                   L65,65 
//                   Q70,65 70,60 
//                   L70,35 
//                   Z`} 
//               className={`${colorClass} opacity-80 group-hover:opacity-100`} 
//             />
            
//             {/* Closure Texture */}
//             <rect x="32" y="40" width="36" height="2" rx="1" className="fill-white opacity-30" />
//             <rect x="32" y="45" width="36" height="2" rx="1" className="fill-white opacity-30" />
//             <rect x="32" y="50" width="36" height="2" rx="1" className="fill-white opacity-30" />
//             <rect x="32" y="55" width="36" height="2" rx="1" className="fill-white opacity-30" />
            
//             {/* Tamper Evidence */}
//             <path 
//               d={`M30,60 
//                   L30,70 
//                   Q30,75 35,75 
//                   L65,75 
//                   Q70,75 70,70 
//                   L70,60`} 
//               className={`${colorClass} opacity-60 group-hover:opacity-70`} 
//               strokeWidth="0.5"
//               stroke="gray"
//             />
            
//             {/* Perforation */}
//             <path 
//               d={`M30,60 L70,60`} 
//               stroke="gray" 
//               strokeWidth="0.5" 
//               strokeDasharray="2,2" 
//             />
            
//             {/* Seal */}
//             <rect x="35" y="35" width="30" height="3" rx="1" className="fill-white opacity-30" />
//           </svg>
//         );
//       } else if (product.category === "HDPE") {
//         // HDPE Bottle/Jar
//         const isJar = product.type.includes("Jar");
        
//         if (isJar) {
//           // Wide mouth jar
//           return (
//             <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
//               {/* Neck */}
//               <rect x="35" y="20" width="30" height="10" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
              
//               {/* Thread */}
//               <rect x="35" y="20" width="30" height="5" rx="1" className="fill-white opacity-20" />
              
//               {/* Body */}
//               <path 
//                 d={`M30,30 
//                     L30,110 
//                     Q30,120 50,120 
//                     Q70,120 70,110 
//                     L70,30 
//                     Z`} 
//                 className={`${colorClass} opacity-80 group-hover:opacity-100`} 
//               />
              
//               {/* Handle (for larger jars) */}
//               {product.type.includes("500ml") || product.type.includes("1L") || product.type.includes("5L") ? (
//                 <path 
//                   d={`M70,50 
//                       Q80,50 80,60 
//                       L80,90 
//                       Q80,100 70,100`} 
//                   className={`${colorClass} opacity-90 group-hover:opacity-100`}
//                   strokeWidth="4"
//                   stroke={colorClass.replace("fill", "stroke")}
//                   fill="none"
//                 />
//               ) : null}
              
//               {/* Base */}
//               <path 
//                 d={`M30,110 
//                     Q30,120 50,120 
//                     Q70,120 70,110`} 
//                 className={`${colorClass} opacity-90 group-hover:opacity-100`} 
//               />
              
//               {/* Label Area */}
//               <rect x="35" y="50" width="30" height="40" rx="2" className="fill-white opacity-20" />
//             </svg>
//           );
//         } else {
//           // Regular bottle
//           return (
//             <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
//               {/* Neck */}
//               <rect x="42" y="20" width="16" height="20" rx="2" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
              
//               {/* Thread */}
//               <rect x="42" y="20" width="16" height="5" rx="1" className="fill-white opacity-20" />
              
//               {/* Shoulder */}
//               <path 
//                 d={`M42,40 
//                     Q30,50 30,60 
//                     L30,110 
//                     Q30,120 50,120 
//                     Q70,120 70,110 
//                     L70,60 
//                     Q70,50 58,40`} 
//                 className={`${colorClass} opacity-80 group-hover:opacity-100`} 
//               />
              
//               {/* Handle (for larger bottles) */}
//               {product.type.includes("1L") || product.type.includes("5L") ? (
//                 <path 
//                   d={`M70,60 
//                       Q80,60 80,70 
//                       L80,90 
//                       Q80,100 70,100`} 
//                   className={`${colorClass} opacity-90 group-hover:opacity-100`}
//                   strokeWidth="4"
//                   stroke={colorClass.replace("fill", "stroke")}
//                   fill="none"
//                 />
//               ) : null}
              
//               {/* Base */}
//               <path 
//                 d={`M30,110 
//                     Q30,120 50,120 
//                     Q70,120 70,110`} 
//                 className={`${colorClass} opacity-90 group-hover:opacity-100`} 
//               />
              
//               {/* Label Area */}
//               <rect x="35" y="60" width="30" height="40" rx="2" className="fill-white opacity-20" />
//             </svg>
//           );
//         }
//       } else if (product.category === "Co-polymer") {
//         // Co-polymer Container with IML
//         const isIceCreambucket = product.type.includes("Bucket");
        
//         if (isIceCreambucket) {
//           // Bucket style
//           return (
//             <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
//               {/* Top */}
//               <ellipse cx="50" cy="30" rx="30" ry="10" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
              
//               {/* Lid Detail */}
//               <ellipse cx="50" cy="30" rx="25" ry="7" className="fill-white opacity-20" />
              
//               {/* Body */}
//               <path 
//                 d={`M20,30 
//                     L25,100 
//                     Q30,120 50,120 
//                     Q70,120 75,100 
//                     L80,30`} 
//                 className={`${colorClass} opacity-80 group-hover:opacity-100`} 
//               />
              
//               {/* Base */}
//               <ellipse cx="50" cy="120" rx="25" ry="8" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
              
//               {/* Handle */}
//               <path 
//                 d={`M75,40 
//                     Q85,40 85,50 
//                     L85,60 
//                     Q85,70 75,70`} 
//                 className={`${colorClass} opacity-90 group-hover:opacity-100`}
//                 strokeWidth="4"
//                 stroke={colorClass.replace("fill", "stroke")}
//                 fill="none"
//               />
              
//               {/* IML Label */}
//               <rect x="30" y="50" width="40" height="40" rx="2" className="fill-white opacity-40" />
//               <text x="50" y="70" textAnchor="middle" className="text-xs fill-gray-700 font-bold">IML</text>
//             </svg>
//           );
//         } else {
//           // Cup style
//           return (
//             <svg viewBox="0 0 100 150" className="h-full w-full transition-all duration-300">
//               {/* Top */}
//               <ellipse cx="50" cy="30" rx="30" ry="10" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
              
//               {/* Lid Detail */}
//               <ellipse cx="50" cy="30" rx="25" ry="7" className="fill-white opacity-20" />
              
//               {/* Body */}
//               <path 
//                 d={`M25,30 
//                     L30,110 
//                     Q35,120 50,120 
//                     Q65,120 70,110 
//                     L75,30`} 
//                 className={`${colorClass} opacity-80 group-hover:opacity-100`} 
//               />
              
//               {/* Base */}
//               <ellipse cx="50" cy="120" rx="20" ry="5" className={`${colorClass} opacity-90 group-hover:opacity-100`} />
              
//               {/* IML Label */}
//               <rect x="35" y="50" width="30" height="40" rx="2" className="fill-white opacity-40" />
//               <text x="50" y="70" textAnchor="middle" className="text-xs fill-gray-700 font-bold">IML</text>
//             </svg>
//           );
//         }
//       }
//     };
  
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center py-20 px-6">
//         <h2 className="text-4xl font-bold text-gray-800 text-center mt-4">
//           Packaging Solutions
//         </h2>
//         <p className="text-gray-600 mt-6 text-center max-w-2xl">
//           Complete range of packaging solutions including closures, HDPE bottles and jars, and co-polymer containers with in-mold labeling.
//         </p>
  
//         {/* Products Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-12 w-full max-w-6xl">
//           {products.map((product) => {
//             const textColorClass = getTextColorClass(product.color);
            
//             return (
//               <div
//                 key={product.id}
//                 className="rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all duration-300 bg-white transform hover:-translate-y-1 group"
//               >
//                 <div className="relative w-full h-48 mb-4 flex items-center justify-center">
//                   {/* Product SVG */}
//                   {renderProductSVG(product)}
                  
//                   {/* Type Label */}
//                   <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-full px-4 py-2 shadow-md border border-gray-200 group-hover:bg-opacity-100 group-hover:shadow-lg transition-all duration-300">
//                     <span className={`${textColorClass} font-bold text-lg`}>{product.type}</span>
//                   </div>
//                 </div>
                
//                 {/* Additional text below the product */}
//                 <h3 className="font-medium text-gray-700 text-center mt-2">
//                   {product.category}
//                 </h3>
//                 <p className="text-gray-500 text-sm text-center mt-1">
//                   {product.usage}
//                 </p>
                
//                 {/* Material tag */}
//                 <div className="mt-4 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
//                   {product.material}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
        
      
//       </div>
//     );
//   }