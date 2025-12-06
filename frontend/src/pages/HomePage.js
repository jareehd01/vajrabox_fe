import MainBanner from '../components/MainBanner';
import WhyChooseSection from '../components/WhyChooseSection';
import ShopByOccasion from '../components/ShopByOccasion';
import ShopByCategory from '../components/ShopByCategory';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <div className="w-[90%] mx-auto px-2">
        <ShopByCategory />
        <ShopByOccasion />
        <WhyChooseSection />
      </div>
    </div>
  );
};

export default HomePage;
