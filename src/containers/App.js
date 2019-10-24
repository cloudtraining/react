import React from "react";
import Navbar from "../components/navbar";
import Notes from "../components/notes";
import "./App.css";

class App extends React.Component {
  state = {
    notes: [
      {
        title: "My Note",
        content: "Hi"
      }
    ]
  };

  handleDelete = index => {
    const { notes } = this.state;
    const newnotes = notes.slice();
    newnotes.splice(index, 1);
    this.setState({ notes: newnotes });
  };

  handleTitle = (e, index) => {
    const {
      target: { value }
    } = e;
    const { notes } = this.state;
    const newnotes = notes.slice();
    const newnote = newnotes[index];

    newnotes.splice(index, 1, { ...newnote, title: value });

    this.setState({
      notes: newnotes
    });
  };

  handleContent = (e, index) => {
    const {
      target: { value }
    } = e;
    const { notes } = this.state;
    const newnotes = notes.slice();
    const newnote = newnotes[index];

    newnotes.splice(index, 1, { ...newnote, content: value });

    this.setState({
      notes: newnotes
    });
  };

  handleAddNote = () => {
    const { notes } = this.state;
    const newnotes = notes.slice();
    newnotes.push({ title: "", content: "" });
    this.setState({ notes: newnotes });
  };

  render() {
    const { notes } = this.state;
    return (
      <div>
        <div />
        <Navbar count={notes.length} />
        <div className="app__container">
          <div className="new-note__container">
            <button className="btn__add-note" onClick={this.handleAddNote}>
              New Note
            </button>
          </div>
          <Notes
            notes={notes}
            handleContent={this.handleContent}
            handleTitle={this.handleTitle}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
