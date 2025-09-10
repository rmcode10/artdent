import React from "react";
import AdminLayout from "../components/AdminLayout";
import Preturi from "./components/Preturi";

const page = async () => {
  return (
    <AdminLayout>
      <Preturi />
    </AdminLayout>
  );
};

export default page;
