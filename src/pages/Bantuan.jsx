import React, { useState } from "react";
import faqImage from "../components/assets/bantuan.jpg";

const Bantuan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      pertanyaan: "Apakah cookies dibuat setiap hari?",
      jawaban:
        "Ya, cookies kami dibuat secara homemade dengan bahan berkualitas dan dipanggang secara berkala untuk menjaga kesegaran dan rasa terbaik.",
    },
    {
      pertanyaan: "Berapa lama cookies dapat bertahan?",
      jawaban:
        "Jika disimpan dalam wadah tertutup di tempat yang kering dan sejuk, cookies dapat bertahan sekitar 2–3 minggu tanpa mengurangi kualitas rasa.",
    },
    {
      pertanyaan: "Apakah bisa memesan dalam jumlah banyak?",
      jawaban:
        "Tentu saja. Kami menerima pemesanan dalam jumlah besar untuk acara, hampers, atau kebutuhan khusus lainnya.",
    },
    {
      pertanyaan: "Apakah tersedia pilihan kemasan untuk hadiah?",
      jawaban:
        "Ya, kami menyediakan beberapa pilihan kemasan yang cocok untuk hadiah, hampers, atau acara spesial.",
    },
    {
      pertanyaan: "Bagaimana cara melakukan pemesanan?",
      jawaban:
        "Pemesanan dapat dilakukan dengan menghubungi kami melalui WhatsApp atau media sosial yang tersedia di website ini.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-2 w-full min-h-[calc(100vh-60px)] flex flex-col items-center px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-4xl font-bold mt-16 mb-6 mr-0 lg:mr-24 w-full sm:w-4/5 text-left">
        Bantuan
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 w-full sm:w-4/5 max-w-[1800px]">
        <div className="flex justify-center items-start lg:w-2/5 w-full">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="w-full max-w mr-4 lg:mr-24"
          />
        </div>
        <div className="flex flex-col lg:w-3/5 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-300 p-4 mb-2 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center font-semibold text-base sm:text-lg">
                {faq.pertanyaan}
                <button className="text-[#7a0000] text-xl font-bold ml-4">
                  {openIndex === index ? "−" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm sm:text-base pl-2 leading-relaxed">
                  {faq.jawaban}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bantuan;
