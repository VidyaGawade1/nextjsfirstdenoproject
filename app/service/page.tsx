
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "💻",
    title: "Website Design",
    image: "/images/service/website-design.png",
    imageAlt: "Desktop monitor and tablet displaying responsive website designs",
    description:
      "We build fast, responsive and visually stunning websites that deliver exceptional user experiences.",
    features: [
      "Responsive Design",
      "Business Websites",
      "Modern UI/UX",
    ],
    color: "from-blue-600 to-indigo-700",
  },
  {
    number: "02",
    icon: "📈",
    title: "SEO Optimization",
    image: "/images/service/seo-optimization.png",
    imageAlt: "Laptop showing search results and growth analytics beside a magnifying glass",
    description:
      "Increase your online visibility and reach customers searching for your products and services.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Website Audits",
    ],
    color: "from-emerald-600 to-teal-700",
  },
  {
    number: "03",
    icon: "📱",
    title: "Digital Marketing",
    image: "/images/service/digital-marketing.png",
    imageAlt: "Laptop and smartphone displaying campaign content and audience analytics",
    description:
      "Connect with your audience through targeted campaigns and creative marketing strategies.",
    features: [
      "Social Media Marketing",
      "Paid Advertising",
      "Content Strategy",
    ],
    color: "from-violet-600 to-purple-700",
  },
  {
    number: "04",
    icon: "🎨",
    title: "Brand Identity",
    image: "/images/service/brand-identity.png",
    imageAlt: "Brand stationery, geometric logo studies and warm color swatches",
    description:
      "Give your business a memorable visual identity that builds trust and communicates your values.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
    ],
    color: "from-orange-500 to-rose-600",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Services
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Smart Digital Solutions for
            <span className="text-blue-400">
              {" "}Growing Brands.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            From creative website design to powerful digital
            marketing, we help businesses create meaningful
            digital experiences.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
          >
            Start Your Project →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="font-semibold text-blue-600">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Creative Services
            </h2>
            <p className="mt-4 text-slate-600">
              Everything your business needs to grow online.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1152px) 544px, (min-width: 768px) calc((100vw - 80px) / 2), calc(100vw - 48px)"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <span className="text-sm font-bold text-blue-600">
                    SERVICE {service.number}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <span className="text-blue-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-8 inline-block font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Enquire Now →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            How We Work
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your goals, audience and business requirements.",
              },
              {
                number: "02",
                title: "Create",
                text: "We design and develop solutions tailored to your needs.",
              },
              {
                number: "03",
                title: "Launch",
                text: "We bring your digital experience to life and help it grow.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-slate-100 p-8"
              >
                <span className="text-4xl font-bold text-blue-600">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-700 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s Build Something Great Together.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-blue-100">
          Have an idea for your next digital project?
          We&apos;d love to hear from you.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Get in Touch →
        </Link>
      </section>
    </main>
  );
}
