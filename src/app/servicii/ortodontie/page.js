import React from "react";
import styles from "../scss/ServicePage.module.scss";
import { services } from "@/components/ServicesSection/ServicesSection.utils";
import Image from "next/image";
import ServicesContainer from "@/components/ServicesPage/components/ServicesContainer";
import ServicePageLayout from "../components/ServicePageLayout";

const Ortodontie = () => {
  const img = services[2].image;
  const otherServices = services.filter(
    (service) => service.title !== "Ortodontie",
  );

  return (
    <ServicePageLayout image={<Image fill src={img} alt="Ortodontie" />}>
      <h1>Ortodonție – Alinierea perfectă a zâmbetului tău</h1>
      <p>
        Ortodonția este ramura stomatologiei care se ocupă de diagnosticarea,
        prevenirea și corectarea poziției dinților și a maxilarelor. Un zâmbet
        aliniat corect nu este doar estetic, ci și esențial pentru sănătatea
        orală și funcționalitatea ocluziei.
      </p>
      <p>
        În clinica noastră, oferim soluții personalizate pentru toate vârstele,
        utilizând cele mai moderne tehnici și aparate ortodontice pentru a vă
        ajuta să obțineți un zâmbet armonios și sănătos.
      </p>
      <p>Când este necesară ortodonția?</p>
      <ul>
        <li>Dinți înghesuiți, spațiați sau suprapuși.</li>
        <li>Mușcături incorecte, precum overbite, underbite sau crossbite.</li>
        <li>
          Probleme funcționale, cum ar fi dificultăți în masticație sau vorbire.
        </li>
        <li>
          Tulburări ale articulației temporo-mandibulare (ATM) cauzate de
          alinierea necorespunzătoare a dinților.
        </li>
      </ul>
      <p>Tipuri de aparate ortodontice disponibile:</p>
      <ul>
        <li>
          Aparate dentare fixe tradiționale: metalice sau ceramice, eficiente și
          fiabile pentru corectarea unei game largi de probleme ortodontice.
        </li>
        <li>
          Aparate dentare invizibile (alignere): dispozitive transparente,
          discrete și confortabile, ideale pentru adulți și adolescenți.
        </li>
        <li>
          Aparate dentare mobile: soluții pentru corecții simple sau pentru
          copii în fazele incipiente ale tratamentului ortodontic.
        </li>
      </ul>
      <p>Beneficiile tratamentului ortodontic:</p>
      <ul>
        <li>Îmbunătățirea esteticii zâmbetului și a încrederii în sine.</li>
        <li>
          Prevenirea problemelor dentare cauzate de malpoziții, precum cariile
          și bolile gingivale.
        </li>
        <li>Asigurarea unei mușcături funcționale și echilibrate.</li>
      </ul>
      <p>
        Indiferent de vârstă, este întotdeauna momentul potrivit pentru a
        investi într-un zâmbet sănătos și frumos. Echipa noastră de ortodonți
        experimentați vă va ghida pas cu pas pentru a găsi soluția potrivită
        nevoilor dumneavoastră.
      </p>
      <p>
        Programează o consultație și începe transformarea zâmbetului tău chiar
        astăzi!
      </p>
      <div className={styles.otherServices}>
        <h2>Alte servicii oferite</h2>
        <ServicesContainer services={otherServices} />
      </div>
    </ServicePageLayout>
  );
};

export default Ortodontie;
