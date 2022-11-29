import { useEffect, useRef, useState } from "react";
import "./DropdownExampleSearchDropdown.css";
import { HeaderCss, LoginLink, Logo } from "./style";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
//let menuRef = useRef();

// function DropdownItem(props: any) {
//   return (
//     <li className='dropdownItem'>
//       <Logo to="/" aria-label="Dogs- Home">
//         <a> {props.text} </a>
//       </Logo>
//     </li>
//   );
// }

export const DropdownExampleSearchDropdown = (props: any) => {
  const [selectedThread, setThread] = useState("Support Dogs Thread")
  const [open, setOpen] = useState(false);

  return (
    // <div>
    <DropdownButton id="dropdown-basic-button" title="Selected Thread">
      <Dropdown.Item href="/">Support Dogs Thread</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Textbooks Thread</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Housing Thread</Dropdown.Item>
    </DropdownButton>
    // </div>
  )
}
