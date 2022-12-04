import React, { useState, useEffect } from "react";
import getListImage from "src/API/getListImage";
import { useParams } from "react-router-dom";
import { ListImageType } from "src/type";
import { AlbumSelect } from "src/styled";
import JustListImageView from "src/component/Image/listImage";

export default function ListImageView(): JSX.Element {
  const params = useParams();
  const { id } = params;
  const [images, setImages] = useState<ListImageType>({
    album: ["", ""],
    images: [],
  });

  useEffect(() => {
    async function getData() {
      if (id) {
        const data = await getListImage(parseInt(id));
        setImages((curr) => data);
      }
    }
    getData();
  }, []);

  return (
    <AlbumSelect>
      <div>
        <div>{images.album[0]}</div>
        <div>{images.album[1]} vues</div>
      </div>
      <JustListImageView images={images.images} />
    </AlbumSelect>
  );
}
