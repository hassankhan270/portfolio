import React from "react";
import { VIcon } from "../icon";
import {
  affinityLogo,
  affinityLogoHover,
  angularLogo,
  angularLogoHover,
  cssLogo,
  cssLogoHover,
  davinciLogo,
  davinciLogoHover,
  gitLogo,
  gitLogoHover,
  htmlLogo,
  htmlLogoHover,
  jestLogo,
  jestLogoHover,
  jsLogo,
  jsLogoHover,
  lessLogo,
  lessLogoHover,
  linuxLogo,
  linuxLogoHover,
  mysqlLogo,
  mysqlLogoHover,
  npmLogo,
  npmLogoHover,
  pythonLogo,
  pythonLogoHover,
  reactLogo,
  reactLogoHover,
  sassLogo,
  sassLogoHover,
  tsLogo,
  tsLogoHover,
  vsLogo,
  vsLogoHover,
  windowsLogo,
  windowsLogoHover,
  yarnLogo,
  yarnLogoHover,
} from "../../assets";
import styles from "./toolstech.module.scss";

export function VToolsTech() {
  return (
    <div className={styles.technologiesIcons}>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={htmlLogo}
          onHoverIcon={htmlLogoHover}
          height="46px"
          width="46px"
          name="HTML"
          tooltipID="html-tooltip"
        />
        <VIcon
          defaulIcon={cssLogo}
          onHoverIcon={cssLogoHover}
          height="65px"
          width="65px"
          name="CSS"
          tooltipID="css-tooltip"
        />
        <VIcon
          defaulIcon={jsLogo}
          onHoverIcon={jsLogoHover}
          height="55px"
          width="55px"
          name="JavaScript"
          tooltipID="js-tooltip"
        />
        <VIcon
          defaulIcon={tsLogo}
          onHoverIcon={tsLogoHover}
          height="65px"
          width="65px"
          name="TypeScript"
          tooltipID="ts-tooltip"
        />
        <VIcon
          defaulIcon={pythonLogo}
          onHoverIcon={pythonLogoHover}
          height="55px"
          width="55px"
          name="Python"
          tooltipID="python-tooltip"
        />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
          name="React Js"
          tooltipID="react-tooltip"
        />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
          name="Next Js"
          tooltipID="react-tooltip"
        />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
          name="Node Js"
          tooltipID="react-tooltip"
        />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
          name="Nest Js"
          tooltipID="react-tooltip"
        />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={npmLogo}
          onHoverIcon={npmLogoHover}
          height="65px"
          width="65px"
          name="Node Package Manager"
          tooltipID="npm-tooltip"
        />
        <VIcon
          defaulIcon={yarnLogo}
          onHoverIcon={yarnLogoHover}
          height="65px"
          width="65px"
          name="yarn"
          tooltipID="yarn-tooltip"
        />
        <VIcon
          defaulIcon={gitLogo}
          onHoverIcon={gitLogoHover}
          height="65px"
          width="65px"
          name="Git"
          tooltipID="git-tooltip"
        />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={mysqlLogo}
          onHoverIcon={mysqlLogoHover}
          height="70px"
          width="70px"
          name="MySQL"
          tooltipID="mysql-tooltip"
        />
        <VIcon
          defaulIcon={mysqlLogo}
          onHoverIcon={mysqlLogoHover}
          height="70px"
          width="70px"
          name="Mongo DB"
          tooltipID="mysql-tooltip"
        />
        <VIcon
          defaulIcon={mysqlLogo}
          onHoverIcon={mysqlLogoHover}
          height="70px"
          width="70px"
          name="PostgreSql"
          tooltipID="mysql-tooltip"
        />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={vsLogo}
          onHoverIcon={vsLogoHover}
          height="50px"
          width="50px"
          name="Visual Studio Code"
          tooltipID="vs-tooltip"
        />
      </div>
    </div>
  );
}
