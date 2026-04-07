import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/ebd80f18-9305-492b-bab0-8248fbe689bb/files/10707c5d-99c6-4d1a-8987-aac02a08afa5.jpg',
  'https://cdn.poehali.dev/projects/ebd80f18-9305-492b-bab0-8248fbe689bb/files/46f98491-263e-49f1-8a28-1adf78c8ac5d.jpg',
  'https://cdn.poehali.dev/projects/ebd80f18-9305-492b-bab0-8248fbe689bb/files/1d6b967d-8064-4d7b-a779-2315158c0718.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-light tracking-widest text-white/80 uppercase backdrop-blur-sm">
                gracia86.ru
              </span>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-200 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <h1 className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
                  Потолки, которые<br />
                  <span className="font-normal italic">говорят за себя</span>
                </h1>
                <p className="max-w-md text-lg font-light leading-relaxed text-white/75">
                  Устанавливаем натяжные потолки под ключ: матовые, глянцевые, звёздное небо. Замер и монтаж за 1 день.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-400 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+79124125572"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/20"
                >
                  Бесплатный замер
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-3.5 text-sm font-light text-white transition-all hover:border-white/70 hover:bg-white/10"
                >
                  Смотреть работы
                </a>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex gap-8">
                <div>
                  <p className="text-base font-light text-white leading-snug">Нефтеюганск<br/>Сургут · Пыть-Ях</p>
                  <p className="text-sm text-white/50">работаю в городах</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-2xl font-light text-white">14 лет</p>
                  <p className="text-sm text-white/50">на рынке</p>
                </div>
                <div className="w-px bg-white/20" />
                <div>
                  <p className="text-2xl font-light text-white">1 день</p>
                  <p className="text-sm text-white/50">монтаж</p>
                </div>
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-600 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="flex items-center gap-5">
                <a
                  href="https://vk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 transition-colors hover:text-white"
                  aria-label="VKontakte"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </a>
                <a
                  href="tel:+79124125572"
                  className="text-white/70 text-sm font-light tracking-wide transition-colors hover:text-white"
                >
                  8 (912) 412-55-72
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}