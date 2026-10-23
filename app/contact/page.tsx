"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-slate-950 px-6 py-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>

        <p className="mt-5 text-lg text-slate-300">
          Let&apos;s build something amazing together.
        </p>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">
            Send Us a Message
          </h2>

          <div role="status" aria-live="polite" aria-atomic="true">
            {submitted && (
              <p className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 font-medium text-green-800">
                Thank you for getting in touch!
              </p>
            )}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                autoComplete="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-slate-900"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-slate-900"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-gray-700"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full rounded-lg border border-gray-300 p-3 text-slate-900"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 p-4 font-semibold text-white hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
