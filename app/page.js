import Footer from '@/components/Footer';

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander1',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander2',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander3',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander4',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander5',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander6',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander7',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander8',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander9',
      imageUrl: 'https://placehold.co/256x256',
    },
  },
  // More testimonials...
]

export default function Home() {
  return (
    <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1920x1080" 
            alt="Makeup artist at work" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Transform Your Look
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience luxury beauty services tailored just for you. Professional makeup artistry for 
            weddings, special events, photoshoots and more.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#8e6c90] hover:bg-[#7c5c7e] text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </a>
            <a 
              href="/gallery" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-[#8e6c90]"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-[#8e6c90]">Our Services</h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-4xl font-semibold tracking-tight text-[#8e6c90] sm:text-5xl">
            Professional Makeup Services
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8e6c90] to-[#7c5c7e] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-white">💄</span>
                  </div>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    Bridal Makeup
                  </p>
                  <p className="mt-2 mb-2 max-w-lg text-sm/6 text-gray-600 mx-auto">
                    Make your wedding day unforgettable with our luxurious bridal makeup services. Includes consultation and trial session.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size]">
                  <img
                    className="size-full object-cover"
                    src="https://placehold.co/800x600"
                    alt="Bridal Makeup"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8e6c90] to-[#7c5c7e] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-white">✨</span>
                  </div>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Special Events</p>
                  <p className="mt-2 mb-2 max-w-lg text-sm/6 text-gray-600 mx-auto">
                    Stand out at any occasion with our professional makeup services. Perfect for parties, galas, and celebrations.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8e6c90] to-[#7c5c7e] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-white">📸</span>
                  </div>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">Photo Shoots</p>
                  <p className="mt-2 mb-2 max-w-lg text-sm/6 text-gray-600 mx-auto">
                    Camera-ready makeup that ensures you look flawless in every shot. Perfect for professional and personal photoshoots.
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8e6c90] to-[#7c5c7e] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-white">💅</span>
                  </div>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                    Makeup Classes
                  </p>
                  <p className="mt-2 mb-2 max-w-lg text-sm/6 text-gray-600 mx-auto">
                    Learn professional makeup techniques in our hands-on classes. Perfect for beginners and intermediate makeup enthusiasts.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <img
                    className="size-full object-cover"
                    src="https://placehold.co/800x600"
                    alt="Makeup Classes"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
        <div className="md:w-1/2">
          <div className="relative">
            <img 
              src="https://placehold.co/800x400" 
              alt="Makeup tools and products" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <p className="text-lg font-semibold text-[#8e6c90]">10+ Years Experience</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl text-[#8e6c90] font-bold mb-6">Elevate Your Beauty</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            With over a decade of experience in the beauty industry, we bring expertise and artistry to every client. 
            Our team of professional makeup artists uses premium, cruelty-free products and advanced techniques to create 
            stunning looks that enhance your natural beauty.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xl text-[#8e6c90] font-semibold mb-2">Premium Products</h4>
              <p className="text-gray-600">Only the finest beauty brands for flawless results</p>
            </div>
            <div>
              <h4 className="text-xl text-[#8e6c90] font-semibold mb-2">Custom Looks</h4>
              <p className="text-gray-600">Personalized makeup to match your style</p>
            </div>
          </div>
          <a 
            href="/services" 
            className="inline-flex items-center text-[#8e6c90] font-semibold hover:text-[#7c5c7e] transition duration-300 bg-[#8e6c90]/10 px-4 py-2 rounded-lg hover:bg-[#8e6c90]/20"
          >
            Explore our services 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base/7 font-semibold text-[#8e6c90]">Testimonials</h2>
            <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-[#8e6c90] sm:text-5xl">
              We have worked with thousands of amazing people
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm/6">
                    <blockquote className="text-gray-900">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                        <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
