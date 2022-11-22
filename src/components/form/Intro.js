import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

export default class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <h2> INSTRUCTIONS </h2>
        <ul>
          <li> This react project of CV making application. </li>
          <li> The Tab Section is to navigate between the sections. </li>
          <li>
            <MdNavigateNext className='nxt-btn-demo' /> Button update's the
            inputs to the preview section and moves to next section.
          </li>
          <li>
            Then <button className='clear-demo'>Clear</button> button clear's
            the input in the entire section.
          </li>
          <li>And it doesn't update the preview section.</li>
        </ul>
        <h3>Thank you </h3>
      </div>
    );
  }
}
