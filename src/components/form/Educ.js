import React, { Component } from 'react'

export class Educ extends Component {
  render() {
    return (
      <div>
        <div className='school'>
        <input type="text" placeholder='Degree/Field'/>
        <input type="text" placeholder='University/School '/>
        </div>
        <div className='date'>
        <input type="text" placeholder='Start Date'/>
        <input type="text" placeholder='End Date '/>
        </div>
        <button className='nxt btn'> Next </button>
      </div>
    )
  }
}

export default Educ
