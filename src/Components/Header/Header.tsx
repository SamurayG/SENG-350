import React, { useEffect, useRef, useState } from "react";
import { HeaderCss, LoginLink, Logo } from "./style";
import { UserContext } from "../../Contexts/UserContext";
import { DropdownExampleSearchDropdown } from "./DropdownExampleSearchDropdown";

function Header() {
  const [open, setOpen] = useState(false);
  const { data } = React.useContext(UserContext);

  const onClick = () => {
    setOpen(false);
  };

  return (
    <HeaderCss>
      <nav className="container">
        <DropdownExampleSearchDropdown props={{ open: open }} />

        {data ? (
          <LoginLink to="/conta" onClick={onClick}>{data?.nome}</LoginLink>
        ) : (
          <LoginLink to="/login" onClick={onClick}></LoginLink>
        )}

      </nav>
    </HeaderCss>
  );
}

export default Header;
