const clients = [
    {
      name: 'Britannia Industries Limited',
      logo: 'https://res.cloudinary.com/dzfpuadsb/image/upload/v1744542110/britannia_emipuy.png',
    }, {
      name: 'Tropolite Foods Pvt. Ltd.',
      logo: 'https://res.cloudinary.com/dzfpuadsb/image/upload/v1744542111/tropolite_azptfr.png',
    },
    {
      name: 'Nova Dairy Products Limited',
      logo: 'https://res.cloudinary.com/dzfpuadsb/image/upload/v1744542110/nova_xwzcs3.png',
    }
  ];
  
  const TrustedClients = () => {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Trusted Partners</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proudly serving industry leaders with quality plastic solutions since 1997
            </p>
          </div>
          
          <div className="relative overflow-hidden py-10">
            {/* Subtle gradient overlays for scrolling effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
                {clients.map((client) => (
                  <div 
                    key={client.name} 
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="h-24 flex items-center justify-center mb-4 w-full">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{client.name}</span>
                    <div className="mt-3 h-1 w-12 bg-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* <div className="text-center mt-12">
            <p className="text-gray-500 text-sm italic">Join our growing list of satisfied clients</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
              Become a Partner
            </button>
          </div> */}

        </div>
      </section>
    );
  };
  
  export default TrustedClients;
