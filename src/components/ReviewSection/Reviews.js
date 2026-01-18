import { Star, Quote } from "lucide-react";
import styles from "./Reviews.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { reviews } from "./ReviewSection.utils";

export const Reviews = () => {
  return (
    <Wrapper>
      <section id="reviews" className={styles.section}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.header}>
            <span className={styles.label}>Testimoniale</span>
            <h2 className={styles.title}>Ce Spun Pacienții Noștri</h2>
          </div>

          {/* Google Rating Badge */}
          <div className={styles.ratingBadge}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className={styles.reviewsGrid}>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={styles.reviewCard}
                style={{ animationDelay: `${(index % 5) * 0.1}s` }}
              >
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewStars}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <div className={styles.quoteIcon}>
                    <Quote />
                  </div>
                </div>

                <p className={styles.reviewText}>"{review.text}"</p>

                <div className={styles.reviewFooter}>
                  <div className={styles.reviewAuthor}>
                    <div className={styles.authorAvatar}>
                      <span>
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className={styles.authorName}>{review.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
