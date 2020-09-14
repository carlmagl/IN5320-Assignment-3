import React from "react";
import i18n from "@dhis2/d2-i18n";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import styles from "./App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";

const Details = (dataset) => {
  console.log(dataset);
  //TODO: Display key value paris better, if time. 
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("Details")} />
        <Menu>
          
          {Object.entries(dataset).map(([key, value], i) => (
            <MenuItem key={key} dataTest="dhis2-uicore-menuitem" label={key + " : " + value} />
          ))}
        </Menu>
      </nav>
    </div>
  );
};

export default Details;
