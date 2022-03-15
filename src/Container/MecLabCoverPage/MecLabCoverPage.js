import React, { Component } from 'react'
import logoMec from './MEC_LOGO_new.png'
import './MecLabCoverPage.css'
import Dag from './dag.png';
import CoverPageOfMec from '../../Components/CoverPageOfMec/CoverPageOfMec';

export class MecLabCoverPage extends Component {
    state={
institutename: "MYMENSINGH ENGINEERING COLLEGE",
deptname:"Department of Computer Science & Engineering",
coursename: "Differential And Integral Calculus",
coursecode:"Math-1001",
studentname:"Raihan Miraj",
studentroll:"35",
studentbatch:"3rd",
teachername:"Mrinal Kranti Roy",
teacherposition:"Lecturer in Chemistry",
teacherdept:"Department of General Science",
dateofexp:"01/01/2021",
labreportofassignment:"Lab Report",

    }


    inputChangeHandler = ()=>{

    }
    render() {
        return (
            <div class="howpeoplesee">
              <CoverPageOfMec institutename= "MYMENSINGH ENGINEERING COLLEGE"
deptname = "Department of Computer Science & Engineering"
coursename =  "Differential And Integral Calculus"
coursecode = "Math-1001"
studentname = "Raihan Miraj"
studentroll = "35"
studentbatch = "3rd"
teachername = "Mrinal Kranti Roy"
teacherposition = "Lecturer in Chemistry"
teacherdept = "Department of General Science"
dateofexp = "01/01/2021"
labreportofassignment = "Lab Report"/>

<div id="elementH">
<button id="button" class="printbutton" onclick="clickHandler()">Print</button>

</div>  
            </div>
        )
    }
}

export default MecLabCoverPage




