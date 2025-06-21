import { Outlet } from "react-router-dom";
import CurrentDayRateBanner from "./CurrentDayRateBanner";
import NavigationBar from "./NavigationBar";
import MenuBar from "./MenuBar";

const MainLayout = () => {
  return (
    <div>
      <CurrentDayRateBanner />
      <NavigationBar />
      <MenuBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
