"use client";

import { useState } from "react";
import React from "react";

const TankCalculator = () => {
  const [type, setType] = useState("home");
  const [people, setPeople] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [result, setResult] = useState(null);

  const companyTanks = {
    school: {
      tank: "5000 لتر",
      text: "مناسب للمدارس الصغيرة والمتوسطة",
    },
    hospital: {
      tank: "10000 لتر",
      text: "مناسب للمستشفيات والمراكز الطبية",
    },
    factory: {
      tank: "20000 لتر",
      text: "مناسب للمصانع والمنشآت الصناعية",
    },
    restaurant: {
      tank: "3000 لتر",
      text: "مناسب للمطاعم والكافيهات",
    },
    hotel: {
      tank: "15000 لتر",
      text: "مناسب للفنادق والمنتجعات",
    },
    mosque: {
      tank: "2000 لتر",
      text: "مناسب للمساجد",
    },
    company: {
      tank: "3000 لتر",
      text: "مناسب للشركات والمكاتب",
    },
    farm: {
      tank: "10000 لتر",
      text: "مناسب للمزارع",
    },
  };

  const calculateTank = () => {
    if (type === "home") {
      const num = Number(people);

      if (!num || num <= 0) {
        setResult({
          tank: "",
          text: "من فضلك أدخل عدد أفراد صحيح.",
        });
        return;
      }

      if (num <= 3) {
        setResult({
          tank: "500 لتر",
          text: "مناسب لشقة صغيرة أو أسرة حتى 3 أفراد.",
        });
      } else if (num <= 6) {
        setResult({
          tank: "1000 لتر",
          text: "مناسب لأسرة من 4 إلى 6 أفراد.",
        });
      } else if (num <= 8) {
        setResult({
          tank: "1500 لتر",
          text: "مناسب للمنازل الكبيرة.",
        });
      } else if (num <= 12) {
        setResult({
          tank: "2000 لتر",
          text: "مناسب للفلل أو أكثر من أسرة.",
        });
      } else {
        setResult({
          tank: "3000 لتر أو أكبر",
          text: "ننصح بالتواصل معنا لتحديد السعة المناسبة.",
        });
      }
    } else {
      if (!companyType) {
        setResult({
          tank: "",
          text: "من فضلك اختر نوع المؤسسة.",
        });
        return;
      }

      setResult(companyTanks[companyType]);
    }
  };

  const resetAndSetType = (newType) => {
    setType(newType);
    setResult(null);
    setPeople("");
    setCompanyType("");
  };

  return (
    <section className="py-20 bg-slate-100">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
        <h2 className="text-center text-4xl font-bold text-[#1d2b4d]">
          اختر الخزان المناسب لك
        </h2>

        <p className="mt-3 text-center text-gray-600">
          أدخل عدد الأشخاص أو المستخدمين وسنرشح لك السعة المناسبة.
        </p>

        {/* نوع الاستخدام */}
        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => resetAndSetType("home")}
            className={`rounded-full px-6 py-3 font-bold transition ${
              type === "home" ? "bg-[#00a0dc] text-white" : "bg-gray-200"
            }`}
          >
            🏠 منزل
          </button>

          <button
            onClick={() => resetAndSetType("company")}
            className={`rounded-full px-6 py-3 font-bold transition ${
              type === "company" ? "bg-[#00a0dc] text-white" : "bg-gray-200"
            }`}
          >
            🏢 مؤسسة
          </button>
        </div>

        {/* الإدخال */}
        {type === "home" ? (
          <input
            type="number"
            placeholder="عدد أفراد الأسرة"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="mt-8 w-full rounded-xl border border-gray-300 p-4 text-center text-xl outline-none transition focus:border-[#00a0dc]"
          />
        ) : (
          <select
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
            className="mt-8 w-full rounded-xl border border-gray-300 p-4 text-center text-xl outline-none transition focus:border-[#00a0dc]"
          >
            <option value="">اختر نوع المؤسسة</option>
            <option value="school">🏫 مدرسة</option>
            <option value="hospital">🏥 مستشفى</option>
            <option value="factory">🏭 مصنع</option>
            <option value="restaurant">🍽️ مطعم</option>
            <option value="hotel">🏨 فندق</option>
            <option value="mosque">🕌 مسجد</option>
            <option value="company">🏢 شركة</option>
            <option value="farm">🌾 مزرعة</option>
          </select>
        )}

        <button
          onClick={calculateTank}
          className="mt-6 w-full rounded-xl bg-[#1d2b4d] py-4 text-xl font-bold text-white transition hover:bg-[#00a0dc]"
        >
          🔍 اعرف الخزان المناسب
        </button>

        {result && (
          <div className="mt-10 rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-lg">
            {result.tank ? (
              <>
                <div className="flex justify-center">
                  <span className="rounded-full bg-green-600 px-5 py-2 text-white font-bold">
                    ✔ تم العثور على الخزان المناسب
                  </span>
                </div>

                <h3 className="mt-6 text-center text-4xl font-extrabold text-[#1d2b4d]">
                  {result.tank}
                </h3>

                <p className="mt-4 text-center text-lg text-gray-600">
                  {result.text}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/201027565956?text=${encodeURIComponent(
                      `السلام عليكم، أرغب في معرفة سعر خزان ${result.tank}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700"
                  >
                    💰 عرض السعر
                  </a>

                  <a
                    href="/contact"
                    className="rounded-full bg-[#1d2b4d] px-8 py-3 font-bold text-white transition hover:bg-[#00a0dc]"
                  >
                    📞 تواصل معنا
                  </a>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-xl font-bold text-red-600">{result.text}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TankCalculator;
