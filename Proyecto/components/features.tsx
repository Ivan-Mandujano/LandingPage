'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import { motion, AnimatePresence } from 'framer-motion';
import FishCarousel from './Carrusel/FishCarousel';
import pez from '#/pez1.jpg';

import angel from '#/angel.jpg';
import carpa from '#/carpa.jpg';
import cebra from '#/cebra.jpg';
import guppy from '#/guppy.jpg';
import japones from '#/japones.jpg';
import molly from '#/molly.jpg';
import monja from '#/monja.jpg';
import sumatrano from '#/sumatrano.jpg';

import acondicionador from '#/acondicionador.jpg';
import filtro from '#/filtro.jpg';
import grava from '#/grava.jpg';
import comida from '#/comida.jpg';
import test from '#/test.jpg';
import bomba from '#/bomba.jpg';

import fondo1 from '#/fondo1.png'
import fondo2 from '#/fondo2.png'
import fondo3 from '#/fondo3.png'







export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  const images = [
    { id: 1, src: angel.src, nombre: 'Pez Ángel', descripcion: 'Un hermoso pez con aletas alargadas y colores vibrantes.' },
    { id: 2, src: carpa.src, nombre: 'Pez Carpa', descripcion: 'Una variedad de pez resistente y colorida.' },
    { id: 3, src: cebra.src, nombre: 'Pez Cebra', descripcion: 'Caracterizado por sus rayas distintivas y colores llamativos.' },
    { id: 4, src: guppy.src, nombre: 'Pez Guppy', descripcion: 'Conocido por su reproducción prolífica y variados colores.' },
    { id: 5, src: japones.src, nombre: 'Pez Japonés', descripcion: 'Un pez ornamental apreciado por su belleza única.' },
    { id: 6, src: molly.src, nombre: 'Pez Molly', descripcion: 'Un pez de agua dulce con aletas vistosas y colores vibrantes.' },
    { id: 7, src: monja.src, nombre: 'Pez Monja', descripcion: 'Caracterizado por su forma distintiva y comportamiento pacífico.' },
    { id: 8, src: sumatrano.src, nombre: 'Pez Sumatrano', descripcion: 'Originario de Sumatra, este pez es pequeño y activo.' },
  ];
  const products = [
    { id: 1, name: 'Comida para peces tropicales', price: '$9.99', image: comida },
    { id: 2, name: 'Grava decorativa para acuario', price: '$14.99', image: grava },
    { id: 3, name: 'Filtro de acuario pequeño', price: '$29.99', image: filtro },
    { id: 4, name: 'Acondicionador de agua', price: '$7.99', image: acondicionador },
    { id: 5, name: 'Kit de prueba de agua', price: '$19.99', image: test },
    { id: 6, name: 'Bomba de aire para acuario', price: '$22.99', image: bomba },
  ];
  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-4">Nuestro catálogo</h1>
            <p className="text-xl text-gray-600">Contamos con una gran variedad de peces de ornato</p>
          </div>
          <div>
          <FishCarousel images={images} />
        </div>
        <div className="max-w-3xl mx-auto text-center pb-8">
            <h1 className="h1 mb-4 pt-10">Conoce nuestros productos</h1>
            <p className="text-xl text-gray-600">Contamos con una gran variedad de peces de ornato</p>
          </div>
          {/* Section content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-20">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative w-full h-36 md:h-48 overflow-hidden rounded-t-lg">
            {product.image ? (
              <img src={product.image.src} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-300">Imagen no disponible</div>
            )}
          </div>
          <div className="p-4">
            <h2 className="text-lg md:text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 text-sm">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Ven a conocernos!</h3>
                <p className="text-xl text-gray-600">Descubre la magia de nuestro acuario. Encontrarás una amplia selección de peces exóticos y todo lo que necesitas para crear tu propio acuario en casa. ¡Te invitamos a sumergirte en el fascinante mundo acuático con nosotros!</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Contamos con buenas instalaciones</div>
                    <div className="text-gray-600">Una gran variedad de peces de ornato</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Explora Nuestra Colección de Accesorios</div>
                    <div className="text-gray-600">Sumérgete en nuestra estantería repleta de todo lo que necesitas para cuidar y embellecer tu acuario.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Peces para Todos los Gustos</div>
                    <div className="text-gray-600">Desde los vibrantes colores de los peces tropicales hasta la serenidad de los peces de agua fría, ofrecemos opciones para todos los gustos y niveles de experiencia. </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z" fill="#191919" fillRule="nonzero" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <img className="md:max-w-none mx-auto rounded" src={fondo3.src} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <img className="md:max-w-none mx-auto rounded" src={fondo2.src} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <img className="md:max-w-none mx-auto rounded" src={fondo1.src} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}