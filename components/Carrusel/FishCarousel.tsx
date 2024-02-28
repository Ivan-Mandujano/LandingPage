// FishCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'; // Importa los estilos de navegación

interface FishCarouselProps {
  images: { id: number; src: string; nombre: string }[];
}

const FishCarousel: React.FC<FishCarouselProps> = ({ images }) => {
  return (
<Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 60, // Aumenta la separación entre las cartas
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 60, // Aumenta la separación entre las cartas
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="max-w-[90%] lg:max-w-[80%]"
            slidesPerView={3} // Ajusta el número de cartas visibles en pantalla completa
            spaceBetween={20} // Aumenta la separación entre las cartas
          >
            {images.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="pr-8 flex flex-col gap-4 mb-8 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <img src={item.src} alt={item.nombre} className="w-full h-full object-cover rounded-xl" />
                  <div className="flex flex-col items-center mt-auto">
                    <h2 className="text-black lg:text-xl">{item.nombre}</h2>
                    <p className="text-gray-400 text-sm lg:text-base">Información adicional</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
  );
};

export default FishCarousel;
