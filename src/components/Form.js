import React, { Component } from 'react'
import Bio from './form/Bio'
import Educ from './form/Educ'
import Exp from './form/Exp'
import Set from './form/Set'
import Skil from './form/Skil'


export default class Form extends Component {
    constructor() {

        super()
        
        this.state = {
            count : 1
        }
    }

    call(index){
        this.setState(
           { count : index}
        )
    }


  render() {
    return (
      <div className='main'>
        <div className='tablist'>
            <div className= {this.state.count === 1 ? "blue tabs":'tabs'} onClick={()=> this.call(1)}>Bio</div>
            <div className= {this.state.count === 2 ? "blue tabs":'tabs'} onClick={()=> this.call(2)}>Experience</div>
            <div className= {this.state.count === 3 ? "blue tabs":'tabs'} onClick={()=> this.call(3)}>Education</div>
            <div className= {this.state.count === 4 ? "blue tabs":'tabs'} onClick={()=> this.call(4)}>Skills</div>
        </div>
        <div className= {this.state.count === 1 ? "active tab":'tab'}>
        <Bio />
        </div>
        <div className= {this.state.count === 2 ? "active tab":'tab'}>
        <Set  val={<Exp />} />
        </div>
        <div className= {this.state.count === 3 ? "active tab":'tab'}>
        <Educ />
        </div>
        <div className= {this.state.count === 4 ? "active tab":'tab'}>
        <Skil />
        </div>
      </div>
    )
  }
}
