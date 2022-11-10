import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Form/Button/Button";
import Input from "../../Components/Form/Input/Input";
import Head from "../../Components/Head/Head";
import Error from "../../Helpers/Error/Error";
import useFetch from "../../Hooks/useFetch";
import useForm from "../../Hooks/useForm";
import { PHOTO_POST } from "../../services/Api";
import { AnimeLeft } from "../../styles/GlobalStyle";
import { UserPhotoPostCss, UserPhotoPostPhotoPreviewCss } from "./style";

function UserPhotoPost() {
  const whereToPost = useForm("whereToPost");
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const navigate = useNavigate();
  const [img, setImg] = React.useState({ raw: "", preview: "" });
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  async function handleSubmitDogPhoto(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);
    const { url, options } = PHOTO_POST(formData);

    await request(url, options);
  }

  function handleImgChange({ target }: any) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <AnimeLeft>
      <UserPhotoPostCss>
        <Head title={"Post Photo"} description="My Account" />
        <form onSubmit={handleSubmitDogPhoto}>
          <Input label="Where To Post" type="text" name="whereToPost" {...whereToPost} />
          <Input label="Name" type="text" name="name" {...nome} />
          <Input label="Weight" type="number" name="weight" {...peso} />
          <Input label="Age" type="number" name="age" {...idade} />
          <input
            type="file"
            name="file"
            id="file"
            className="file"
            onChange={handleImgChange}
          />
          <Button text="Post Photo" disabled={loading} />
          {error && <Error error={error} />}
        </form>
        <div>
          {img.preview && <UserPhotoPostPhotoPreviewCss img={img.preview} />}
        </div>
      </UserPhotoPostCss>
    </AnimeLeft>
  );
}

export default UserPhotoPost;
