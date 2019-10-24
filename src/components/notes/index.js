import React from "react";
import Note from "./note";
import "./index.css";

const Notes = props => {
  const { notes, handleDelete, handleTitle, handleContent } = props;

  return (
    <div className="notes__container">
      {notes.map((note, index) => (
        <Note
          key={index}
          {...note}
          index={index}
          handleTitle={handleTitle}
          handleDelete={handleDelete}
          handleContent={handleContent}
        />
      ))}
    </div>
  );
};

export default Notes;
