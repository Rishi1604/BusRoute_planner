import { useState } from "react";

function ListGroup() {
  let items = ["Pooja", "Rishi", "Santhosh", "Aarthi"];
  const [SelectedIndex, SetSelectedIndex] = useState(-1);

  let num = [];
  for (let i = 0; i < 6; i++) {
    num.push(<li key={i}>Number : {i}</li>);
  }
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => SetSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <h4>{num}</h4>
    </>
  );
}

export default ListGroup;
