import React from "react";

const Note = props => {
  const { index, title, content, handleDelete, handleTitle, handleContent } = props;

  return (
    <div className="note__container">
      <input
        className="note__title"
        type="text"
        value={title}
        onChange={e => handleTitle(e, index)}
      />
      <input
        className="note__content"
        type="text"
        value={content}
        onChange={e => handleContent(e, index)}
      />
      <div className="note__line" />
        <button className="note__btn" onClick={() => handleDelete(index)}>
        Delete
      </button>
    </div>
  );
};

export default Note;

Note.defaultProps = {
  title: "",
  content: ""
};
