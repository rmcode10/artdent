import React from "react";
import CategoryCard from "./components/CategoryCard";
import styles from "./scss/Tarife.module.scss";
import Wrapper from "../Wrapper/Wrapper";
import ContactLayout from "../Common/ContactLayout.js/ContactLayout";
import { supabase } from "@/server/lib/supabaseClient";

export const dynamic = "force-dynamic";

const Tarife = async () => {
  const { data: services, error } = await supabase
    .from("services")
    .select("*")
    .order("id", { ascending: true });

  const { data: categories, error: catError } = await supabase
    .from("categories")
    .select("*")
    .order("id", { ascending: true });

  const data =
    categories?.map((category) => ({
      ...category,
      services: services?.filter(
        (service) => service.category_id === category.id,
      ),
    })) || [];

  return (
    <Wrapper>
      <div className={styles.tarifePageContainer}>
        <div className={styles.tarifeContainer}>
          <h1 className={styles.title}>Lista Preturi Stomatologice</h1>
          {data.map((item, index) => (
            <CategoryCard
              key={index}
              category={item.name}
              services={item.services}
            />
          ))}
        </div>
        <ContactLayout />
      </div>
    </Wrapper>
  );
};

export default Tarife;
