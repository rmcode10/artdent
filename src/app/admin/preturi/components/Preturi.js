"use client";
import Select from "@/components/Common/Select/Select";
import React, { useEffect, useState } from "react";
import styles from "./Preturi.module.scss";
import Button from "@/components/Common/Button/Button";
import { useServices } from "./hooks/useServices";

const Preturi = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editService, setEditService] = useState({});
  const [createService, setCreateService] = useState(null);

  const { services, categories, fetchServicesAndCategories } = useServices();

  const categoryOptions = categories?.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const selectedCategoryServices = services?.filter(
    (service) => service.category_id === selectedCategory?.value,
  );

  useEffect(() => {
    if (!selectedCategory) {
      setSelectedCategory(categoryOptions[0] || null);
    }
  }, [categoryOptions, selectedCategory]);

  const handleEdit = (service) => {
    setEditService(service);
  };

  const handleEditService = () => {
    fetch("/api/prices", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editService),
    }).then(() => {
      setEditService({});
      fetchServicesAndCategories();
    });
  };

  const handleCreateService = () => {
    fetch("/api/prices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createService),
    }).then(() => {
      setCreateService(null);
      fetchServicesAndCategories();
    });
  };

  const handleDeleteService = (id) => {
    fetch("/api/prices", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then(() => {
      fetchServicesAndCategories();
    });
  };

  useEffect(() => {
    fetchServicesAndCategories();
  }, [fetchServicesAndCategories]);

  return (
    <>
      <div className={styles.headerPreturi}>
        <div>
          <span>Categorie</span>
          <Select
            value={selectedCategory}
            onChange={(option) => {
              setSelectedCategory(option);
              setEditService({});
              setCreateService(null);
            }}
            options={categoryOptions}
          />
        </div>
      </div>
      {Boolean(selectedCategory) && (
        <div className={styles.listaPreturi}>
          <table>
            <thead>
              <tr>
                <th className={styles.longColumn}>Serviciu</th>
                <th>Pret</th>
                <th>Actiuni</th>
              </tr>
            </thead>
            <tbody>
              {selectedCategoryServices.map((service) =>
                // Edit Mode
                editService.id === service.id ? (
                  <tr key={service.id}>
                    <td className={styles.longColumn}>
                      <input
                        type="text"
                        value={editService.name}
                        onChange={(e) =>
                          setEditService({
                            ...editService,
                            name: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editService.price}
                        onChange={(e) =>
                          setEditService({
                            ...editService,
                            price: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button
                          onClick={handleEditService}
                          className={styles.saveButton}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleEdit({})}
                          className={styles.deleteButton}
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  //
                  <tr key={service.id}>
                    <td className={styles.longColumn}>{service.name}</td>
                    <td>{service.price} RON</td>
                    <td>
                      <div className={styles.actionButtons}>
                        <button onClick={() => handleEdit(service)}>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className={styles.deleteButton}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ),
              )}
              <tr>
                <td>
                  {createService ? (
                    <input
                      type="text"
                      value={createService.name}
                      onChange={(e) =>
                        setCreateService({
                          ...createService,
                          name: e.target.value,
                        })
                      }
                    />
                  ) : null}
                </td>
                <td>
                  {createService ? (
                    <input
                      type="text"
                      value={createService.price}
                      onChange={(e) =>
                        setCreateService({
                          ...createService,
                          price: e.target.value,
                        })
                      }
                    />
                  ) : null}
                </td>
                <td>
                  {createService ? (
                    <div className={styles.actionButtons}>
                      <button
                        onClick={handleCreateService}
                        className={styles.saveButton}
                      >
                        Create
                      </button>
                      <button
                        onClick={() => setCreateService(null)}
                        className={styles.deleteButton}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <Button
                      className={styles.newServiceButton}
                      isDisabled={editService.id}
                      onClick={() =>
                        setCreateService({
                          category_id: selectedCategory.value,
                          name: "",
                          price: "",
                        })
                      }
                    >
                      Serviciu Nou
                    </Button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Preturi;
