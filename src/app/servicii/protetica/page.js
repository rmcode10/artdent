import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Protetica = () => {
  const img = services[5].image;
  const otherServices = services.filter(
    (service) => service.title !== "Protetica",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Protetica" />}>
      <h1>
        Protetica dentară – Restaurarea funcționalității și esteticii zâmbetului
      </h1>
      <p>
        Protetica dentară se concentrează pe refacerea dinților pierduți sau
        deteriorați, redând atât funcționalitatea, cât și aspectul natural al
        zâmbetului. În clinica noastră, oferim soluții personalizate, precum
        coroane, punți dentare, proteze mobile și lucrări pe implanturi,
        utilizând materiale de înaltă calitate și tehnologie avansată.
      </p>
      <p>
        Echipa noastră de specialiști este dedicată să creeze restaurări
        confortabile, estetice și durabile, pentru ca pacienții noștri să se
        bucure din nou de un zâmbet complet și sănătos.
      </p>
      <p>
        Programează o consultație și descoperă soluțiile potrivite pentru tine!
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Protetica;
