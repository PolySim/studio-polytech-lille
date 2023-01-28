import React, { useState, useEffect } from "react";
import { EditVideoLink } from "src/styled";
import { useParams } from "react-router-dom";
import getVideoLinkAdmin from "src/API/getVideoLinkAdmin";
import { VideoLinkAdminType } from "src/type";

const cleAPI = process.env.REACT_APP_API_URL;

export default function EditVideoLinkView(): JSX.Element {
  const [links, setLinks] = useState<VideoLinkAdminType>({
    extension: "",
    linkInfo: [],
    maxLinkId: -1,
  });
  const [files, setFiles] = useState<FileList | null>();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getVideoLinkAdmin(id || "");
      setLinks((curr) => data);
    }

    if (links.linkInfo.length === 0) {
      getData();
    }
  }, []);

  async function deleteLink(linkId: number) {
    try {
      const response = await fetch(`${cleAPI}/deleteLink/${linkId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
      setLinks((curr) => ({
        ...curr,
        linkInfo: curr.linkInfo.filter((link) => link.id !== linkId),
      }));
    } catch (error) {
      console.log(error);
    }
  }

  async function validLinkModification(event: any, idLink: number) {
    event.preventDefault();
    try {
      const response = await fetch(`${cleAPI}/updateVideoLink`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idLink,
          link: event.target.link.value,
        }),
      });
      const result = response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function createLink(event: any, idLink: number) {
    event.preventDefault();
    try {
      const urlList = event.target.link.value.split("/");
      const newUrl = `[youtube]${urlList[urlList.length - 1]}[/youtube]`;
      setLinks((curr) => ({
        ...curr,
        maxLinkAdmin: idLink,
        linkInfo: curr.linkInfo.concat([
          {
            id: idLink,
            link: newUrl,
          },
        ]),
      }));
      const response = await fetch(`${cleAPI}/createVideoLink`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idLink: idLink,
          idVideo: id,
          link: newUrl,
        }),
      });
      const result = response.json();
      console.log(result);
      await event.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles((curr) => event.target.files);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      try {
        const response = await fetch(`${cleAPI}/updateCoverVideo/${id}`, {
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

  return (
    <EditVideoLink>
      <div>
        <div>Photo de couverture</div>
        <div>
          <div>
            {links.extension !== "" ? (
              <img
                src={`${cleAPI}/videoImage/${id}/${links.extension}`}
                alt={`Image_${id}`}
              />
            ) : (
              <></>
            )}
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
        </div>
      </div>
      <div>
        <div>Ajouter ou supprimer des liens youtube</div>
        <div>
          {links.linkInfo.map((link) => (
            <form
              onSubmit={(e) => {
                validLinkModification(e, link.id);
              }}
              key={link.id}
            >
              <input type="text" name="link" defaultValue={link.link} />
              <label>
                <input type="submit" />
                <div>
                  <svg
                    fill="#000000"
                    height="24px"
                    width="24px"
                    viewBox="0 0 29.978 29.978"
                  >
                    <g>
                      <path
                        d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
		v-8.861H25.462z"
                      />
                      <path
                        d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
		c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
		c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
		C15.092,18.979,14.62,18.426,14.62,18.426z"
                      />
                    </g>
                  </svg>
                </div>
              </label>
              <div
                onClick={() => {
                  deleteLink(link.id);
                }}
              >
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 458.5 458.5"
                  width={"28px"}
                  height="26px"
                >
                  <g>
                    <g>
                      <path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421     c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508     c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z      M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501     c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778     c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657     c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z" />
                      <path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705     C214.249,385.607,220.965,392.323,229.249,392.323z" />
                      <path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705     C291.671,385.607,298.387,392.323,306.671,392.323z" />
                      <path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705     C136.828,385.607,143.544,392.323,151.828,392.323z" />
                    </g>
                  </g>
                </svg>
              </div>
            </form>
          ))}
        </div>
        <div>
          <form
            onSubmit={(e) => {
              createLink(e, links.maxLinkId + 1);
            }}
          >
            <input
              type="text"
              name="link"
              autoComplete="off"
              placeholder="Inserez un nouveau lien"
            />
            <label>
              <input type="submit" />
              <div>
                <svg
                  fill="#000000"
                  height="24px"
                  width="24px"
                  viewBox="0 0 29.978 29.978"
                >
                  <g>
                    <path
                      d="M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012
		v-8.861H25.462z"
                    />
                    <path
                      d="M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723
		c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742
		c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193
		C15.092,18.979,14.62,18.426,14.62,18.426z"
                    />
                  </g>
                </svg>
              </div>
            </label>
          </form>
        </div>
      </div>
    </EditVideoLink>
  );
}
