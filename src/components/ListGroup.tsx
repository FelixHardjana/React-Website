import { useState } from "react";

  // { items: [], heading: string}
  interface Props{
    items: string[];
    heading: string;
  }



function ListGroup(props: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return(
  <>
  <h1>List</h1>
  {/* { items.length === 0 ? <p> No item found</p> : null } */}
  { props.items.length === 0 && <p>No item found</p>}
  <ul className="list-group">
      {props.items.map((item, index) => (
        <li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } onClick={() => {setSelectedIndex(index);}} key={item}>{item}</li>
      ))}
  </ul>
  </>
  );
}

export default ListGroup;
