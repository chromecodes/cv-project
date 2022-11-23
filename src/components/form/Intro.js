import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <h2> INSTRUCTIONS </h2>
        <ul>
          <li> This is a CV application project build by react. </li>
          <li> The Tabs allow you to navigate between the sections. </li>
          <li>
            <MdNavigateNext className='nxt-btn-demo' /> Button update's the
            inputs to the preview and moves to next section.
          </li>
          <li>
            Then <button className='clear-demo'>Clear</button> button clear's
            the input in the entire Section/Set.
          </li>
          <li>And it doesn't update the preview section.</li>
          <li>
            The <button className='demo-btn-demo'>Preview</button> button load a
            preview data.
          </li>
          <li>
            The <button className='reset-btn-demo'>Reset</button> button reset's
            the preview section.
          </li>
          <li>
            The <button className='pdf-btn-demo'>Generate PDF</button> button
            makes a PDF of preview section.
          </li>{" "}
          <li>
            The <AiOutlinePlusCircle className='add-btn-demo' /> button add's a
            new set in the section. (limit is 4)
          </li>
          <li>On skill section it add a skill slot. (limit is 5)</li>
          <li>
            The <RiDeleteBack2Fill className='dlt-btn-demo' /> button removes
            the last set from the section and update preview.
          </li>
        </ul>
        <h3>Thank you </h3>
      </div>
    );
  }
}
