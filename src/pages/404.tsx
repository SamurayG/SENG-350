import Head from "../Components/Head/Head";
import { Title } from "../styles/GlobalStyle";

function NotFound404() {
  return (
    <div className="container mainContainer" style={{ margin: "3rem auto" }}>
      <Head title={"Page not found"} description="My Account" />
      <Title>Error: 404</Title>
      <p>Page not found</p>
    </div>
  );
}

export default NotFound404;
