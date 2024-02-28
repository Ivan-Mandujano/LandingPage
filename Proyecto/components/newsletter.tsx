export default function Newsletter() {

  return (
    
    <div className="relative h-96 text-center p-10 pb-20">
      <h1 className="h1 mb-4 ">Encuentranos en</h1>

      {/* Mapa de Google Maps embebido en un iframe */}
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.36734344319387!2d-103.46087643811111!3d20.6338496151728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428abf2ce6261ed%3A0x9d945cf0254ea791!2sAcuario%20keolmar!5e0!3m2!1ses!2smx!4v1709086881750!5m2!1ses!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};