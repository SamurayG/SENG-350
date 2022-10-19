import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../services/Api";
import { ButtonDelete } from "./style";

function PhotoDelete({ id }: { id: number }) {
  const { loading, request } = useFetch();
  const handleDeletePhoto = async () => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      const { options, url } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response?.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Deleting</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleDeletePhoto}>Delete</ButtonDelete>
      )}
    </>
  );
}

export default PhotoDelete;
