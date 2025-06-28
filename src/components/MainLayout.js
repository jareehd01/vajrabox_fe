import { Outlet } from "react-router-dom";
import CurrentDayRateBanner from "./CurrentDayRateBanner";
import NavigationBar from "./NavigationBar";

const MainLayout = () => {
  return (
    <div>
      <CurrentDayRateBanner />
      <NavigationBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;