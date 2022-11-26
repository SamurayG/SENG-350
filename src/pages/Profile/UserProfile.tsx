import { useParams } from "react-router-dom";
import Feed from "../../Components/Feed/Feed";
import Head from "../../Components/Head/Head";
import Error from "../../Helpers/Error/Error";
import { Title } from "../../styles/GlobalStyle";

const UserProfile = () => {
  const { user } = useParams();
  if (user)
    return (
      <section className="container mainContainer">
        <Head title={user + "'s Profile"} description="Profile page" />
        <Title style={{ margin: "2rem 0" }}>{user}</Title>
        <Feed user={user} />
      </section>
    );
  return <Error error="Invalid page" />;
};

export default UserProfile;
