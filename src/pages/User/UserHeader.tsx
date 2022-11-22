import React from "react";
import { useLocation } from "react-router-dom";
import { Title } from "../../styles/GlobalStyle";
import { UserHeaderCss } from "./style";
import UserHeaderNav from "./UserHeaderNav";

function UserHeader() {
  const [title, setTitle] = React.useState("");
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case "/conta/posta":
        setTitle("Post Your Photo");
        break;
      case "/conta/clubs":
        setTitle("Clubs");
        break;
      default:
        setTitle("My Account");
        break;
    }
  }, [pathname]);

  return (
    <UserHeaderCss>
      <Title className="animeleft">{title}</Title>
      <UserHeaderNav />
    </UserHeaderCss>
  );
}

export default UserHeader;
