import React from "react";
import Head from "next/head";
import { Fade } from "react-awesome-reveal";
import { VFooter, VMenuBar, VTimelineGrid } from "../../utils";
import styles from "./work.module.scss";

export default function VWork() {
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta
          name="description"
          content="Muhammad Hassan Khan Portfolio Page"
        />
        <meta name="author" content="Muhammad Hassan Khan" />
        <meta
          name="keywords"
          content="Muhammad Hassan Khan, Portfolio, Frontend"
        />
        <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon" />
      </Head>
      <VMenuBar activeTab="Work" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <Fade>
            <h1>My work history</h1>
            <h2>
              I have a strong computer science background and a passion for
              technology. With a solid foundation in programming languages such
              as  Javascript, Typescript, React Js , Node Js , Nest Js ,
              React Native , Python and R. I have developed a wide range of skills in
              software development, web development , mobile development and data
              analysis. My portfolio showcases various projects that demonstrate
              my ability to solve complex problems and create innovative
              solutions. From developing mobile applications to designing
              responsive websites,I am proficient in custom styling, as well as
              utilizing popular CSS frameworks such as Bootstrap and Tailwind
              CSS. With a deep understanding of CSS, I have the ability to
              create visually appealing and responsive designs that enhance the
              user experience. I have a proven track record of delivering
              high-quality results. Additionally, my experience includes working
              with databases, implementing algorithms, and utilizing machine
              learning techniques. With my strong analytical and problem-solving
              skills, I am constantly seeking opportunities to expand my
              knowledge and stay up-to-date with the latest advancements in
              computer science. My portfolio reflects my commitment to
              excellence and my drive to make a positive impact in the field of
              technology.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  );
}
