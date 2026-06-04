"use client";

import Image from "next/image";

const LOGOS = [
  { name: "Axis Bank",    src: "/logos/axis-bank.png"    },
  { name: "HDFC Bank",    src: "/logos/hdfc-bank.png"    },
  { name: "ICICI Bank",   src: "/logos/icici-bank.png"   },
  { name: "SBI",          src: "/logos/sbi.png"          },
  { name: "Tata",         src: "/logos/tata.png"         },
  { name: "Mahindra",     src: "/logos/mahindra.png"     },
  { name: "Godrej",       src: "/logos/godrej.png"       },
  { name: "Aditya Birla", src: "/logos/aditya-birla.png" },
  { name: "TVS",          src: "/logos/tvs.png"          },
  { name: "Swiggy",       src: "/logos/swiggy.png"       },
  { name: "Titan",        src: "/logos/titan.png"        },
  { name: "L&T Finance",  src: "/logos/lt-finance.png"   },
  { name: "Canara Bank",  src: "/logos/canara-bank.png"  },
  { name: "Max Life",     src: "/logos/max-life.png"     },
];

const STRIP = [...LOGOS, ...LOGOS];

export function ClientLogos() {
  return (
    <section className="section-white py-20 border-y border-[#C8D6E5]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8899AA] mb-3">
          Trusted by India&apos;s largest enterprises
        </p>
        <p className="font-display text-3xl lg:text-4xl text-[#1A1A1A]">
          Every 3 out of 5 enterprise networks in India<br className="hidden lg:block" /> runs on Lavelle SD-WAN
        </p>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

        <div className="flex items-center" style={{ animation: "marquee 40s linear infinite" }}>
          {STRIP.map((logo, i) => (
            <div
              key={`${logo.src}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-10 opacity-40 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain max-w-[110px]"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
