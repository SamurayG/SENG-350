import React, { FormEvent } from "react";
import Button from "../../../Components/Form/Button/Button";
import Input from "../../../Components/Form/Input/Input";
import UserContext from "../../../Contexts/UserContext";
import Error from "../../../Helpers/Error/Error";
import useForm from "../../../Hooks/useForm";
import useFetch from "../../../Hooks/useFetch";
import { AnimeLeft, Title } from "../../../styles/GlobalStyle";
import { LoginForms } from "../style";
import { USER_POST } from "../../../services/Api";
import Head from "../../../Components/Head/Head";
<script src="https://smtpjs.com/v3/smtp.js"></script>

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch();
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const confirmpassword = useForm("confirmpassword");

  async function CreateUser(e: FormEvent) {
    e.preventDefault();

    //TODO: Add error handling for when the password and confirmpassword don't match. 
    //Setting these errors should probably be done in SENG-350/src/Hooks/useForm.jsx
    if (username.validate() && email.validate() && password.validate() && confirmpassword.validate() && confirmpassword.value === password.value) {
      const { options, url } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      try {
        const { response } = await request(url, options);
        if (response?.ok) userLogin(username.value, password.value);
      } catch (er) {
        console.log(er);
      }
    }

      //Sending a varification email
    function sendEmail(){  
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : email.value,
        From : "you@isp.com",
        Subject : "Email Varification",
        Body : "Please varify the email address."
    }).then(
      message => alert(message)
    );
  }
    
  }
  return (
    <AnimeLeft>
      <Head title={"Create account"} description="Account login" />
      <Title>Register</Title>
      <LoginForms onSubmit={CreateUser}>
        <Input {...username} label="Username" type="text" name="username" />
        <Input {...email} label="Email" type="email" name="email" />
        {/* <form method="post">
          <input type = "button" value = "Varify Email" onclick = "sendEmail()"/>
        </form> */}
        <Input {...password} label="Password" type="password" name="password" />
        <Input {...confirmpassword} label="Confirm Password" type="password" name="confirmpassword" />    
        {!loading ? (
          <Button text="Register" />
        ) : (
          <Button text="Loading..." disabled={true} />
        )}
        {error && <Error error={error} />}
      </LoginForms>
    </AnimeLeft>
  );
}

export default LoginCreate;
