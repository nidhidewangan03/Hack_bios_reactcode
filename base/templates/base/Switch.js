import React, { Component } from 'react';
import "./Switch.css"


export class Switch extends Component {
  render() {
    return (
      <div className='h1'>
      <h1> SwitchBoard</h1>
      <div className='bg-text'>
        
      <div id="main">

      <div style= {{backgroundColor:"rgb(232, 232, 232)" , height:" 140px" , width:"120px" , display:"flex" , alignItems:"center",  justifyContent:"center",  border:"3px solid rgb(157, 157, 157)" }}>
          <label class="switch">
          <input type="checkbox" id = "id_switch_38" onclick = "pressFunction('id_switch_38' , 38)" />
          <span class="slider round"></span>
          </label>

      </div>
      <div style= {{backgroundColor:"rgb(232, 232, 232)" , height:" 140px" , width:"120px" , display:"flex" , alignItems:"center",  justifyContent:"center",  border:"3px solid rgb(157, 157, 157)" }}>
          <label class="switch">
          <input type="checkbox" id = "id_switch_38" onclick = "pressFunction('id_switch_38' , 38)" />
          <span class="slider round"></span>
          </label>

      </div>
      <div style= {{backgroundColor:"rgb(232, 232, 232)" , height:" 140px" , width:"120px" , display:"flex" , alignItems:"center",  justifyContent:"center",  border:"3px solid rgb(157, 157, 157)" }}>
          <label class="switch">
          <input type="checkbox" id = "id_switch_38" onclick = "pressFunction('id_switch_38' , 38)" />
          <span class="slider round"></span>
          </label>

      </div>
      <div style= {{backgroundColor:"rgb(232, 232, 232)" , height:" 140px" , width:"120px" , display:"flex" , alignItems:"center",  justifyContent:"center",  border:"3px solid rgb(157, 157, 157)" }}>
          <label class="switch">
          <input type="checkbox" id = "id_switch_38" onclick = "pressFunction('id_switch_38' , 38)" />
          <span class="slider round"></span>
          </label>

      </div>
      </div>
      </div> 
      </div>
      
    )
  }
}

export default Switch
