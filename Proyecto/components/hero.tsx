import VideoThumb from '#/hero-image.png'
import ModalVideo from '@/components/modal-video'
import Banner from "#/banner.png"
import Image from 'next/image'

export default function Hero() {

  
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="relative h-screen overflow-hidden">

{/* Hero content */}
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
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Acuario <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Keolmar</span></h1>
      <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150"></p>
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
    </div>

  </div>
</div>

</div>
    </section>
  )
}