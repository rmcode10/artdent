"use client";
import Select from "@/components/Common/Select/Select";
import React, { useEffect, useState } from "react";
import styles from "./Preturi.module.scss";
import Button from "@/components/Common/Button/Button";
import { getPrices } from "@/app/HttpServices";

const Preturi = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [prices, setPrices] = useState([]);
  const [tarifeList, setTarifeList] = useState([]);

  const categoriiTarife = prices?.map((tarif) => ({
    label: tarif.category,
    value: tarif.category,
  }));

  const servicesList =
    prices?.find((tarif) => tarif.category === selectedCategory?.value)
      ?.services || [];

  const enableEditMode = () => {
    setEditMode(true);
    setTarifeList(servicesList);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const prices = await getPrices();
        setPrices(prices);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching prices:", error);
    }
  }, []);

  const handleSave = async () => {
    const updatedPrices = prices.map((tarif) => {
      if (tarif.category === selectedCategory.value) {
        return {
          ...tarif,
          services: tarifeList.map((service) => ({
            name: service.name,
            price: service.price,
          })),
        };
      }
      return tarif;
    });
    try {
      const res = await fetch("/api/prices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPrices),
      });

      if (!res.ok) throw new Error("Failed to update prices");

      const data = await res.json();
      setEditMode(false);
      setTarifeList([]);
      setPrices(updatedPrices);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(categoriiTarife[0] || null);
    }
  }, [categoriiTarife, selectedCategory]);

  return (
    <>
      <div className={styles.headerPreturi}>
        <div>
          <span>Categorie</span>
          <Select
            value={selectedCategory}
            onChange={(option) => {
              setEditMode(false);
              setTarifeList([]);
              setSelectedCategory(option);
            }}
            options={categoriiTarife}
          />
        </div>
        {Boolean(selectedCategory) && (
          <Button onClick={enableEditMode}>Editare Preturi</Button>
        )}
      </div>
      {Boolean(selectedCategory) && (
        <div className={styles.listaPreturi}>
          <table>
            <thead>
              <tr>
                <th className={styles.longColumn}>Serviciu</th>
                <th>Pret</th>
              </tr>
            </thead>
            <tbody>
              {!editMode
                ? servicesList.map((service) => (
                    <tr key={service.name}>
                      <td className={styles.longColumn}>{service.name}</td>
                      <td>{service.price} RON</td>
                    </tr>
                  ))
                : tarifeList.map((service, index) => (
                    <tr key={index}>
                      <td className={styles.longColumn}>
                        <input
                          type="text"
                          value={service.name}
                          onChange={(e) => {
                            const updatedName = e.target.value;
                            setTarifeList((prev) =>
                              prev.map((s, i) =>
                                i === index ? { ...s, name: updatedName } : s,
                              ),
                            );
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => {
                            const updatedPrice = e.target.value;
                            setTarifeList((prev) =>
                              prev.map((s, i) =>
                                i === index ? { ...s, price: updatedPrice } : s,
                              ),
                            );
                          }}
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          {editMode && (
            <div className={styles.buttons}>
              <Button
                onClick={() => {
                  setEditMode(false);
                  setTarifeList([]);
                }}
                className={styles.secondary}
              >
                Anuleaza
              </Button>
              <Button onClick={handleSave}>Salveaza</Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Preturi;
