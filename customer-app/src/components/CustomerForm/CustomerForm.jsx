import { useState } from "react";
import styles from "./CustomerForm.module.css";
// import styled from "styled-components";

// const Form = styled.form`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   column-gap: 10px;
//   margin-bottom: 20px;

//   & input {
//     position: relative;
//     cursor: text;
//     font-size: 14px;
//     line-height: 20px;
//     padding: 0 16px;
//     height: 48px;
//     background-color: ${(props) => (props.invalid ? "white" : "red")};
//     border: 1px solid #d6d6e7;
//     border-radius: 3px;
//     color: rgb(35, 38, 59);
//     box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
//     overflow: hidden;
//     transition: all 100ms ease-in-out;
//     flex: 1;

//     & ::placeholder {
//       color: ${(props) => (props.invalid ? "red" : "white")};
//     }
//   }
// `;

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (customerName.trim().length <= 2) {
      alert("Müşteri ismi en az 3 karakterden oluşmalı");
      return true;
    }
    const newCustomer = {
      id: Math.random(),
      customerName: customerName.trim(),
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  const changeHandlerName = (e) => {
    if (e.target.value.trim().length <= 2) {
      setIsValid(false);
    }
    e.target.value.trim().length <= 2 ? setIsValid(false) : setIsValid(true);

    setCustomerName(e.target.value);
  };

  return (
    <form
      className={styles["customer-form"]}
      onSubmit={handleSubmit}
      invalid={isValid}
    >
      <input
        type="text"
        className={`${styles["customer-input"]} ${isValid ? "white" : "red"}`}
        // className={`customer-input ${isValid ? "white" : "red"}`}
        placeholder="Add a new customer"
        onChange={changeHandlerName}
        value={customerName}
        style={{ backgroundColor: isValid ? "" : "red" }}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
