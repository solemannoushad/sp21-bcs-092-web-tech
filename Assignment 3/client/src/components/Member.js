import React from "react";

const Member = (props) => {
  return (
    <div className={`member ${props.class}`}>
      <div className="imgC">
        <img src={props.img} alt="" />
      </div>
      <div className="name">{props.name}</div>
      <div className="profession">{props.profession}</div>
      <div className="links">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
};

export default Member;
