import styles from "./TeamMember.module.scss";

export const TeamMember = ({
  name,
  role,
  image,
  specialization,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={image.src} alt={name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        {specialization && (
          <p className={styles.specialization}>{specialization}</p>
        )}
        {description && <p className={styles.specialization}>{description}</p>}
      </div>
    </div>
  );
};
