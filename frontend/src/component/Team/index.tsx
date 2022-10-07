import React, { useState } from "react";
import { Team } from "src/styled";
import ImageTeamView from "./Image";

export default function TeamView(): JSX.Element {
  const [years, setYears] = useState<number>(0);
  const [fullScreen, setFullScreen] = useState<boolean>(false);

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
        <ImageTeamView name="servan" setFullScreen={setFullScreen} />
      ) : (
        <></>
      )}
      <Team>
        <div>
          <div
            onClick={() => {
              onToggleYears(2022);
            }}
          >
            2022/2023
          </div>
          <div style={2022 === years ? textStyle.select : textStyle.notSelect}>
            <div>
              <p>Servan Delahaies</p>
              <div>
                <img
                  onClick={() => {
                    setFullScreen(true);
                  }}
                  src={require("./servan.jpeg")}
                  alt="Servan"
                />
              </div>
              <div>
                <p>2022/2023</p>
                <p>Président</p>
                <p>SE</p>
              </div>
            </div>
            <div>
              <p>Jason Delannoy</p>
              <div>
                <img src={require("./jason.jpeg")} alt="Jason" />
              </div>
              <div>
                <p>2022/2023</p>
                <p>Vice-Président</p>
                <p>SE</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2019);
            }}
          >
            2019/2020
          </div>
          <div
            style={2019 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2018);
            }}
          >
            2018/2019
          </div>
          <div
            style={2018 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2017);
            }}
          >
            2017/2018
          </div>
          <div
            style={2017 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2016);
            }}
          >
            2016/2017
          </div>
          <div
            style={2016 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2015);
            }}
          >
            2015/2016
          </div>
          <div
            style={2015 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2014);
            }}
          >
            2014/2015
          </div>
          <div
            style={2014 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2013);
            }}
          >
            2013/2014
          </div>
          <div
            style={2013 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2012);
            }}
          >
            2012/2013
          </div>
          <div
            style={2012 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2011);
            }}
          >
            2011/2012
          </div>
          <div
            style={2011 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
        <div>
          <div
            onClick={() => {
              onToggleYears(2010);
            }}
          >
            2010/2011
          </div>
          <div
            style={2010 === years ? textStyle.select : textStyle.notSelect}
          ></div>
        </div>
      </Team>
    </>
  );
}
