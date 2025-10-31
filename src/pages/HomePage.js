import MainBanner from '../components/MainBanner';
import WhyChooseSection from '../components/WhyChooseSection';
import ShopByOccasion from '../components/ShopByOccasion';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to VajraBox</h1>
        </div>

        <ShopByOccasion />

        {/* Why Choose Lab Grown Diamond Jewellery Section */}
        <WhyChooseSection />

        {/* Featured products, etc */}
      </div>
    </div>
  );
};

export default HomePage;