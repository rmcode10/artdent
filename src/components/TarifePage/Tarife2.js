"use client";

import { useState } from "react";
import styles from "./Tarife2.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import { useServices } from "./hooks/useServices";

const pricesData = [
  {
    id: 1,
    name: "Terapie",
    services: [
      { id: 1, name: "Consultație terapie", price: "100" },
      { id: 2, name: "Anestezie locală", price: "50" },
      { id: 3, name: "Obturație MTA", price: "150" },
      {
        id: 4,
        name: "Obturație compozit foto cavitate mică/punctiformă",
        price: "150",
      },
      { id: 5, name: "Obturație compozit foto cavitate medie", price: "200" },
      { id: 6, name: "Obturație compozit foto cavitate mare", price: "250" },
      { id: 7, name: "Obturație compozit foto cavitate MOD", price: "300" },
      { id: 8, name: "Bază glass ionomer (sub obturație foto)", price: "50" },
      {
        id: 9,
        name: "Obturație compozit foto estetică pe dinți frontali",
        price: "300",
      },
      { id: 10, name: "Pansament provizoriu", price: "100" },
      { id: 11, name: "Aplicare desensibilizant/dinte", price: "100" },
    ],
  },
  {
    id: 2,
    name: "Profilaxie",
    services: [
      {
        id: 12,
        name: "Igienizare profesională (detartraj + air-flow + periaj profesional)",
        price: "250",
      },
      { id: 13, name: "Detartraj și periaj/dinte", price: "25" },
      { id: 14, name: "Sigilare șanțuri și fosete/dinte", price: "100" },
      { id: 15, name: "Fluorizare/arcadă", price: "100" },
      { id: 16, name: "Tratament air-flow/arcadă", price: "75" },
    ],
  },
  {
    id: 3,
    name: "Endodonție",
    services: [
      { id: 17, name: "Pansament calmant", price: "150" },
      {
        id: 18,
        name: "Urgență (drenaj endo, abces, extirpare mono, pluri)",
        price: "150",
      },
      {
        id: 19,
        name: "Tratament de canal monoradicular într-o ședință",
        price: "250",
      },
      {
        id: 20,
        name: "Tratament de canal pluriradicular într-o ședință",
        price: "350",
      },
      {
        id: 21,
        name: "Tratament de canal pluriradicular într-o ședință molar de minte",
        price: "450",
      },
      { id: 22, name: "Dezobturat per canal", price: "100" },
      { id: 23, name: "Drenaj endodontic", price: "100" },
      {
        id: 24,
        name: "Retratament de canal monoradicular într-o ședință",
        price: "350",
      },
      {
        id: 25,
        name: "Retratament de canal pluriradicular într-o ședință",
        price: "450",
      },
      {
        id: 26,
        name: "Retratament de canal pluriradicular într-o ședință molar de minte",
        price: "550",
      },
    ],
  },
  {
    id: 4,
    name: "Protetică",
    services: [
      {
        id: 37,
        name: "Coroană acrilică/Măscuță scutan per dinte",
        price: "150",
      },
      { id: 38, name: "Coroană provizorie PMMA CAD-CAM", price: "250" },
      {
        id: 39,
        name: "Coroană provizorie PMMA CAD-CAM pe implant",
        price: "350",
      },
      { id: 40, name: "Coroană metalo-ceramică", price: "600" },
      { id: 41, name: "Coroană ceramică pe suport zirconiu", price: "1000" },
      { id: 42, name: "Coroană zirconiu integral", price: "900" },
      { id: 43, name: "Coroană ceramică presată E-MAX", price: "1300" },
      { id: 44, name: "Coroană pe implant –metalo-ceramică", price: "1200" },
      {
        id: 45,
        name: "Coroană pe implant – zirconiu integral/ceramică pe suport zirconiu",
        price: "1450",
      },
      { id: 46, name: "Bont personalizat hibrid titan/zirconiu", price: "850" },
      { id: 47, name: "Incrustație ceramică", price: "1000" },
      { id: 48, name: "Cimentare/per element", price: "75" },
      { id: 49, name: "Proteză Kemeny", price: "500" },
      { id: 50, name: "Proteză totală acrilică", price: "1700" },
      { id: 51, name: "Proteză parțială acrilică", price: "1700" },
      { id: 52, name: "Proteză elastică", price: "2500" },
      { id: 53, name: "Proteză pe capse", price: "2500" },
      { id: 54, name: "Proteză scheletată", price: "4000" },
      { id: 55, name: "Reparație proteză", price: "300" },
      { id: 56, name: "Căptușire proteză", price: "300" },
      { id: 57, name: "Adăugare dinte proteză", price: "150" },
      { id: 58, name: "Pivot fibră de sticlă", price: "250" },
      { id: 59, name: "Pivot metalic Cr-Ni", price: "250" },
      { id: 60, name: "Pivot Cr-Ni cu clavetă", price: "280" },
      { id: 61, name: "Pivot zirconiu", price: "600" },
      { id: 62, name: "Ablație coroană/element", price: "75" },
      { id: 63, name: "Model de studiu turnat gips/arcadă", price: "75" },
      { id: 64, name: "Gutieră bruxism", price: "300" },
      { id: 65, name: "Imobilizare dinți cu fibră de sticlă", price: "700" },
      { id: 66, name: "Wax-up/mock-up per dinte", price: "150" },
    ],
  },
  {
    id: 5,
    name: "Estetică dentară",
    services: [
      {
        id: 97,
        name: "Albire profesională în 1 ședință cu lampă specială",
        price: "1000",
      },
      { id: 98, name: "Albire per arcadă", price: "600" },
      { id: 99, name: "Fațetă ceramică E-MAX", price: "1500" },
    ],
  },
  {
    id: 6,
    name: "Implantologie",
    services: [
      { id: 100, name: "Implant dentar Neodent", price: "2500" },
      { id: 101, name: "Implant dentar Straumann BLX", price: "3500" },
      { id: 102, name: "Sistem All on 4 implanturi Neodent", price: "16000" },
      { id: 103, name: "Sistem All on 6 implanturi Neodent", price: "21000" },
      { id: 104, name: "Sistem All on 4 implanturi Straumann", price: "20000" },
      { id: 105, name: "Sistem All on 6 implanturi Straumann", price: "25000" },
    ],
  },
  {
    id: 7,
    name: "Chirurgie",
    services: [
      { id: 106, name: "Consultație chirurgie", price: "100" },
      { id: 107, name: "Extracție dinte monoradicular", price: "150" },
      { id: 108, name: "Extracție dinte pluriradicular", price: "200" },
      { id: 109, name: "Extracție dinte parodontotic", price: "100" },
      {
        id: 110,
        name: "Extracție rest radicular monoradicular/pluriradicular",
        price: "150",
      },
      { id: 111, name: "Extracție molar de minte erupt", price: "300" },
      { id: 112, name: "Extracție prin alveolotomie", price: "300" },
      {
        id: 113,
        name: "Extracție molar de minte parțial erupt (ANCLAVAT)",
        price: "350",
      },
      {
        id: 114,
        name: "Odontectomie molar de minte/ canin inclus",
        price: "600",
      },
      { id: 115, name: "Germectomie", price: "600" },
      { id: 116, name: "Închiderea comunicării oro-sinusale", price: "300" },
      { id: 117, name: "Premolarizare", price: "200" },
      { id: 118, name: "Regularizare osoasă/ hemiarcadă", price: "250" },
      {
        id: 119,
        name: "Rezecție apicală monoradicular (cu obturație)",
        price: "450",
      },
      {
        id: 120,
        name: "Rezecție apicală pluriradicular (cu obturație)",
        price: "600",
      },
      { id: 121, name: "Decapusonare", price: "150" },
      { id: 122, name: "Incizie și drenaj colecție purulentă", price: "200" },
      { id: 123, name: "Sutura cu fir resorbabil", price: "30" },
      {
        id: 124,
        name: "Tratament alveolită postextracțională/ ședință",
        price: "100",
      },
      { id: 125, name: "Chistectomie (1-3 dinți)", price: "400" },
      { id: 126, name: "Chistectomie (>3 dinți)", price: "600" },
      { id: 127, name: "Excizie formațiune benignă", price: "500" },
      { id: 128, name: "Excizie hiperplazie gingivală", price: "300" },
      { id: 129, name: "Examen anatomo-patologic", price: "200" },
      { id: 130, name: "Vestibuloplastie/arcadă", price: "500" },
      { id: 131, name: "Frenectomie/ frenoplastie", price: "300" },
      { id: 132, name: "Gingivectomie/ gingivolastie per dinte", price: "80" },
      {
        id: 133,
        name: "Chiuretaj subgingival în câmp închis/ dinte (fără biomateriale)",
        price: "100",
      },
      {
        id: 134,
        name: "Chiuretaj subgingival în câmp deschis / dinte (fără biomateriale)",
        price: "150",
      },
      { id: 135, name: "Descoperire canin", price: "450" },
      { id: 136, name: "Sinus lift extern", price: "5000" },
      { id: 137, name: "Sinus lift intern", price: "2500" },
      {
        id: 138,
        name: "Augmentare osoasă postextracțională (xenogrefă)",
        price: "2000",
      },
      {
        id: 139,
        name: "Augmentare osoasă orizontală (BIO-OSS)",
        price: "2500",
      },
      {
        id: 140,
        name: "Augmentare osoasă orizontală (os autolog)",
        price: "3000",
      },
      { id: 141, name: "Descoperire implant", price: "100" },
      { id: 142, name: "Aplicare PRF/PRP", price: "120" },
    ],
  },
  {
    id: 8,
    name: "Pedodontie - Stomatologie copii",
    services: [
      { id: 143, name: "Consultație pedodonție", price: "100" },
      { id: 144, name: "Pansament", price: "100" },
      { id: 145, name: "Pulpectomie", price: "120" },
      {
        id: 146,
        name: "Obturație canal monoradicular dinte temporar",
        price: "130",
      },
      {
        id: 147,
        name: "Obturație canal pluriradicular dinte temporar",
        price: "150",
      },
      { id: 148, name: "Pastă mumifiantă", price: "100" },
      { id: 149, name: "Extirpare vitală", price: "130" },
      { id: 150, name: "Drenaj abces", price: "100" },
      { id: 151, name: "Obturație glassionomer", price: "120" },
      {
        id: 152,
        name: "Obturație compozit foto/dinte cavitate mică",
        price: "140",
      },
      {
        id: 153,
        name: "Obturație compozit foto/dinte cavitate medie",
        price: "190",
      },
      {
        id: 154,
        name: "Obturație compozit foto/dinte cavitate mare",
        price: "230",
      },
      { id: 155, name: "Coafaj", price: "100" },
      { id: 156, name: "Extracție dinte de lapte mobil", price: "90" },
      { id: 157, name: "Extracție dinte de lapte imobil", price: "120" },
      { id: 158, name: "Sigilare/dinte", price: "100" },
      { id: 159, name: "Igienizare profesională pedodonție", price: "150" },
      { id: 160, name: "Fluorizare per arcadă", price: "70" },
      { id: 161, name: "Fluorizare ambele arcade", price: "120" },
      { id: 162, name: "Coroană/dinte temporar", price: "500" },
    ],
  },
  {
    id: 9,
    name: "Ortodonție",
    services: [
      { id: 163, name: "Consultație ortodonție", price: "100" },
      { id: 164, name: "Studiu de model", price: "100" },
      { id: 165, name: "Interpretare dosar ortodontic", price: "200" },
      { id: 166, name: "Aparat ortodontic fix metalic/arcadă", price: "1400" },
      {
        id: 167,
        name: "Aparat ortodontic fix fizionomic/arcadă",
        price: "2700",
      },
      { id: 168, name: "Aparat ortodontic fix autoligaturant", price: "2250" },
      { id: 169, name: "Aparat orto fix Damon/arcadă", price: "4500" },
      { id: 170, name: "Activare aparat fix metalic/arcadă", price: "100" },
      { id: 171, name: "Activare aparat fix fizionomic/arcadă", price: "150" },
      { id: 172, name: "Activare aparat fix Damon", price: "200" },
      { id: 173, name: "Recolat bracket metalic", price: "100" },
      { id: 174, name: "Recolat bracket fizionomic", price: "150" },
      { id: 175, name: "Aparat ortodontic mobilizabil", price: "850" },
      { id: 176, name: "Reparație aparat mobil", price: "250" },
      { id: 177, name: "Disjunctor maxilar", price: "1350" },
      { id: 178, name: "Distalizator fast back", price: "1350" },
      {
        id: 179,
        name: "Disjunctor cu cârlige pentru mască Delaire",
        price: "1350",
      },
      { id: 180, name: "Mască Delaire", price: "700" },
      { id: 181, name: "Arc lingual", price: "600" },
      { id: 182, name: "Lup bumper", price: "550" },
      { id: 183, name: "Arc transpalatar", price: "550" },
      { id: 184, name: "Quad-helix", price: "550" },
      { id: 185, name: "Aparat de contenție Hawley", price: "450" },
      { id: 186, name: "Menținător de spațiu monodentar", price: "250" },
      { id: 187, name: "Îndepărtare aparat fix metalic/arcadă", price: "100" },
      {
        id: 188,
        name: "Îndepărtare aparat fix fizionomic/arcadă",
        price: "200",
      },
      { id: 189, name: "Gutieră de contenție termoformată", price: "450" },
      { id: 190, name: "Contenție fixă", price: "250" },
      {
        id: 191,
        name: "Ancoraj scheletal cu mini-implant ortodontic",
        price: "700",
      },
      {
        id: 192,
        name: "Disjunctor/distalizator pe mini-implante",
        price: "4500",
      },
      {
        id: 193,
        name: "Tratament ortodontic cu alignere SPARK, 10 gutiere",
        price: "9000",
      },
      {
        id: 194,
        name: "Tratament ortodontic cu alignere SPARK, 20 gutiere",
        price: "18000",
      },
      {
        id: 195,
        name: "Tratament ortodontic cu alignere SPARK, gutiere nelimitate",
        price: "27000",
      },
      { id: 196, name: "Tratament cu gutiere/arcadă", price: "2700" },
      { id: 197, name: "Splint articular", price: "1350" },
    ],
  },
  {
    id: 10,
    name: "Parodontologie",
    services: [
      { id: 198, name: "Consultație", price: "150" },
      { id: 199, name: "Evaluare parodontală", price: "200" },
      { id: 200, name: "Protocol de igienizare personalizată", price: "50" },
      { id: 201, name: "Igienizare parodontală", price: "350" },
      { id: 202, name: "Perisolv", price: "150" },
      { id: 203, name: "Laser", price: "250" },
      { id: 204, name: "Reevaluare parodontală", price: "150" },
      { id: 205, name: "Surfasaj în câmp deschis", price: "300" },
      { id: 206, name: "Chirurgie rezectivă", price: "350" },
      { id: 207, name: "Chirurgie regenerativă", price: "700" },
      { id: 208, name: "Recoltare grefă", price: "800" },
      {
        id: 209,
        name: "Augmentare gingie keratinizată cu grefă gingivală",
        price: "1000",
      },
      { id: 210, name: "GBT", price: "250" },
    ],
  },
  {
    id: 11,
    name: "Tarife CAS",
    type: "cas",
    tables: [
      {
        id: 1,
        title: "CAS Asigurați peste 18 ani",
        services: [
          { id: 1, name: "Consultație", price: "149", coplata: "" },
          {
            id: 2,
            name: "Tratamentul cariei simple CAS",
            price: "157",
            coplata: "",
          },
          {
            id: 3,
            name: "Obturația dintelui după tratamentul afecțiunilor pulpare sau al gangrenei",
            price: "207",
            coplata: "83",
          },
          {
            id: 4,
            name: "Tratamentul de urgență al traumatismelor dento-alveolare/dinte",
            price: "196",
            coplata: "",
          },
          {
            id: 5,
            name: "Tratamentul afecțiunilor pulpare CAS",
            price: "269",
            coplata: "108",
          },
          { id: 6, name: "Pansament calmant CAS", price: "78", coplata: "" },
          {
            id: 7,
            name: "Tratamentul gangrenei pulpare CAS",
            price: "314",
            coplata: "126",
          },
          {
            id: 8,
            name: "Tratamentul parodontitelor apicale - prin incizie - cu anestezic",
            price: "190",
            coplata: "",
          },
          {
            id: 9,
            name: "Tratamentul afecțiunilor paradontiului cu anestezie",
            price: "131",
            coplata: "",
          },
          {
            id: 10,
            name: "Tratamentul afecțiunilor mucoasei bucale",
            price: "76",
            coplata: "30",
          },
          {
            id: 11,
            name: "Extracția dinților temporari cu anestezie",
            price: "76",
            coplata: "30",
          },
          {
            id: 12,
            name: "Extracție dinți permanenți cu anestezie CAS",
            price: "162",
            coplata: "65",
          },
          {
            id: 13,
            name: "Chiuretaj alveolar și tratamentul hemoragiei",
            price: "112",
            coplata: "",
          },
          {
            id: 14,
            name: "Proteză mobilă acrilică CAS (1/4 ani)",
            price: "1145",
            coplata: "",
          },
          {
            id: 15,
            name: "Reparație proteză mobilă acrilică CAS (2/an)",
            price: "138",
            coplata: "",
          },
          {
            id: 16,
            name: "Rebazare proteză CAS (2/an)",
            price: "202",
            coplata: "",
          },
          { id: 17, name: "Element fizionomic", price: "224", coplata: "90" },
          {
            id: 18,
            name: "Element semi-fizionomic",
            price: "258",
            coplata: "103",
          },
          {
            id: 19,
            name: "Reconstituire corono-radiculară",
            price: "263",
            coplata: "105",
          },
          {
            id: 20,
            name: "Detartraj cu ultrasunete și periaj profesional/ambele arcade/1 serviciu pe an",
            price: "150",
            coplata: "",
          },
        ],
      },
      {
        id: 2,
        title: "CAS Copii sub 18 ani",
        services: [
          {
            id: 1,
            name: "Consultație + igienizare CAS (1/an)",
            price: "149",
            coplata: "",
          },
          {
            id: 2,
            name: "Tratamentul cariei simple CAS",
            price: "157",
            coplata: "",
          },
          {
            id: 3,
            name: "Obturația dintelui după tratamentul afecțiunilor pulpare sau a gangrenei CAS",
            price: "207",
            coplata: "",
          },
          {
            id: 4,
            name: "Tratamentul de urgență al traumatismelor dento-alveolare/dinte",
            price: "196",
            coplata: "",
          },
          {
            id: 5,
            name: "Tratamentul afecțiunilor pulpare CAS",
            price: "269",
            coplata: "",
          },
          {
            id: 6,
            name: "Pansament calmant / drenaj endodontic",
            price: "78",
            coplata: "",
          },
          {
            id: 7,
            name: "Tratamentul gangrenei pulpare CAS",
            price: "314",
            coplata: "",
          },
          {
            id: 8,
            name: "Tratamentul parodontitelor apicale acute prin incizie",
            price: "190",
            coplata: "",
          },
          {
            id: 9,
            name: "Tratamentul afecțiunilor parodontiului marginal",
            price: "131",
            coplata: "",
          },
          {
            id: 10,
            name: "Tratamentul afecțiunilor mucoasei bucale",
            price: "76",
            coplata: "",
          },
          {
            id: 11,
            name: "Extracție dinte temporar",
            price: "76",
            coplata: "",
          },
          {
            id: 12,
            name: "Extracție dinți permanenți cu anestezie CAS",
            price: "162",
            coplata: "",
          },
          {
            id: 13,
            name: "Chiuretaj alveolar și tratamentul hemoragiei",
            price: "112",
            coplata: "",
          },
          { id: 14, name: "Element fizionomic", price: "224", coplata: "" },
          {
            id: 15,
            name: "Element semi-fizionimic",
            price: "258",
            coplata: "",
          },
          {
            id: 16,
            name: "Reconstituire corono-radiculară",
            price: "263",
            coplata: "",
          },
          {
            id: 17,
            name: "Detartraj cu ultrasunete și periaj profesional/ambele arcade/1 serviciu pe an",
            price: "150",
            coplata: "",
          },
          {
            id: 18,
            name: "Sigilare/dinte (1/2 ani)",
            price: "108",
            coplata: "",
          },
          { id: 19, name: "Fluorizare", price: "94", coplata: "" },
        ],
      },
      {
        id: 3,
        title:
          "CAS Tineri 18-26 ani, elevi, studenți, ucenici dacă nu realizează venituri din muncă",
        services: [
          { id: 1, name: "Igienizare CAS (1/an)", price: "150", coplata: "" },
        ],
      },
      {
        id: 4,
        title: "CAS – Urgențe asigurați + neasigurați",
        services: [
          { id: 1, name: "Consultație", price: "149", coplata: "" },
          {
            id: 2,
            name: "Tratamentul de urgență al traumatismelor dento-alveolare/dinte",
            price: "196",
            coplata: "",
          },
          {
            id: 3,
            name: "Pansament calmant / drenaj endodontic",
            price: "78",
            coplata: "",
          },
          {
            id: 4,
            name: "Tratamentul parodontitelor apicale acute prin incizie",
            price: "190",
            coplata: "",
          },
          {
            id: 5,
            name: "Tratamentul afecțiunilor parodontiului marginal",
            price: "131",
            coplata: "",
          },
          {
            id: 6,
            name: "Chiuretaj alveolar și tratamentul hemoragiei",
            price: "112",
            coplata: "",
          },
        ],
      },
    ],
  },
];

