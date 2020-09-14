import React, { useState } from "react";
import i18n from "@dhis2/d2-i18n";
import { Menu, MenuItem, MenuSectionHeader } from "@dhis2/ui";
import styles from "./App.module.css";
import { useDataQuery } from "@dhis2/app-runtime";
import Details from "./Details";

const dataSets = {
  dataSets: {
    resource: "dataSets",
    params: {
      paging: false,
      fields: ["id", "name", "created"],
    },
  },
};

const DataSetList = () => {
  const { error, loading, data } = useDataQuery(dataSets);
  const [activeDetaile, setActiveDetails] = useState();
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("List")} />
        <Menu>
          {loading && <span>...</span>}
          {error && <span>{`ERROR: ${error.message}`}</span>}
          {data &&
            data.dataSets.dataSets.map((dataSet) => (
              <MenuItem
                key={dataSet.id}
                label={dataSet.name}
                dataTest="menu-dataSets"
                onClick={() => setActiveDetails(dataSet)}
              />
            ))}
        </Menu>
      </nav>
      <main className={styles.main}>
        {activeDetaile && 
          <Details {...activeDetaile}/>
        }
      </main>
    </div>
  );
};

export default DataSetList;
