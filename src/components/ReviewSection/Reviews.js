import { Star, Quote } from "lucide-react";
import styles from "./Reviews.module.scss";

const reviews = [
  {
    id: 1,
    name: "Gabriela H.",
    rating: 5,
    text: "Am fost extrem de mulțumită de serviciile oferite de această clinică dentară. Întreaga experiență a fost fără durere și fără niciun fel de disconfort, iar aparatura este modernă și de ultimă generație. Echipa este tânără, profesionistă și foarte amabilă.",
    date: "acum 2 săptămâni",
  },
  {
    id: 2,
    name: "Nanu C.",
    rating: 5,
    text: "Am avut o experiență excelentă la ArtDent. Personalul este foarte profesionist, iar atmosfera clinicii este una prietenoasă și relaxantă. Am fost tratată cu multă grijă și atenție, iar rezultatele au fost exact ce mi-am dorit. Recomand cu încredere!",
    date: "acum 1 lună",
  },
  {
    id: 3,
    name: "Simona C.",
    rating: 5,
    text: "Recomand cu mare drag această clinică! Personalul este profesionist și tratează cu seriozitate și amabilitate orice problemă. Clinica este curată și bine organizată, cu o atmosferă foarte plăcută.",
    date: "acum 1 lună",
  },
  {
    id: 4,
    name: "Renato C.",
    rating: 5,
    text: "Am ales ArtDent datorită locației, a recenziilor pozitive și a prezenței online bine puse la punct. Echipa medicală este tânără, foarte amabilă și profesionistă. Comunicarea a fost foarte bună, totul foarte transparent. Recomand cu încredere!",
    date: "acum 2 luni",
  },
  {
    id: 5,
    name: "Mihaela R.",
    rating: 5,
    text: "Cabinet modern și echipat cu tehnologii de ultimă generație. Interacțiune cu medicii și personalul foarte bună. Recomandat.",
    date: "acum 2 luni",
  },
  {
    id: 6,
    name: "Maria R.",
    rating: 5,
    text: "Am fost la clinică pentru extracția unor molari de minte. Deși eram destul de anxioasă înainte, experiența a fost una foarte bună. Intervenția s-a desfășurat fără durere, iar recuperarea a fost ușoară. O recomand cu toată încrederea!",
    date: "acum 3 luni",
  },
];

// Duplicate for seamless infinite scroll
const duplicatedReviews = [...reviews, ...reviews];

export const Reviews = () => {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Testimoniale</span>
          <h2 className={styles.title}>Ce Spun Pacienții Noștri</h2>
        </div>

        <div className={styles.ratingBadge}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className={styles.scrollWrapper}>
        <div className={styles.scrollTrack}>
          {duplicatedReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} className={styles.reviewCard}>
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
                      {review.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className={styles.authorName}>{review.name}</span>
                </div>
                <span className={styles.reviewDate}>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
