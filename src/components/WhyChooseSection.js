import { FiShield, FiPackage, FiRepeat, FiFeather, FiHeart } from 'react-icons/fi';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FiHeart className="w-12 h-12" />,
      title: "Ethical & Sustainable",
      description: "Feel good about your jewellery, crafted with ethically sourced, diamonds."
    },
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "Authenticity Guaranteed",
      description: "Every diamond is 100% certified, ensuring your peace of mind."
    },
    {
      icon: <FiFeather className="w-12 h-12" />,
      title: "Your Style, Your Way",
      description: "Customize your jewellery to match your unique personality and taste."
    },
    {
      icon: <FiPackage className="w-12 h-12" />,
      title: "Secure & Swift Delivery",
      description: "Enjoy complimentary, insured shipping on every single order."
    },
    {
      icon: <FiRepeat className="w-12 h-12" />,
      title: "Effortless Returns",
      description: "Hassle-free returns and exchanges if you're not completely satisfied."
    }
  ];

  return (
    <section className="py-12 bg-gray-50 rounded-lg mb-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Discover the Brilliance of VajraBox Diamonds
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg cursor-default">
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
