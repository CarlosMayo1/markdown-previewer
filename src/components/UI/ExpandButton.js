import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

import classes from "./ExpandButton.module.css";

const ExpandButton = (props) => {
  return (
    <button className={classes["expand-button"]} onClick={props.action}>
      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
    </button>
  );
};

export default ExpandButton;
