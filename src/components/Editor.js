import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import ExpandButton from "./UI/ExpandButton";

import classes from "./Editor.module.css";

const Editor = (props) => {
  const onChangeHandler = (e) => {
    props.setUserInput(e.target.value);
  };

  const onClickAction = () => {
    console.log("This is working");
  };

  return (
    <div className={classes["card-container"]}>
      <div className={classes.card}>
        <div className={classes.header}>
          <h3>
            <FontAwesomeIcon className={classes.brand} icon={faFreeCodeCamp} />{" "}
            This is the header
          </h3>
          <div className={classes.actions}>
            <ExpandButton action={onClickAction} />
          </div>
        </div>
        <textarea className={classes.textarea} onChange={onChangeHandler} />
      </div>
    </div>
  );
};

export default Editor;
