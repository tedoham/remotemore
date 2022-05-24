import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

function Modal({ readme, setOpen }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(readme?.url)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  });

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setOpen(false)}>
          &times;
        </span>
        {readme.status === 200 && <ReactMarkdown children={content} />}
        {readme.status !== 200 && <p>Readme is not provided</p>}
      </div>
    </div>
  );
}

export default Modal;
