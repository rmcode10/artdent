import { useCallback, useEffect, useState } from "react";

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchServicesAndCategories = useCallback(async () => {
    try {
      const response = await fetch("/api/prices");
      const data = await response.json();
      setServices(data.services || []);
      setCategories(data.categories || []);
    } catch (error) {
      console.error("Error fetching services and categories:", error);
    }
  }, []);

  const grouppedData = categories.map((category) => ({
    ...category,
    services: services.filter((service) => service.category_id === category.id),
  }));

  useEffect(() => {
    fetchServicesAndCategories();
  }, []);

  return { services, categories, grouppedData, fetchServicesAndCategories };
};
