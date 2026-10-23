
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ABOUT HERO */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-400">
            About DigitalStudio
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            We Create Digital Experiences
            <span className="text-blue-400">
              {" "}That Drive Growth.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Creative thinking. Smart technology.
            Meaningful digital experiences.
          </p>

          <div className="relative mt-12 overflow-hidden rounded-2xl">
            <Image
              src="/images/home/about.jpg"
              alt="DigitalStudio creative team"
              width={1200}
              height={600}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Turning Creative Ideas Into Digital Success
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              DigitalStudio is a demo creative agency
              focused on designing beautiful websites
              and creating effective digital experiences.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We bring together design, technology and
              strategy to create modern solutions for
              businesses of every size.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/home/hero.jpg"
              alt="Digital creative workspace"
              width={650}
              height={500}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Our Mission & Vision
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-9 shadow-sm">
              <div className="mb-5 text-4xl">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                To create engaging and accessible digital
                solutions that help businesses build a
                stronger online presence.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-9 shadow-sm">
              <div className="mb-5 text-4xl">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                To make creative technology accessible
                and empower businesses through innovative
                digital experiences.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-semibold text-blue-600">
            Our Approach
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Why Choose DigitalStudio?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🎨",
                title: "Creative Design",
                text: "Modern and visually engaging digital experiences.",
              },
              {
                icon: "💻",
                title: "Smart Technology",
                text: "Responsive, scalable and user-friendly websites.",
              },
              {
                icon: "📈",
                title: "Growth Focused",
                text: "Digital solutions designed around business goals.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-blue-700 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let's Build Something Amazing
        </h2>

        <p className="mt-4 text-blue-100">
          Have a project in mind? We'd love to hear from you.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          Contact Us →
        </Link>
      </section>
    </main>
  );
}
