
import { useEffect, useRef } from "react";

import gallery01 from "../../assets/academy/gallery-01.jpg";
import gallery02 from "../../assets/academy/gallery-02.jpg";
import gallery03 from "../../assets/academy/gallery-03.jpg";
import gallery04 from "../../assets/academy/gallery-04.jpg";
import gallery05 from "../../assets/academy/gallery-05.jpg";
import AcademyFooter from "./AcademyFooter";


const galleryItems = [
  {
    image: gallery01,
    alt: "Chess training session",
    review:
      "A wonderful learning environment. My child has become much more confident in chess.",
    author: "Parent",
  },
  {
    image: gallery02,
    alt: "Chess players",
    review:
      "The training is structured, engaging and enjoyable for children.",
    author: "Parent",
  },
  {
    image: gallery03,
    alt: "Chess tournament",
    review:
      "The tournament experience helped my child improve both confidence and game skills.",
    author: "Parent",
  },
  {
    image: gallery04,
    alt: "Chess coaching",
    review:
      "The coaches make learning chess interesting and easy to follow.",
    author: "Parent",
  },
  {
    image: gallery05,
    alt: "Chess academy activity",
    review:
      "A great place for children who want to learn and enjoy chess.",
    author: "Parent",
  },
];

function Gallery() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      const firstCard = slider.querySelector(
        ".academy-gallery-item"
      );

      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;

      const track = slider.querySelector(
        ".academy-gallery-track"
      );

      const gap = track
        ? parseFloat(getComputedStyle(track).gap) || 0
        : 0;

      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: cardWidth + gap,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="academy-gallery-section"
      id="gallery"
    >
      <div className="academy-section-heading">
        <p className="academy-section-label">
          MOMENTS
        </p>

        {/* <h2>Gallery</h2> */}

        <p>
          A glimpse into our training sessions, tournaments
          and chess experiences.
        </p>
      </div>

      <div
        className="academy-gallery-wrapper"
        ref={sliderRef}
      >
        <div className="academy-gallery-track">
          {galleryItems.map((item, index) => (
            <article
              className="academy-gallery-item"
              key={index}
            >
              <div className="academy-gallery-image">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
              </div>

              <div className="academy-gallery-review">
                <p>“{item.review}”</p>

                <span>— {item.author}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <AcademyFooter />
    </section>
  );
}

export default Gallery;