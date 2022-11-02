import React, { Component } from 'react'
import Setbtn from './Setbtn'
import Exp from './Exp'
import Educ from './Educ'

export default class Set extends Component {
    constructor(props){
        super(props)

        this.state = {
            sets: [1]
        }
    }

    addSet=()=>{
        if (this.state.sets.length < 4){
          this.setState({
            sets : this.state.sets.concat(this.state.sets.length + 1),
            }) 
            console.log(this.props.val);
        } else {
          console.log(this.state.sets);
        }
    }
    
    addForm=(val)=>{
      if(val === 'exp') {
        let Addf = this.state.sets.map((set)=>{
            return <Exp key={set} set={set}/>
          })
        return Addf
      } else if (val === 'edu'){
        let Addf = this.state.sets.map((set)=>{
          return <Educ key={set} set={set}/>
        })
      return Addf
      }
    }
    

  render() {
    return (
    <> 
      <div className='setlist'>
          {this.state.sets.map((set) => {
            return <Setbtn key={set} set={set}  />  })}
        <button className='addBtn' onClick={this.addSet}> + </button>
      </div>
        {(this.addForm(this.props.val))}
    </>
    )
  }
}
