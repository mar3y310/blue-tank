"use client";

import React from "react";

interface TankRow {
  opening: string; // قطر فتحة الخزان
  height: string; // ارتفاع الخزان
  outerDiameter: string; // القطر الخارجي
  capacity: string; // السعة
}
const tankData: TankRow[] = [
  { opening: "45 سم", height: "92 سم", outerDiameter: "86 سم", capacity: "500 لتر" },
  { opening: "45 سم", height: "110 سم", outerDiameter: "97 سم", capacity: "750 لتر" },
  { opening: "45 سم", height: "126 سم", outerDiameter: "102 سم", capacity: "1000 لتر" },
  { opening: "45 سم", height: "142 سم", outerDiameter: "116 سم", capacity: "1500 لتر" },
  { opening: "45 سم", height: "152 سم", outerDiameter: "120 سم", capacity: "2000 لتر" },
  { opening: "45 سم", height: "175 سم", outerDiameter: "150 سم", capacity: "3000 لتر" },
  { opening: "45 سم", height: "205 سم", outerDiameter: "180 سم", capacity: "5000 لتر" },
  { opening: "45 سم", height: "275 سم", outerDiameter: "185 سم", capacity: "7500 لتر" },
  { opening: "45 سم", height: "280 سم", outerDiameter: "215 سم", capacity: "10000 لتر" },
  { opening: "45 سم", height: "285 سم", outerDiameter: "260 سم", capacity: "15000 لتر" },
  { opening: "45 سم", height: "385 سم", outerDiameter: "260 سم", capacity: "20000 لتر" },
];
const Tanksise = () => {
  return (
    <div
      dir="rtl"
      className="w-full min-h-screen flex items-center justify-center p-3 sm:p-6"
      style={{
        background:
          "linear-gradient(135deg, #eaf6fb 0%, #dcf0f7 50%, #eaf6fb 100%)",
      }}
    >
      <div className="w-full max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl bg-white">
        {/* Title */}
        <div
          className="py-4 sm:py-6 text-center px-2"
          style={{
            background: "linear-gradient(90deg, #0a3d91 0%, #145bb8 50%, #0a3d91 100%)",
          }}
        >
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
            الخزانات الرأسية
          </h1>
        </div>

        {/* Table wrapper: allows horizontal scroll on small screens instead of squeezing columns */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-center">
            <thead>
              <tr style={{ backgroundColor: "#0a2a5e" }}>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-white font-bold text-sm sm:text-lg border-l border-white/10 whitespace-nowrap">
                  قُطر فتحة الخزان
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-white font-bold text-sm sm:text-lg border-l border-white/10 whitespace-nowrap">
                  ارتفاع الخزان (سم)
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-white font-bold text-sm sm:text-lg border-l border-white/10 whitespace-nowrap">
                  القطر الخارجي (سم)
                </th>
                <th className="py-3 sm:py-4 px-2 sm:px-4 text-white font-bold text-sm sm:text-lg whitespace-nowrap">
                  السعة
                </th>
              </tr>
            </thead>
            <tbody>
              {tankData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-sky-50"}
                >
                  <td className="py-2.5 sm:py-3 px-2 sm:px-4 text-blue-900 font-semibold text-sm sm:text-lg border-t border-sky-100 whitespace-nowrap">
                    {row.opening}
                  </td>
                  <td className="py-2.5 sm:py-3 px-2 sm:px-4 text-blue-900 font-semibold text-sm sm:text-lg border-t border-sky-100 whitespace-nowrap">
                    {row.height}
                  </td>
                  <td className="py-2.5 sm:py-3 px-2 sm:px-4 text-blue-900 font-semibold text-sm sm:text-lg border-t border-sky-100 whitespace-nowrap">
                    {row.outerDiameter}
                  </td>
                  <td className="py-2.5 sm:py-3 px-2 sm:px-4 text-blue-700 font-extrabold text-sm sm:text-lg border-t border-sky-100 whitespace-nowrap">
                    {row.capacity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tanksise