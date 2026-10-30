function PhoneMockup({ src, alt, className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-[32px] border-2 border-[#333] bg-[#111] shadow-[0_30px_80px_rgba(0,0,0,0.35)] ${className}`}
    >
      <img src={src} alt={alt} className="block w-full object-cover" />
    </div>
  )
}

export default PhoneMockup