import GalleryItem from './GalleryItem'
import SectionTitle from './SectionTitle'
import { galeria } from '../data/galeria'

function Galeria() {
  return (
    <section
      id="galeria"
      className="relative z-0 overflow-hidden bg-[#fafafa] px-5 py-[60px] sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]"
    >
      <SectionTitle
        titulo="GALERIA"
        subtitulo="Um pouco de como a solução se parece na prática."
      />

      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galeria.map((item) => (
          <GalleryItem key={item.legenda} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Galeria