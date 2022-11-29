import { useEffect, useRef, useState } from "react";
import { HeaderCss, LoginLink, Logo } from "./style";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup } from "react-bootstrap";
import styled, { keyframes } from "styled-components";

export const DropdownExampleSearchDropdown = (props: any) => {
  const [selectedThread, setThread] = useState("Support Dogs Thread")
  const [open, setOpen] = useState(false);

  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="dark">Thread</Button>

      <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="/">Support Dogs</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Textbooks</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Housing</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}