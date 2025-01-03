"use client"
import { useRouter } from 'next/navigation'
import Footer from "@/components/Footer"

const tiers = [
  {
    name: 'Bridal Makeup',
    id: 'tier-bridal',
    price: '₹15,000',
    description: 'Complete bridal makeup package for your special day.',
    features: [
      'Premium HD Makeup',
      'Professional Hair Styling', 
      'Luxury False Lashes',
      'Personalized Draping Assistance',
      'Premium Touch-up Kit'
    ],
    mostPopular: false,
  },
  {
    name: 'Party Makeup',
    id: 'tier-party',
    price: '₹5,000',
    description: 'Glamorous makeup for special events and occasions.',
    features: [
      'Professional HD Makeup',
      'Elegant Hair Styling',
      'Quality False Lashes', 
      'Long-lasting Formula (4-5 hours)'
    ],
    mostPopular: false,
  },
  {
    name: 'Engagement',
    id: 'tier-engagement',
    price: '₹8,000',
    description: 'Exquisite makeup for your engagement ceremony.',
    features: [
      'Premium HD Makeup',
      'Signature Hair Styling',
      'Luxury False Lashes',
      'Professional Touch-up Kit',
      'Complimentary Trial Session'
    ],
    mostPopular: false,
  },
  {
    name: 'Corporate',
    id: 'tier-corporate',
    price: '₹3,000',
    description: 'Polished makeup for business professionals.',
    features: [
      'Natural HD Makeup',
      'Professional Hair Styling',
      'Premium Long-lasting Products',
      'Express Service'
    ],
    mostPopular: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Services() {
  const router = useRouter()

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold sm:mt-0 -mt-8 text-[#8e6c90] mb-4">Our Services</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience luxury beauty services tailored to your unique style and occasion
          </p>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-10 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'ring-2 ring-[#8e6c90] shadow-xl scale-105' : 'ring-1 ring-gray-200 hover:ring-2 hover:ring-[#8e6c90] hover:shadow-xl hover:scale-105',
                'rounded-2xl p-8 bg-[#f3e5f5] transition-all duration-300'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? 'text-[#8e6c90]' : 'text-[#8e6c90]',
                  'text-2xl font-semibold tracking-tight'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-[#8e6c90]">
                  {tier.price}
                </span>
              </p>
              <button
                onClick={() => router.push('/contact')}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-[#8e6c90] text-white shadow-sm hover:bg-[#7b5c7d]'
                    : 'text-[#8e6c90] ring-1 ring-inset ring-[#8e6c90] hover:ring-[#7b5c7d] hover:bg-[#f3e5f5]',
                  'mt-6 block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all duration-200'
                )}
              >
                Book Appointment
              </button>
              <ul role="list" className="mt-8 space-y-4 text-base text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0 text-[#8e6c90]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
