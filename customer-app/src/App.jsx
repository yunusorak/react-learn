import { useState } from "react";
import "./App.css";
import CustomerForm from "./components/CustomerForm/CustomerForm";
import CustomerList from "./components/CustomerList/CustomerList";
import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 10px;

  & h1 {
    margin-bottom: 20px;

    @media screen and (max-width: 992px) {
      font-size: 20px;
    }
  }
`;

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
    // setCustomers([...customers, newCustomer]);
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  return (
    <AppWrapper className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </AppWrapper>
  );
}

export default App;
