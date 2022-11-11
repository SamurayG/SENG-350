import { useEffect, useRef, useState } from "react";
import "./DropdownExampleSearchDropdown.css";
import { HeaderCss, LoginLink, Logo } from "./style";

//let menuRef = useRef();

function DropdownItem(props: any) {
  return (
    <li className='dropdownItem'>
      <Logo to="/" aria-label="Dogs- Home">
        <a> {props.text} </a>
      </Logo>
    </li>
  );
}

export const DropdownExampleSearchDropdown = (props:any) => {
  const [selectedThread, setThread] = useState("Support Dogs Thread")
  const [open, setOpen] = useState(false);

  return (
    <div className='menu-container' >
      <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
        <Logo to="/" aria-label="Dogs- Home">
          <p>{selectedThread}</p>
        </Logo>
      </div>

      <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
        <h3>Threads you are subscribed to<br /></h3>
        <ul>
          <DropdownItem text={"Support Dogs Thread"} />
          <DropdownItem text={"Textbooks Thread"} />
          <DropdownItem text={"Housing Thread"} />
          <DropdownItem text={"Academic Advising Thread"} />
        </ul>
      </div>
    </div>
  )
}
