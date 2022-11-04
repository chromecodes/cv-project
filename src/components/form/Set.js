import React, { Component } from 'react'
import Setlist from './Setlist'
// import Setbtn from './Setbtn'
import Exp from './Exp'
import Educ from './Educ'

export default class Set extends Component {
  constructor(){
    super()

    this.state = {
      sets : [1],
      crtset : 1,
    }
  }
    updateSets=(x, y)=>{
      this.setState({
        sets : x,
        crtset: Number(y)
      })
    }
    
    addForm=(val)=>{
      if(val === 'exp') {
        let Addf = this.state.sets.map((set)=>{
            return  <div
            className={this.state.crtset === set ? "active set" : "set"}
            key={set} set={set}> <Exp /> </div>
          })
        return Addf
      } else if (val === 'edu'){
        let Addf = this.state.sets.map((set)=>{
          return  <div
          className={this.state.crtset === set ? "active set" : "set"}
          key={set} set={set}> <Educ /> </div>
        })
      return Addf
      }
    }


  render() {
    return (
    <> 
        <Setlist val={this.props.val} update={this.updateSets}/>
        {this.addForm(this.props.val)}
    </>
    )
  }
}
