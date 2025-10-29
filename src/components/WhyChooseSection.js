import { FiTruck, FiRefreshCw, FiAward, FiSettings, FiCreditCard } from 'react-icons/fi';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FiAward className="w-12 h-12" />,
      title: "Certified Diamond Jewellery",
      description: "Our jewellery is 100% certified for authenticity."
    },
    {
      icon: <FiTruck className="w-12 h-12" />,
      title: "Free Insured Shipping",
      description: "Enjoy free shipping with insured delivery."
    },
    {
      icon: <FiRefreshCw className="w-12 h-12" />,
      title: "100% Exchange & Return",
      description: "Return or exchange hassle-free if you change your mind."
    },
    {
      icon: <FiSettings className="w-12 h-12" />,
      title: "Customisable Designs",
      description: "Get your jewellery customised and wear it your way."
    },
    {
      icon: <FiCreditCard className="w-12 h-12" />,
      title: "10 Days Easy Return",
      description: "10-day easy return for a worry-free purchase."
    }
  ];

  return (
    <section className="py-12 bg-gray-50 rounded-lg mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          VajraBox Provides You More Reasons to Choose Lab Grown Diamond Jewellery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4 text-amber-600">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
