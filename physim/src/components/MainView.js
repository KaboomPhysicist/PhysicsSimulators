import React from "react";
import "../styles/MainView.css";
import SimDescriptor from "./SimDescriptor";

// import data of simulators
import dataSim from "../data/data.json";

// local imports
import MainInfo from "./MainInfo";

export default function MainView() {
  const logo = "resources/logos/UdeA.png";

  return (
    <div className="MainFrame">
      <div className="MainFrame pane-title">
        <div></div>
        <div>Proyecto simuladores</div>
        <img src={logo} alt="" height="80%" />
      </div>
      <div className="MainFrame-pane">
        <div className="MainFrame-pane pane-left">
          <MainInfo />
        </div>
        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 1"
                pathUrl={dataSim.sim01.path}
                imgDir={dataSim.sim01.icon}
                title={dataSim.sim01.title}
                abstract={dataSim.sim01.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 2"
                pathUrl={dataSim.sim02.path}
                imgDir={dataSim.sim02.icon}
                title={dataSim.sim02.title}
                abstract={dataSim.sim02.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 3"
                pathUrl={dataSim.sim03.path}
                imgDir={dataSim.sim03.icon}
                title={dataSim.sim03.title}
                abstract={dataSim.sim03.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 1"
                pathUrl={dataSim.sim01.path}
                imgDir={dataSim.sim01.icon}
                title={dataSim.sim01.title}
                abstract={dataSim.sim01.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 2"
                pathUrl={dataSim.sim02.path}
                imgDir={dataSim.sim02.icon}
                title={dataSim.sim02.title}
                abstract={dataSim.sim02.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 3"
                pathUrl={dataSim.sim03.path}
                imgDir={dataSim.sim03.icon}
                title={dataSim.sim03.title}
                abstract={dataSim.sim03.abst}
              />
            </div>
          </div>
        </div>
        <div className="SimFrame">
          <div className="Simulators-pane">
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 1"
                pathUrl={dataSim.sim01.path}
                imgDir={dataSim.sim01.icon}
                title={dataSim.sim01.title}
                abstract={dataSim.sim01.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 2"
                pathUrl={dataSim.sim02.path}
                imgDir={dataSim.sim02.icon}
                title={dataSim.sim02.title}
                abstract={dataSim.sim02.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 3"
                pathUrl={dataSim.sim03.path}
                imgDir={dataSim.sim03.icon}
                title={dataSim.sim03.title}
                abstract={dataSim.sim03.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 1"
                pathUrl={dataSim.sim01.path}
                imgDir={dataSim.sim01.icon}
                title={dataSim.sim01.title}
                abstract={dataSim.sim01.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 2"
                pathUrl={dataSim.sim02.path}
                imgDir={dataSim.sim02.icon}
                title={dataSim.sim02.title}
                abstract={dataSim.sim02.abst}
              />
            </div>
            <div className="SimButton">
              <SimDescriptor
                buttonLabel="Simulacion 3"
                pathUrl={dataSim.sim03.path}
                imgDir={dataSim.sim03.icon}
                title={dataSim.sim03.title}
                abstract={dataSim.sim03.abst}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}