import React, { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import styles from "./App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";
import DataSetList from "./DataSetList";
import ProgramsList from "./ProgramsList";

const MyApp = () => {
  const [programsActive, setPrograms] = useState(false);
  const [dataSetsActive, setDataset] = useState(false);
    //TODO: Add active styles for pressed buttons. 
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("Menu")} />
        <Menu>
          <MenuItem
            label={i18n.t("Programs")}
            dataTest="menu-programs"
            onClick={() => {
                setDataset(false);
                setPrograms(true);
            }}
          />
          <MenuItem
            label={i18n.t("Data sets")}
            dataTest="menu-dataSets"
            onClick={() => {
                setDataset(true);
                setPrograms(false);
            }}
          />
        </Menu>
      </nav>
      <main className={styles.main}>
        {dataSetsActive && 
            <DataSetList/>
        }
        {programsActive && 
            <ProgramsList/>
        }
      </main>
    </div>
  );
};

export default MyApp;
