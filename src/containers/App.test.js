import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Navbar from "../components/navbar";
import Notes from "../components/notes";

describe("App Container", () => {
  it("render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Navbar)).toEqual(true);
    expect(wrapper.exists(Notes)).toEqual(true);
  });

  it("handleAddNote()", () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleAddNote();
    wrapper.update();
    expect(wrapper.state().notes.length).toEqual(2)
  });

  it("handleDelete()", () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleAddNote();
    wrapper.update();
    wrapper.instance().handleDelete(0);
    wrapper.update();

    expect(wrapper.state().notes.length).toEqual(1)
    expect(wrapper.state().notes[0].title).toEqual("");
  });

  it("handleChangeTitle()", () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleTitle({ target: { value: "new" }}, 0);
    wrapper.update();

    expect(wrapper.state().notes[0].title).toEqual("new");
  });

  it("handleChangeContent()", () => {
    const wrapper = shallow(<App />);

    wrapper.instance().handleContent({ target: { value: "new" }}, 0);
    wrapper.update();

    expect(wrapper.state().notes[0].content).toEqual("new");
  });
});
