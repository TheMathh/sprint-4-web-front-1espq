function GalleryItem({ imagem, alt, legenda }) {
  return (
    <figure className="overflow-hidden rounded-2xl border-[1.5px] border-[#f0f0f0] bg-white">
      <img
        src={imagem}
        alt={alt}
        className="block aspect-[16/10] w-full object-cover sm:aspect-[3/4]"
      />
      <figcaption className="py-2.5 text-center text-[0.82rem] text-[#6b7280]">
        {legenda}
      </figcaption>
    </figure>
  )
}

export default GalleryItem