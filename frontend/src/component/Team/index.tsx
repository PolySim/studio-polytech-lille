import React, { useState, useEffect } from "react";
import { Team } from "src/styled";
import ImageTeamView from "./Image";
import { InfoTeamType, MemberType } from "src/type";
import getInfoTeam from "src/API/getInfoTeam";

const cleAPI = process.env.REACT_APP_API_URL;

export default function TeamView(): JSX.Element {
  const [years, setYears] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [members, setMembers] = useState<InfoTeamType>({});
  const [memberClick, setMemberClick] = useState<MemberType>({
    extension: "",
    firstName: "",
    lastName: "",
    id: -1,
    rank: "",
    subject: "",
  });

  useEffect(() => {
    async function getData() {
      const data = await getInfoTeam();
      setMembers((curr) => data);
      console.log(Object.entries(data));
    }

    getData();
  }, []);

  const onToggleYears = (newYears: number) => {
    years === newYears ? setYears(0) : setYears(newYears);
  };

  const textStyle = {
    select: {
      padding: "15px",
      maxHeight: "200vh",
      overflowY: "scroll",
    },

    notSelect: {
      maxHeight: "0px",
    },
  };

  return (
    <>
      {fullScreen ? (
        <ImageTeamView member={memberClick} setFullScreen={setFullScreen} />
      ) : (
        <></>
      )}
      <Team>
        {Object.entries(members)
          .reverse()
          .map((yearsMembers) => (
            <div key={yearsMembers[0]}>
              <div
                onClick={() => {
                  onToggleYears(parseInt(yearsMembers[0]));
                }}
              >
                {yearsMembers[0]} / {parseInt(yearsMembers[0]) + 1}
              </div>
              <div
                style={
                  parseInt(yearsMembers[0]) === years
                    ? textStyle.select
                    : textStyle.notSelect
                }
              >
                {yearsMembers[1].map((member) => (
                  <div key={member.lastName}>
                    <p>{`${member.firstName} ${member.lastName}`}</p>
                    <div>
                      <img
                        onClick={() => {
                          setFullScreen(true);
                          setMemberClick(member);
                        }}
                        src={`${cleAPI}/imageTeam/${member.id}/${member.extension}`}
                        alt={`${member.firstName} ${member.lastName}`}
                      />
                    </div>
                    <div>
                      <p>
                        {yearsMembers[0]}/{parseInt(yearsMembers[0]) + 1}
                      </p>
                      <p>{member.rank}</p>
                      <p>{member.subject}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </Team>
    </>
  );
}
