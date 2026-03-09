function TestimonialCard({ name, review }) {
  return (
    <div className="bg-white border rounded-xl p-6 max-w-sm">
      <p className="text-gray-600 italic">
        "{review}"
      </p>

      <h4 className="mt-4 font-semibold text-[#5a1a0b]">
        {name}
      </h4>
    </div>
  );
}

export default TestimonialCard;