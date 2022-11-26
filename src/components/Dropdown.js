import React,{useState} from 'react'
import Select from "react-select"
const Dropdown = () => {

    const placename=[
        {
            value:1,
            label:"kolkata"
        },
        {
            value:2,
            label:"delhi"
        },
        
        {
            value:3,
            label:"pune"
        },
        {
            value:4,
            label:"bangalore"
        },
        {
            value:5,
            label:"hydrabad"
        },
        {
            value:6,
            label:"bhopal"
        },

    ];
    const [Displayvalue,getvalue]=useState("")
    const Dropdownhandle=(e)=>{
    getvalue(Array.isArray(e)?e.map(x=>x.label):[])
    }
  return (
    <div>
        <Select isMulti options={placename} onChange={Dropdownhandle}></Select>
        <center>
            <b>your selected place:</b> <h3 style={{color:"purple"}}>{Displayvalue+ " "}</h3> 
        </center>
    </div>
  )
}

export default Dropdown