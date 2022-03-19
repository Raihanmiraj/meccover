import React, { Component } from 'react'
 import './CoverPageOfMec.css'
import Dag from './dag.png';

export class CoverPageOfMec extends Component {
  
    render() {
        return (
        
               <div id="pdf" class="pdf ">

  
<div class="firstsection">
    <h1 id="institutename">{this.props.institutename}</h1>
<img src="/meclogo.png" alt=""/>
    <h1 class="title1">  <span id="deptname"   >{this.props.deptname}</span></h1>

  

    <h1 id="labreportofassignment" class="title1">{this.props.labreportofassignment}</h1>
    <h1 class="title2">Course Name : <span id="coursename"   >{this.props.coursename}</span></h1>
    <h1 class="title2">Course Code : <span id="coursecode"   >{this.props.coursecode}</span></h1>

   

</div>
 

<div class="secondsection">
<div class="firstlayer">
<h1 class="title1" style={{textAlign: "center"}}>Submitted By :</h1>
<h1 class="fontsize">Name : <span   >{this.props.studentname}</span></h1>
<h1  class="fontsize" >Class Roll : <span   >{this.props.classroll}</span></h1>
<h1  class="fontsize" >Exam Roll : <span   >{this.props.studentroll}</span></h1>
<h1  class="fontsize" >Registration No : <span   >{this.props.reg_no}</span></h1>
<h1  class="fontsize" >Batch : <span   >{this.props.studentbatch}</span></h1>
</div>

<div class="middlelayer">
<img src={Dag} alt=""/>
</div>

<div class="secondlayer">
<h1 class="title1">Submitted To :</h1>

<h1   class="fontsize" ><span id="teachername"   >{this.props.teachername}</span></h1>
<h1   class="fontsize" ><span id="teacherposition"    >{this.props.teacherposition}</span></h1>
<h1   class="fontsize" ><span id="teacherdept"    >{this.props.teacherdept}</span></h1>



</div>



</div>


<div class="lastsection">
<div class="firstlayer">
<h1 class="lastfont"> <span id="dateofexp"   >{this.props.dateofexp}</span></h1>
</div>
<div class="secondlayer">
<div >……………………………….</div>
<h1 style={{marginTop:"5px"}} class="lastfont">Signature</h1>

</div>

</div>
</div>


          
        )
    }
}

export default CoverPageOfMec




