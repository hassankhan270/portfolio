import React from "react";
import styles from "./mainheader.module.scss";
import { useTypedText } from "../typingtext";

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        {useTypedText("Hello everyone!", 50)}
        <br />
        I'm Muhammad Hassan Khan
      </h1>
      <h2>
        Welcome on my portfolio page! I'm a Software Engineer, currently working
        as a Full Stack Javascript & Typescript Developer.
      </h2>
    </div>
  );
}
