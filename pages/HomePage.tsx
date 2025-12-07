import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4 md:px-8 pt-20">
          {/* Glass Card */}
          <div className="w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-12 text-white shadow-2xl animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="aspect-square relative overflow-hidden rounded-2xl group">
                <img 
                  src={IMAGES.plantSquare} 
                  alt="Feature Plant" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">Enjoy <br/>Nature</h1>
                <h2 className="text-xl lg:text-2xl font-medium mb-6 text-gray-200">Plants for you</h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-sm lg:text-base">
                  あなたの家に魔法とユニークさを加えましょう。私たちの珍しい植物は単なる装飾ではなく、インスピレーションと新鮮さの源です。あなたの家を生き生きとしたエネルギーで満たします。
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 border border-white/50 rounded-full hover:bg-white hover:text-primary transition-all font-semibold text-sm">
                    Plant selection test
                  </button>
                  <button className="px-6 py-3 bg-white text-primary rounded-full hover:bg-gray-100 transition-colors font-semibold text-sm">
                    Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        {/* Green Paradise Section */}
        <section className="mb-32">
          <div className="mb-12">
             <p className="text-lg md:text-xl font-semibold tracking-wider text-gray-500 mb-2">YOU GOT A TICKET TO THE</p>
             <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary">GREEN PARADISE CAFE</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
             <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto h-[500px] md:h-[600px] shadow-lg">
                <img src={IMAGES.fiddleLeaf} alt="Fiddle Leaf" className="w-full h-full object-cover" />
             </div>
             
             <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto h-[500px] md:h-[600px] shadow-lg group">
                <img src={IMAGES.handPlant} alt="Hands holding plant" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-secondary/90 backdrop-blur-sm p-6 lg:p-10 rounded-xl text-center shadow-xl">
                    <p className="text-3xl lg:text-4xl font-extrabold leading-tight text-primary">TOUCH<br/>THE<br/>WORLD OF<br/>FLORA</p>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">About Us</span>
              <h3 className="text-3xl lg:text-4xl font-bold leading-snug text-gray-900">
                私たちのエコシステムへようこそ！私たちは、あなたの緑の夢を叶えるお手伝いをするプロフェッショナルチームです。
              </h3>
            </div>
            <div className="flex flex-col justify-between h-full pt-4">
              <p className="text-gray-500 mb-8 leading-relaxed">
                For 10 years, we have been gaining experience and knowledge to grow unique plants just for you. We take care of every order, and yours is no exception.
              </p>
              <div>
                <button className="group inline-flex items-center gap-3 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                  LEARN MORE
                  <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Calathea Orbifolia', desc: 'Our unique plant selection test that works flawlessly.', img: IMAGES.featureTexture },
              { title: 'Ficus Elastica', desc: 'We have collected thousands of articles for your study.', img: IMAGES.featureDark },
              { title: 'Monstera Deliciosa', desc: 'Each plant has its own passport, a new member of the family.', img: IMAGES.featureMonstera },
              { title: 'Nephrolepis Exaltata', desc: 'Our app will make your experience with plants easier.', img: IMAGES.featureDense },
            ].map((item, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 bg-black" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white transform transition-transform">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-300 opacity-80 group-hover:opacity-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="group inline-flex items-center gap-3 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
               PODCAST FOR YOU
               <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                 <ArrowRight className="w-4 h-4" />
               </div>
            </button>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="relative rounded-3xl overflow-hidden h-[450px] flex items-center justify-center text-center px-4">
           <img src={IMAGES.greenhouse} alt="Greenhouse" className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/30"></div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                When plants are<br/>
                <span className="inline-block mt-4 bg-white text-primary px-6 py-2 rounded-lg -rotate-2 transform">not just an object</span>
              </h2>
           </div>
        </section>
      </div>
    </div>
  );
};