const Tarife2 = () => {
  const { grouppedData } = useServices();
  const [priceListData, setPriceListData] = useState(pricesData);

  const [activeCategory, setActiveCategory] = useState(priceListData[0]);

    const renderStandardContent = (category) => (
    <>
      <h2 className={styles.categoryTitle}>{category.name}</h2>
      <ul className={styles.servicesList}>
        {category.services?.map((service) => (
          <li key={service.id} className={styles.serviceItem}>
            <span className={styles.serviceName}>{service.name}</span>
            <span className={styles.servicePrice}>{service.price} Lei</span>
          </li>
        ))}
      </ul>
    </>
  );

  const renderCasContent = (category) => (
    <>
      <h2 className={styles.categoryTitle}>{category.name}</h2>
      {category.tables?.map((table) => (
        <div key={table.id} className={styles.casTableWrapper}>
          <h3 className={styles.casTableTitle}>{table.title}</h3>
          <div className={styles.tableContainer}>
            <table className={styles.casTable}>
              <thead>
                <tr>
                  <th className={styles.thName}>Denumire</th>
                  <th className={styles.thPrice}>Preț</th>
                  <th className={styles.thCoplata}>Coplată</th>
                </tr>
              </thead>
              <tbody>
                {table.services.map((service) => (
                  <tr key={service.id}>
                    <td className={styles.tdName}>{service.name}</td>
                    <td className={styles.tdPrice}>{service.price} Lei</td>
                    <td className={styles.tdCoplata}>{service.coplata ? `${service.coplata} Lei` : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <Wrapper>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.container}>
            <span className={styles.label}>Tarife</span>
            <h1 className={styles.title}>Lista de Prețuri Stomatologice</h1>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {/* Categories Sidebar */}
              <aside className={styles.sidebar}>
                <nav className={styles.categories}>
                  {priceListData?.map((category) => (
                    <button
                      key={category.id}
                      className={`${styles.categoryButton} ${
                        activeCategory.id === category.id ? styles.active : ""
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </aside>

              {/* Services List */}
              <div className={styles.content}>
                {activeCategory.type === "cas"
                  ? renderCasContent(activeCategory)
                  : renderStandardContent(activeCategory)
                }
              </div>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Tarife2;
