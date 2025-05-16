"use client";

import Image from "next/image";
import HeroImg from "../public/images/hero-img.jpg";
import Button from "@/components/button";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import Services from "@/components/services";
import Appointments from "@/components/appointments";

export default function Home() {
  return (
    <main>
      <section
        className="min-h-screen md:min-h-[70vh] w-full grid place-items-center lg:place-items-start p-4"
        id="hero"
      >
        <div className="content backdrop-blur relative max-w-[72ch] rounded-tr-4xl md:rounded-tr-full lg:left-56 z-20">
          <h1 className="font-nyght text-(--foreground) text-4xl sm:text-5xl md:text-6xl my-8 text-balance">
            Welcome to{" "}
            <span className="inline-block bg-linear-to-r from-(--foreground) to-(--accent) bg-clip-text text-transparent pr-2 pb-2">
              Moxie Beauty Studio
            </span>
          </h1>
          <p className="text-base text-balance mb-6">
            Where artistry meets individuality. Specializing in bespoke lash and
            brow transformations, we craft personalized enhancements to
            highlight your natural beauty. Let your confidence shine with
            treatments designed for real life &mdash; and those extraordinary
            moments.
          </p>
          <ul
            className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 mb-4 space-y-4 md:space-y-0"
            id="contact-hero"
          >
            <li>
              <Button className="w-full md:w-auto" variant="default" size="lg">
                Make an Appointment
              </Button>
            </li>
            <li className="text-base flex md:flex-col gap-2 md:gap-0">
              <span className="font-nyght-bold text-(--accent)">Phone</span>
              <a
                href="tel:2623326072"
                className="font-semibold no-underline text-nowrap lg:hover:underline underline-offset-2 decoration-2 decoration-rose-gold dark:decoration-ivory-rose transition-all"
              >
                (262) 332-6072
              </a>
            </li>
            <li className="text-base flex md:flex-col gap-2 md:gap-0">
              <span className="font-nyght-bold text-(--accent)">Email</span>
              <a
                href="mailto:hello@moxiebeautystudiowi.com"
                className="font-semibold no-underline text-nowrap lg:hover:underline underline-offset-2 decoration-2 decoration-rose-gold dark:decoration-ivory-rose transition-all"
              >
                hello@moxiebeautystudiowi.com
              </a>
            </li>
          </ul>
        </div>
        <Image
          src={HeroImg}
          alt="Close up of a woman's face. She has amazing lashes."
          className="absolute top-0 right-0 w-60 md:w-1/3 2xl:w-[32vw] h-96 md:h-[48vh] lg:h-[64vh] xl:h-[80vh] 2xl:h-[88vh] rounded-bl-full rounded-tl-[15%] border-l-[1rem] border-(--accent) object-cover z-0"
          sizes="(max-width: 768px) 15rem, (max-width: 1536px) 33vw, 32vw"
          quality={90}
          priority={true}
          loading="eager"
          placeholder="blur"
          blurDataURL="data:image/png;base64,L3CFkh^300%LD*W.~BxG00xZ?aNG"
        />
      </section>

      <div className="w-full h-32 bg-linear-to-b from-(--background) sticky top-0 z-20" />

      <Appointments />
      <Services />
      <About />
      <Testimonials />
    </main>
  );
}
