import TestimonialCard from "../components/elements/TestiCard";

function TestimonialSection() {
  const testimonials = [
    {
      name: "Rina Pratiwi",
      review:
        "Nastar dari Alzam B'Cookies benar-benar enak! Teksturnya lembut dan selai nanasnya terasa segar. Keluarga saya langsung suka sejak gigitan pertama.",
    },
    {
      name: "Sari Wulandari",
      review:
        "Putri saljunya lembut dan langsung lumer di mulut. Taburan gula halusnya pas dan rasanya tidak terlalu manis.",
    },
    {
      name: "Budi Santoso",
      review:
        "Saya sudah coba beberapa kue kering, tapi yang ini salah satu yang paling enak. Rasanya premium dan terasa homemade.",
    },
    {
      name: "Dewi Lestari",
      review:
        "Kuenya fresh dan rasanya konsisten enak. Cocok banget untuk hadiah atau sajian saat hari raya.",
    },
    {
      name: "Maya Putri",
      review:
        "Anak-anak saya paling suka nastarnya. Selainya banyak dan rotinya lembut sekali.",
    },
    {
      name: "Fajar Nugroho",
      review:
        "Kastengelnya favorit saya. Gurih kejunya terasa banget dan bikin nagih.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#5a1a0b] mb-10">
        Customer Testimonials
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} name={item.name} review={item.review} />
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;
