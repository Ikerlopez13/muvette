import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ImageCarousel from "./components/ImageCarousel";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";

export default function Home() {
  // Muvette Air - Secador de Pelo Profesional
  const product = {
    id: "1",
    name: "Muvette Air",
    images: [
      "/Gemini_Generated_Image_h7u7lzh7u7lzh7u7 (1).png", // Secador con todos los accesorios
      "/Gemini_Generated_Image_xlcug7xlcug7xlcu.png", // Modelo rubia con secador
      "/Gemini_Generated_Image_swgmegswgmegswgm.png", // Modelo castaña mostrando resultados
      "/Gemini_Generated_Image_ptzmbeptzmbeptzm.png", // Difusor
      "/Gemini_Generated_Image_f6gixwf6gixwf6gi.png", // Concentrador
      "/Gemini_Generated_Image_bkzt7qbkzt7qbkzt.png", // Secador con modelo
    ],
    rating: 5,
    reviews: 1847,
    price: 59.99,
    originalPrice: 199.99,
    discount: 70,
    benefits: [
      "Professional ionic technology for frizz-free shine",
      "Fast drying with powerful airflow",
      "3 heat & 2 speed settings for all hair types",
      "Lightweight ergonomic design",
    ],
  };

  // Lifestyle images carousel
  const lifestyleImages = [
    "/Gemini_Generated_Image_5dtvtx5dtvtx5dtv.png",
    "/Gemini_Generated_Image_hiegsshiegsshieg.png",
    "/Gemini_Generated_Image_jz5uvujz5uvujz5u.png",
    "/Gemini_Generated_Image_mp3o7fmp3o7fmp3o.png",
    "/Casual_Luxury_Interior.png",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section / Featured Product */}
        <div className="w-full">
          <ProductCard {...product} />
        </div>

        {/* Lifestyle Carousel Section */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real Results, Real Beauty
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how Muvette Air transforms hair styling routines with professional results at home
            </p>
          </div>
          <ImageCarousel images={lifestyleImages} />
        </section>

        {/* Customer Reviews Section */}
        <Reviews />

        {/* Included Accessories Section */}
        <section className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Included Accessories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional styling tools for every hair type and style
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Concentrator Nozzle */}
            <div className="flex flex-col items-center text-center p-6 bg-primary/30 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-square max-w-[300px] mb-6">
                <img
                  src="/Gemini_Generated_Image_f6gixwf6gixwf6gi.png"
                  alt="Concentrator Nozzle"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Concentrator Nozzle</h3>
              <p className="text-gray-700 leading-relaxed">
                Perfect for precision styling and sleek, straight looks. Directs airflow exactly where you need it for professional results.
              </p>
            </div>

            {/* Diffuser */}
            <div className="flex flex-col items-center text-center p-6 bg-primary/30 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-square max-w-[300px] mb-6">
                <img
                  src="/Gemini_Generated_Image_ptzmbeptzmbeptzm.png"
                  alt="Diffuser Attachment"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">Diffuser Attachment</h3>
              <p className="text-gray-700 leading-relaxed">
                Enhances natural curls and waves while reducing frizz. Distributes heat evenly for defined, bouncy curls.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Muvette. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
