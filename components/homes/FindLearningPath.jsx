import Link from "next/link";
import React from "react";

export default function FindLearningPath() {
  return (
    <section className="cta -type-1 layout-pt-lg layout-pb-lg">
      <div data-parallax="0.6" className="cta__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          style={{ backgroundImage: "url(/assets/img/about-1/1.jpg)" }}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-45 md:text-30 text-white">
              Our Mission
            </h2>
          </div>

          <div className="w-100"></div>



          <div className="w-100"></div>

          <div className="col-auto">
            <Link
              href="/about-2"
              className="button -md -outline-white text-white mt-45 md:mt-20"
            >
            View
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
