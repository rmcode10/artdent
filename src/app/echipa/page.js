// import dentist1 from "@/assets/team/dentist-1.jpg";
// import dentist2 from "@/assets/team/dentist-2.jpg";
// import hygienist1 from "@/assets/team/hygienist-1.jpg";
import styles from "./Team.module.scss";
import { TeamMember } from "@/components/Team/TeamMember";
import Wrapper from "@/components/Wrapper/Wrapper";
import alfredPiturlea from "../../../public/images/echipa/alfred_piturlea.jpg";
import alexandruLuculescu from "../../../public/images/echipa/alexandru_luculescu.jpg";
import georgianaPatrolea from "../../../public/images/echipa/georgiana_patrolea.jpg";
import iustinTapu from "../../../public/images/echipa/iustin_tapu.png";

const teamMembers = [
  {
    name: "Dr. Alfred Pițurlea",
    role: "Medic Stomatolog",
    specialization: "Competență Implantologie",
    description: "Master în Protezare implanto-protetică",
    image: alfredPiturlea,
  },
  {
    name: "Dr. Alexandru Luculescu",
    role: "Medic Stomatolog",
    specialization: "Specialist Chirurgie Oro-Maxilo-Facială",
    image: alexandruLuculescu,
  },
  {
    name: "Georgiana Patrolea",
    role: "Medic Stomatolog",
    specialization: "Specialist Ortodonție și Ortopedie Dento-Facială",
    image: georgianaPatrolea,
  },
  {
    name: "Dr. Iustin Tapu",
    role: "Medic Stomatolog",
    specialization: "Specialist Chirurgie Oro-Maxilo-Facială",
    image: iustinTapu,
  },
];

const Team = () => {
  return (
    <Wrapper>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.label}>Echipa Noastră</span>
            <h1 className={styles.heroTitle}>
              Cunoaște <span className={styles.highlight}>Experții</span>
            </h1>
            <p className={styles.heroDescription}>
              Echipa noastră de profesioniști experimentați este dedicată să vă
              ofere îngrijire dentară de cea mai înaltă calitate într-un mediu
              confortabil.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamSection}>
        <div className={styles.teamContainer}>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={styles.teamMemberWrapper}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Team;
