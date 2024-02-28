import Logo from './logo'
import Banner from "#/footer.png"

export default function Footer() {
  return (
    <footer>
<div className="relative w-full h-screen overflow-hidden">

{/* Hero content */}
<div className="absolute inset-0 flex items-center justify-center">

  {/* Hero image */}
  <img
    src={Banner.src}
    alt="banner"
    className="w-full h-full object-cover object-center"
  />

  {/* Texto centrado */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    <h1 className="pb-5 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out">Acuario <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Keolmar</span></h1>
    <p className="p-5text-xl text-white" data-aos="zoom-y-out" data-aos-delay="150">Descubre la belleza y diversidad de nuestros peces de ornato.
    ¡Visítanos hoy para explorar nuestro catálogo completo!
</p>
    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
  </div>

</div>
</div>
    </footer>
  )
}
