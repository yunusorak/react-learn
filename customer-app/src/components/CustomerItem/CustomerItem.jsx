// import "./CustomerItem.css";
// import styled from "styled-components";

import styles from "./CustomerItem.module.css";

// const DeleteButton = styled.button`
//   background-color: #892b2b;
//   padding: 10px;
//   transition: all 0.3s ease-in-out;

//   & :hover {
//     opacity: 0.5;
//   }
// `;

const CustomerItem = ({ customer, handleDelete }) => {
  console.log(styles);
  return (
    <li className={styles.customerItem}>
      <div className={styles.customerInfo}>
        <img
          src="https://i.pravatar.cc/300"
          alt=""
          className={styles["customer-avatar"]}
        />
        <span className={styles["customer-name"]} style={{ color: "#ff0008 " }}>
          {customer.customerName}
        </span>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => handleDelete(customer)}
      >
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
