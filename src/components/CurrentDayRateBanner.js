import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {
  GOLD_RATE_API,
  GOLD_RATE_API_TOKEN,
  GOLD_CARAT_HALLMARK_MAPPING,
} from "../utils/constants";

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
    // Your API call implementation
  };

  return (
    <div className="bg-emerald-950 h-8 flex items-center shadow-md top-0 w-full z-50 overflow-hidden">
      <Marquee
        className="w-full"
        speed={50}
        gradient={false}
        pauseOnHover={true}
        loop={0}
      >
        <div className="flex space-x-12 px-6 font-small tracking-wider">
          {[
            { carat: "10K", value: goldRateData.price_gram_10k },
            { carat: "14K", value: goldRateData.price_gram_14k },
            { carat: "16K", value: goldRateData.price_gram_16k },
            { carat: "18K", value: goldRateData.price_gram_18k },
            { carat: "22K", value: goldRateData.price_gram_22k },
            { carat: "24K", value: goldRateData.price_gram_24k },
          ].map(({ carat, value }) => {
            const hallmark = GOLD_CARAT_HALLMARK_MAPPING[carat];
            return (
              <span 
                key={carat} 
                className="inline-flex items-center px-2 text-sm font-medium"
                style={{
                  background: "linear-gradient(90deg, #c19a42, #edb125 15%, #c19a42 35%, #faf5b7 50%, #c19a42 65%, #edb125 85%, #c19a42)",
                  backgroundSize: "200% auto",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  animation: "shine 3s linear infinite",
                }}
              >
                • {carat.toUpperCase()} Gold ({hallmark}) : ₹
                {value
                  ? value.toLocaleString("en-IN", { maximumFractionDigits: 0 })
                  : "-"}{" "}
                per gram
              </span>
            );
          })}
        </div>
      </Marquee>
      
      {/* Add the animation keyframes */}
      <style jsx>{`
        @keyframes shine {
          to {
            background-position: 100% center;
          }
        }
      `}</style>
    </div>
  );
};

export default CurrentDayRateBanner;