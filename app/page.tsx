
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Design",
    image: "/images/home/web-design.jpg",
    description: "Beautiful, responsive websites for modern businesses.",
  },
  {
    title: "SEO Optimization",
    image: "/images/home/seo.jpg",
    description: "Improve online visibility and reach more customers.",
  },
  {
    title: "Digital Marketing",
    image: "/images/home/marketing.jpg",
    description: "Creative campaigns that help brands grow.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-widest text-blue-400">
              Creative Digital Agency
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              We Build Digital Experiences That Matter.
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Modern websites, creative strategies and digital
              solutions to grow your business.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Explore Services
            </Link>
          </div>

          <Image
           src="/images/home/hero.png"
            alt="Digital creative workspace"
            width={650}
            height={500}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to grow online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={350}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Ready to Start Your Project?
        </h2>
        <p className="mt-4 text-gray-600">
          Let's build something great together.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
