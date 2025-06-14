import { useEffect, useState } from "react";
import { GOLD_RATE_API, GOLD_RATE_API_TOKEN } from "../utils/constants";

const CurrentDayRateBanner = () => {
  const [goldRateData, setGoldRateData] = useState({
    timestamp: 1747774625,
    metal: "XAU",
    currency: "INR",
    exchange: "IDC",
    symbol: "FX_IDC:XAUINR",
    prev_close_price: 276120.9,
    open_price: 275497,
    low_price: 273700.7,
    high_price: 281894.4,
    open_time: 1747699200,
    price: 281430,
    ch: 5309.1,
    chp: 1.92,
    ask: 281440,
    bid: 281430,
    price_gram_24k: 9048.1846,
    price_gram_22k: 8294.1692,
    price_gram_21k: 7917.1615,
    price_gram_20k: 7540.1538,
    price_gram_18k: 6786.1385,
    price_gram_16k: 6032.1231,
    price_gram_14k: 5278.1077,
    price_gram_10k: 3770.0769,
  });
  useEffect(() => {
    getLiveGoldRate();
  }, []);

  const getLiveGoldRate = async () => {
    // setGoldRateData(data);
    // try {
    //     const response = await fetch(GOLD_RATE_API, {
    //         method: "GET",
    //         headers: {
    //             "x-access-token": GOLD_RATE_API_TOKEN
    //         }
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     // Handle the data as needed
    // } catch (error) {
    //     console.error("Error fetching gold rate:", error);
    // }
  };

  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-500 h-8 flex items-center shadow-md fixed top-0 w-full z-50 overflow-hidden">
      <div className="whitespace-nowrap flex animate-marquee w-max">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="flex space-x-6 px-6 text-amber-50 font-medium tracking-wider"
          >
            <span className="inline-flex items-center">
              LIVE GOLD RATE: ₹{goldRateData.price_gram_24k}/g (24K)
              <span className="mx-4">•</span>
              {goldRateData.chp >= 0 ? "↑" : "↓"} {Math.abs(goldRateData.chp)}%
              <span className="mx-4">•</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentDayRateBanner;
