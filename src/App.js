import React, { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import styles from "./App.module.css";
import DataSetList from "./DataSetList";
import ProgramsList from "./ProgramsList";

export default function MyApp(){
  const [programsActive, setPrograms] = useState(false);
  const [dataSetsActive, setDataset] = useState(false);
  //TODO: Add active styles for pressed buttons.
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("Menu")} />
        <Menu>
          <MenuItem
            active={programsActive}
            label={i18n.t("Programs")}
            dataTest="menu-programs"
            onClick={() => {
              setDataset(false);
              setPrograms(true);
            }}
          />
          <MenuItem
            active={dataSetsActive}
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
        {dataSetsActive && <DataSetList />}
        {programsActive && <ProgramsList />}
      </main>
    </div>
  );
};

