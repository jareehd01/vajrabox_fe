import { FiShield, FiPackage, FiRepeat, FiFeather, FiHeart } from 'react-icons/fi';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <FiHeart className="w-12 h-12" />,
      title: "Conscious Luxury",
      description: "Adorn yourself with brilliance that is ethically sourced and sustainably crafted, for a beauty that shines from within."
    },
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "A Promise of Purity",
      description: "Each diamond is a testament to our commitment to quality, certified and guaranteed to be as flawless as your taste."
    },
    {
      icon: <FiFeather className="w-12 h-12" />,
      title: "Bespoke for You",
      description: "Your desires, meticulously brought to life. Our artisans will craft a piece that is as unique as your story."
    },
    {
      icon: <FiPackage className="w-12 h-12" />,
      title: "White Glove Delivery",
      description: "From our hands to yours, a seamless and secure journey. Your treasure will arrive with the care it deserves."
    },
    {
      icon: <FiRepeat className="w-12 h-12" />,
      title: "Assured Satisfaction",
      description: "Our commitment to you is as enduring as our diamonds. Your complete satisfaction is our promise."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rounded-lg mb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
          The VajraBox Difference: An Unwavering Commitment to Brilliance
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="text-center p-6 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-xl cursor-default">
            <div className="flex justify-center mb-5 text-amber-600">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
