import React, { useState, useEffect } from "react";
import getAllVideo from "src/API/getAllVideos";
import { Link } from "react-router-dom";
import { AllVideosType } from "src/type";
import { AllVideo } from "src/styled";

const cleAPI = process.env.REACT_APP_API_URL;

export default function AllVideoView(): JSX.Element {
  const [videos, setVideos] = useState<AllVideosType>([]);

  useEffect(() => {
    async function getData() {
      const data = await getAllVideo();
      setVideos((curr) => data);
    }

    if (videos.length === 0) {
      getData();
    }
  }, []);

  const rewriteDate = (date: string) => {
    const dateList = date
      .split("/")
      .map((elt) => (elt.length === 1 ? "0" + elt : elt));
    return dateList.join("-");
  };

  const deleteVideo = (id: number) => {
    setVideos((curr) => curr.filter((video) => video.id !== id));
  };

  async function changeSecure(id: number, value: number) {
    try {
      const response = await fetch(
        `${cleAPI}/updateSecureVideo/${id}/${value}`
      );
      const result = await response.json();
      console.log(result);
      setVideos((curr) =>
        curr.map((video) =>
          video.id === id
            ? video.secure === 0
              ? { ...video, secure: 1 }
              : { ...video, secure: 0 }
            : video
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event: any, id: number) {
    event.preventDefault();
    try {
      const response = await fetch(`${cleAPI}/updateVideoInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: event.target.title.value,
          category: event.target.category.value,
          date: event.target.date.value,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AllVideo>
      <div>
        <div>Couverture</div>
        <div>Titre</div>
        <div>Date</div>
        <div>Vues</div>
        <div>Sec</div>
        <div>Categorie</div>
        <div></div>
      </div>
      {videos.map((video) => (
        <form
          onSubmit={(e) => {
            handleSubmit(e, video.id);
          }}
          key={video.id}
        >
          <div>
            <img
              src={`${cleAPI}/videoImage/${video.id}/${video.extension}`}
              alt={video.title}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              defaultValue={video.title}
              placeholder="Titre"
            />
          </div>
          <div>
            <input
              type="date"
              name="date"
              defaultValue={rewriteDate(video.date)}
            />
          </div>
          <div>{video.view}</div>
          <div
            onClick={() => {
              video.secure === 1
                ? changeSecure(video.id, 0)
                : changeSecure(video.id, 1);
            }}
          >
            {video.secure === 1 ? (
              <svg
                x="0px"
                y="0px"
                width={"20px"}
                height="20px"
                viewBox="0 0 591.6 591.6"
              >
                <path d="M540.6,224.4h-51v-30.6C489.6,86.904,402.696,0,295.8,0S102,86.904,102,193.8v30.6H51c-28.152,0-51,22.848-51,51v265.2    c0,28.152,22.848,51,51,51h489.6c28.152,0,51-22.848,51-51V275.4C591.6,247.248,568.752,224.4,540.6,224.4z M122.4,193.8    c0-95.676,77.724-173.4,173.4-173.4s173.4,77.724,173.4,173.4v30.6H122.4V193.8z M571.2,540.6c0,16.932-13.668,30.6-30.6,30.6H51    c-16.932,0-30.6-13.668-30.6-30.6V275.4c0-16.932,13.668-30.6,30.6-30.6h489.6c16.932,0,30.6,13.668,30.6,30.6V540.6z" />
                <path d="M295.8,285.6c-29.376,0-56.1,18.36-66.708,45.9c-9.996,26.316-3.672,55.692,15.504,73.44v74.46    c0,18.156,9.792,35.088,25.5,44.268c7.752,4.488,16.524,6.732,25.5,6.732s17.748-2.448,25.5-6.732    c15.708-9.18,25.5-25.908,25.5-44.064v-74.46c19.176-17.748,25.704-47.124,15.504-73.44C351.9,303.96,325.176,285.6,295.8,285.6z     M330.48,392.088c-2.448,1.836-3.876,4.896-3.876,8.16v79.356c0,10.812-5.916,21.012-15.3,26.52c-9.384,5.304-21.216,5.304-30.6,0    c-9.384-5.508-15.3-15.504-15.3-26.52v-79.356c0-3.06-1.428-6.12-3.876-8.16c-15.096-11.832-20.604-33.66-13.056-53.448    c7.548-19.584,26.724-32.64,47.532-32.64c20.808,0,40.188,13.056,47.532,32.64C350.88,358.428,345.576,380.256,330.48,392.088z" />
                <path d="M132.6,270.3H51c-2.856,0-5.1,2.244-5.1,5.1V357c0,2.856,2.244,5.1,5.1,5.1s5.1-2.244,5.1-5.1v-76.5h76.5    c2.856,0,5.1-2.244,5.1-5.1S135.456,270.3,132.6,270.3z" />
              </svg>
            ) : (
              <svg
                width={"20px"}
                height="20px"
                x="0px"
                y="0px"
                viewBox="0 0 459.292 459.292"
              >
                <g>
                  <g>
                    <path d="M359.078,172.256h-6.78v-49.603C352.299,55.022,297.276,0,229.646,0S106.992,55.022,106.992,122.653    c0,8.284,6.716,15,15,15h73.993c8.284,0,15-6.716,15-15c0-10.289,8.371-18.66,18.66-18.66c10.29,0,18.661,8.371,18.661,18.66    v49.603H100.214c-18.122,0-32.865,14.743-32.865,32.865v221.306c0,18.122,14.743,32.865,32.865,32.865h258.864    c18.122,0,32.864-14.743,32.864-32.865V205.121C391.943,186.999,377.2,172.256,359.078,172.256z M229.646,73.993    c-21.599,0-39.957,14.147-46.295,33.66h-45.145C145.394,63.669,183.661,30,229.646,30c51.089,0,92.653,41.564,92.653,92.653    v47.208h-43.992v-47.208C278.307,95.822,256.477,73.993,229.646,73.993z M361.943,426.426c0,1.58-1.285,2.865-2.864,2.865H100.214    c-1.58,0-2.865-1.285-2.865-2.865V205.121c0-1.58,1.285-2.865,2.865-2.865h258.864c1.579,0,2.864,1.285,2.864,2.865V426.426z" />
                  </g>
                </g>
              </svg>
            )}
          </div>
          <div>
            <select name="category" defaultValue={video.category}>
              <option value="1">Journal Télévisé</option>
              <option value="2">Pub des JT</option>
              <option value="3">Court métrage</option>
              <option value="4">Trailer</option>
              <option value="5">Inclassable</option>
              <option value="6">Vidéos des Clubs</option>
              <option value="7">La Radio</option>
            </select>
          </div>
          <div>
            <Link to={`/admin/EditVideo/${video.id}`}>
              <svg
                fill="#000000"
                height="24px"
                width="24px"
                viewBox="0 0 306.637 306.637"
              >
                <g>
                  <path
                    d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
			l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
                  />
                  <path
                    d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
			L265.13,75.602L231.035,41.507z"
                  />
                </g>
              </svg>
            </Link>
            <div>
              <label>
                <input type="submit" />
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
              </label>
            </div>
            <div
              onClick={() => {
                deleteVideo(video.id);
              }}
            >
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 458.5 458.5"
                width={"24px"}
                height="24px"
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
          </div>
        </form>
      ))}
    </AllVideo>
  );
}
