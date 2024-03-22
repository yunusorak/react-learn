import React, { useMemo } from "react";

const List = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("List working");
    return items.sort((a, b) => {
      b - a;
    });
  }, [items]);
  const listItems = sortedItems;

  return (
    <>
      {listItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};

export default List;
