import { useHover } from "hooks";
import React from "react";
import { Link, useHref } from "react-router-dom";
import { HitsModal } from "../HitsModal";

import styles from "./HeaderNavigate.module.scss";

interface HeaderNavigateType {
  icon: string;
  link: string;
  text: string
}

const HeaderNavigate: React.FC<HeaderNavigateType> = ({ icon, link, text }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const hover = useHover(ref)
  //@ts-ignore-start
  const href = useHref()
  //@ts-ignore-end

  return (
    <div ref={ref} className={styles.root}>
      <div className={href === link ? `${styles.container} ${styles.activeLink}` : styles.container}>
        {href === link && <div></div>}
      <Link to={link}>
        <img className={styles.resourceLink} src={icon} alt="resource link" />
      </Link>
      {hover && 
      <div className={styles.hitsModal}>
      <HitsModal value={text}/>
       </div>
    }
      </div>
    </div>
  );
};

export { HeaderNavigate };
