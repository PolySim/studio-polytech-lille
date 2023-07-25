import React, { useRef, useState, useEffect } from "react";
import { CreateVideo } from "src/styled";
import getVideoCategory from "src/API/getVideoCategory";
import { getMaxVideoId } from "src/API/getVideoMaxId";
import { VideoCategoryType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function CreateVideoView(): JSX.Element {
  const [categorySelected, setCategorySelected] = useState<number>(0);
  const [categories, setCategories] = useState<VideoCategoryType>([]);
  const [title, setTitle] = useState<string>("");
  const [files, setFiles] = useState<FileList | null>();
  const [videoId, setVideoId] = useState<number>(0);
  const [valid, setValid] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function getData() {
      const data = await getVideoCategory();
      setCategories((curr) => data);
      const maxId = await getMaxVideoId();
      setVideoId((curr) => maxId[0] + 1);
    }
    if (categories.length === 0) {
      getData();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles((curr) => event.target.files);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (title !== "" && files) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      try {
        const response = await fetch(`${cleAPI}/addImageVideo/${videoId}`, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function handleCreate() {
    if (
      titleRef.current &&
      titleRef.current.value !== "" &&
      urlRef.current &&
      urlRef.current.value !== "" &&
      categorySelected !== 0 &&
      !valid
    ) {
      try {
        const urlList = urlRef.current.value.split("/");
        const newUrl = `[youtube]${urlList[urlList.length - 1]}[/youtube]`;
        const response = await fetch(`${cleAPI}/createVideo`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleRef.current.value,
            url: newUrl,
            category: categorySelected,
            id: videoId,
            date: new Date()
              .toLocaleDateString()
              .split("/")
              .reverse()
              .join("-"),
          }),
        });
        const result = await response.json();
        console.log(result);
        setValid((curr) => true);
        titleRef.current.style.backgroundColor = "#80cef0";
        urlRef.current.style.backgroundColor = "#80cef0";
      } catch (error) {
        console.error(error);
      }
    }
    if (valid && titleRef.current && urlRef.current) {
      setValid((curr) => false);
      titleRef.current.style.backgroundColor = "none";
      urlRef.current.style.backgroundColor = "none";
      titleRef.current.value = "";
      urlRef.current.value = "";
      setCategorySelected((curr) => 0);
      setVideoId((curr) => curr + 1);
    }
  }

  return (
    <CreateVideo>
      <div>Ajouter une vidéo</div>
      <div>
        <div>
          <div>Titre</div>
          <input ref={titleRef} type="text" placeholder="Rentre un titre" />
          <div>Lien</div>
          <input
            ref={urlRef}
            type="text"
            placeholder="Rentre le lien de la video"
          />
        </div>
        <div>
          {categories.map((category) => (
            <div
              onClick={() => {
                setCategorySelected((curr) => category.id);
              }}
              key={category.name}
              style={{
                backgroundColor:
                  categorySelected === category.id ? "#80cef0" : "#ddd",
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setTitle((curr) => title);
            handleCreate();
          }}
        >
          {valid ? "Nouveau" : "Valider"}
        </div>
      </div>
      <div>
        <div>Sélectionner votre image</div>
        <form
          method="post"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="file"
            name="image"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input type="submit" value="Télécharger" />
        </form>
      </div>
    </CreateVideo>
  );
}
