import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import cx from "clsx";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { EMAIL_ADDRESS, GOOGLE_MAPS_URL, PHONE_NUMBER } from "@/consts/general";

const quickLinks = [
  { label: "Acasă", href: "/" },
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Echipa Noastră", href: "/echipa" },
  { label: "Servicii", href: "/#services" },
  { label: "Contact", href: "/#appointment" },
];

const services = [
  "Profilaxie",
  "Endodontie",
  "Ortodontie",
  "Pedodontie",
  "Estetică Dentară",
  "Protetică",
  "Chirurgie Orală",
  "Implantologie",
  "Reabilitare implanto-protetică All-on 4/6 by Straumann",
  "Parodontologie"
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <Link className={styles.logo} href="/">
                <Image
                  src="/logos/footerLogo.svg"
                  alt="ArtDent Logo"
                  fill
                  className={cx(styles.logoImage)}
                />
              </Link>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/ClinicaArtDentIasi/"
                target="_blank"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/explore/locations/192395857280912/artdent-clinic---valea-lupului/"
                target="_blank"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/clinica-artdent"
                target="_blank"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Linkuri Rapide</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>Serviciile Noastre</h4>
            <ul className={styles.linksList}>
              {services.map((service) => (
                <li key={service}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h4>Contactați-ne</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin />
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Str. Nufărului, Nr. 9
                  <br />
                  Valea Lupului, Iași, România
                </a>
              </li>
              <li className={styles.contactItem}>
                <Phone />
                <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              </li>
              <li className={styles.contactItem}>
                <Mail />
                <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
              </li>
              <li className={styles.contactItem}>
                <Clock />
                <span>
                  Luni - Joi: 9:00 - 20:00
                  <br />
                  Vineri: 9:00 - 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Artdent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
