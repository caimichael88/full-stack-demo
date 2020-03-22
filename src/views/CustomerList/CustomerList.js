import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";


import Table from "components/Table/Table.js";
import CustomerTable from "components/Table/CustomerTable.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);



export default function CustomerList() {
  const classes = useStyles();
  const [ customers, updateCustomers ] = useState([]);

  async function getCustomers() {
    try {
      const response = await fetch('/api/customers');
      const data = await response.json();
      updateCustomers(data.data);
      //console.log(customers);
      //console.log(JSON.stringify(customers));
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Customer list Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <CustomerTable
              tableHeaderColor="primary"
              tableHead={["Name", "Email", "PayPeriod", "Amount"]}
              tableData={customers && customers.map(customer => { return [customer.id, customer.firstName, customer.lastName, customer.payPeriod, customer.amount]; })}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
