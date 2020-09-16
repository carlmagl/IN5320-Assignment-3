import React from "react";
import i18n from "@dhis2/d2-i18n";
import { Table, TableRow, TableCellHead, TableBody, TableCell, MenuSectionHeader, TableRowHead } from "@dhis2/ui";
import styles from "./App.module.css";


const Details = (dataset) => {
  console.log(dataset);
  return (
    <div className={styles.container}>
      <nav className={styles.menu} data-test-id="menu">
        <MenuSectionHeader label={i18n.t("Details")} />
        <Table>
        <TableRowHead label={i18n.t("Details")} />
          <TableRow>
            <TableCellHead>Key</TableCellHead>
            <TableCellHead>Value</TableCellHead>
          </TableRow>
          <TableBody>
            {/* <MenuItem key={key} dataTest={`details-${key}`} label={value} /> */}
            {Object.entries(dataset).map(([key, value], i) => (
              <TableRow key={i}>
                <TableCell>{key} :</TableCell>
                <TableCell dataTest={`details-${key}`} >{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </nav>
    </div>
  );
};

export default Details;
