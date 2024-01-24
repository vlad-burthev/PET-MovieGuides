import type { FC } from "react";

interface AboutPageProps {}

import styles from "./AboutPage.module.scss";

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <div className={styles.about}>
      <h1>About Project</h1>
      <div>
        <h2>For project i use </h2>
        <ul>
          <li>React js</li>
          <li>React Router Dom</li>
          <li>TypeScript</li>
          <li>SCSS</li>
          <li>Recat Helmet</li>
          <li>Recat Redux</li>
          <li>Reduxjs Toolkit</li>
          <li>RTK Query</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
