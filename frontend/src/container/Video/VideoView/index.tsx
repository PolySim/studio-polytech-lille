import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Video } from "src/styled";
import { VideoLinkType } from "src/type";
import getVideoLink from "src/API/getVideoLink";

export default function VideoView(): JSX.Element {
  const params = useParams();
  const { id } = params;
  const [links, setLinks] = useState<VideoLinkType>({
    extension: "",
    link: [],
    nbViews: 0,
    title: "",
  });

  useEffect(() => {
    async function getData() {
      if (id) {
        const data = await getVideoLink(id);
        setLinks((curr) => data);
      }
    }
    getData();
  }, [id]);

  return (
    <Video>
      {links.extension === "" ? (
        <></>
      ) : (
        <>
          <div>
            <div>{links.title}</div>
            <div>{links.nbViews}</div>
          </div>
          <div>
            {links.link.map((link, i) =>
              link.includes("dailymotion") ? (
                <iframe
                  key={i}
                  src={`https://www.dailymotion.com/embed/video/${link.slice(
                    13,
                    19
                  )}?rel=0`}
                  title={links.title}
                ></iframe>
              ) : (
                <iframe
                  key={i}
                  src={`https://www.youtube.com/embed/${link.slice(9, -10)}`}
                  title={links.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              )
            )}
          </div>
        </>
      )}
    </Video>
  );
}
