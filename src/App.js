import CurrentDayRateBanner from "./components/CurrentDayRateBanner";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <CurrentDayRateBanner />
      <div className="text-center" style={{ marginLeft: "10px" }}>
        <h1 className="font-bold">Welcome Vajrabox</h1>
      </div>
    </div>
  );
}

export default App;
