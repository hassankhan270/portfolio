import Image from "next/image";
import { nobleLogo, usLogo, waskoLogo, tellyoLogo } from "../../assets";
import { getDate } from "../date";
import styles from "./timelinegrid.module.scss";

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2017</h1>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>Hover to zoom.</h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="University of Silesia logo."
                src={usLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>
                FAST National University of Computer and Emerging Sciences
              </h1>
              <h2 className={styles.cardContentDetails}>Karachi</h2>
              <h2 className={styles.cardContentDetails}>
                28-08-2017 - 16-06-2021
              </h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Modules included:
            <br />
            1st Year: Introduction to Computer, Basic Electronics , Digital
            Logic Design , Object Oriented Programming and Calculus 1 & 2.
            <br />
            <br />
            2nd Year: Data Structures , Computer Org. and Assembly Language ,
            Discrete Structures , Operating Systems , Database Systems , Design
            & Analysis of Algorithms , Probability & Statistics and Linear
            Algebra.
            <br />
            <br />
            3rd Year: Theory of Automata , Computer Networks, Numerical
            Computing , Software Design and Analysis, Data Science , Artificial
            Intelligence ,Computer Architecture and Software Engineering
            <br />
            <br />
            4th Year: FYP 1 & 2, Information Security , Professional Issues In
            IT , Web Engineering , Human Computer Interaction , BlockChain and
            Cryptocurrency , IOT and Deep Learning.
            <br />
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <h1>15-12-2020 - Present</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Wasko company logo."
                src={waskoLogo}
                height={13}
                width={55}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Lyftron Data</h1>
              <h2 className={styles.cardContentDetails}>Virginia</h2>
              <h2 className={styles.cardContentDetails}>15-12-2020 - 06-05-2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Worked well independently and in a team to solve problems. 
            <br/>
            Scrap the data using python language. 
            <br/>
            Made a script to made a user friendly SQL query to get data and convert into tabular or user readable format.
            <br />
            <br />
            Main responsibilities:
            <br />
            - designed custom and reuseable JSON,
            <br />- creating an asynchronous communication between client and
            server via <b>REST API</b>,<br />
            - setting up server with database.
            <br />
            <br />
            Languages: Python.<br />
            Database: <b>MySQL</b>.<br />
            <br />
            Version Control System: <b>GitHub.</b>
            <br />
            Issue trancing: Trello.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div
              className={styles.companyLogo}
              style={{ backgroundColor: "#0E2245" }}
            >
              <Image
                alt="Noble Systems company logo."
                src={nobleLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Noble Systems</h1>
              <h2 className={styles.cardContentDetails}>Kraków</h2>
              <h2 className={styles.cardContentDetails}>10.2020 - 09.2021</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building from scratch a complete WebRTC Phone web application, based
            on SIP.js library. Major functionalities:
            <br />
            - making new, answering, and holding calls (conferences as well),
            <br />
            - contacts list with functionality of adding, deleting, and editing
            contacts. Search and sort options applied as well,
            <br />
            - history of calls with summarized data,
            <br />
            - voicemail and DTMF sending,
            <br />
            - account and phone input/output audio settings.
            <br />
            <br />
            My main responsibilities on the front-end side of the project:
            <br />
            -working collaboratively in team environment, resolving conflicts,
            <br />
            -writing a clean and high-quality codebase,
            <br />
            -refactoring of codebase,
            <br />
            -writing the documentation,
            <br />
            -implementation of the functionalities from the documentation, given
            previously by PM,
            <br />
            -creating responsive, accessible and efficient web views, based on
            previously given mockups,
            <br />
            -reviewing pull requests of my less experienced peers, and helping
            them with styling/creating components,
            <br />
            -writing efficient unit tests.
            <br />
            <br />
            Achievements I am most proud of:
            <br />
            -building a 'light' version of main application that could be
            inserted into an iframe and creating an API via those two elements
            could communicate,
            <br />
            -helping my peer with fixing up commit history on main branch in out
            project, after his mistaken merging,
            <br />
            -creating documentation with code standards of codebase of our
            project,
            <br />
            -implementing CSS modules into our main project, which improved team
            workflow noticeably,
            <br />
            -constructing complete translation system which let the user to
            change language of application (if not chosen, language was detected
            automatically).
            <br />
            Agile management: <b>Scrum, Agile</b>.<br />
            Version control system: <b>Azure DevOps, Bitbucket</b>.<br />
            Issue tracking tool: <b>Jira, Trelllo</b>.<br />
            Knowledge repository: <b>Confluence</b>.<br />
            Styling: <b>SCSS, LESS, Semantic UI</b>.<br />
            Testing: <b>React Testing Library, JEST</b>.<br />
            Communication tool: <b>Microsoft Teams, Zoom</b>.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Tellyo company logo."
                src={tellyoLogo}
                height={50}
                width={50}
              />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Tellyo OY</h1>
              <h2 className={styles.cardContentDetails}>Łódź</h2>
              <h2 className={styles.cardContentDetails}>09.2021 - now</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building an advanced hybrid cloud web application, based on
            AngularJS, React, Jitsi library, and OBS Studio software.
            <br />
            <br />
            Main responsibilities:
            <br />
            - working collaboratively both with frontend and backend teams,
            <br />
            - writing a clean and high-quality codebase,
            <br />
            - creating new features in the monthly releases,
            <br />
            - code review of other developers in our teams,
            <br />
            - fixing new and old bugs requested by QA team,
            <br />
            - taking active participation in the planning of creating new
            features.
            <br />
            <br />
            Main achievement:
            <br />
            - carrying out migration of our app from JavaScript to TypeSctipt
            (the whole app) and from AngularJS to React 18.
            <br />
            <br />
            Languages: TypeScript.
            <br />
            Frameworks: <b>React</b>, AngularJS.
            <br />
            State Management: <b>Redux Thunk</b>.<br />
            Styling: SCSS, <b>StoryBook</b>.<br />
            Version Control System: GitHub/GitLab (git).
            <br />
            Issue trancing: Jira.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint} />
        <h1>{getDate()}</h1>
      </div>
    </div>
  );
}
