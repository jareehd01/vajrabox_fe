import WhyChooseSection from '../components/WhyChooseSection';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Welcome Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to VajraBox</h1>
      </div>

      {/* Why Choose Lab Grown Diamond Jewellery Section */}
      <WhyChooseSection />

      {/* Featured products, etc */}
    </div>
  );
};

export default HomePage;