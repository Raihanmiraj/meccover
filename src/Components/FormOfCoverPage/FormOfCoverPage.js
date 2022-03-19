import React, { Component } from 'react'
import './FormOfCoverPage.css';
import axios from 'axios';
import CoverPageOfMec from '../CoverPageOfMec/CoverPageOfMec';
import Header from '../Header/Header';
export class FormOfCoverPage extends Component {
    state = {
        // departmentdata : "",
        // teachersdata:"",
        departmentdata : [{"dept_name":"Computer Science & Engineering","id":"1","inst_id":"1"},{"dept_name":"Civil Engineering","id":"2","inst_id":"1"},{"dept_name":"Electrical & Electronics Engineering","id":"3","inst_id":"1"}],
        
         teachersdata:[{"department":"Computer Science & Engineering","id":"1","inst_id":"1","name":"Md. Alamgir Hossain","position":"Professor (CSE)","quality":"M.Sc. in CSE"},{"department":"Faculty of Non Tech","id":"2","inst_id":"1","name":"Dr. Mohammad Mahbubr Rahman ","position":"Associate Professor (Chemistry)","quality":"B.Sc. (Hons), M.Sc.(D.U.), Ph.D.(R.U.)"},{"department":"Civil Engineering","id":"3","inst_id":"1","name":"Md.  Assaduzzaman","position":"Assistant Professor & Head of the Department(CE)","quality":"B.Sc in Civil Engg. (KUET); M.Sc in Civil & Geotechnical Engg. (BUET)"},{"department":"Electrical & Electronics Engineering","id":"4","inst_id":"1","name":"Engr. S. M. Anowarul Haque","position":"Assistant Professor & Head of the Department(EEE)","quality":"B.Sc. Engineering (EEE)"},{"department":"Computer Science & Engineering","id":"5","inst_id":"1","name":"Engr. Rownak Ara Chowdhury","position":"Assistant Professor & Head of the Department (CSE)","quality":"M.Sc in CSE"},{"department":"Computer Science & Engineering","id":"6","inst_id":"1","name":"Engr. Khaleda Ferdousi","position":"Assistant Professor (CSE) ","quality":"M.Sc. in CSE"},{"department":"Faculty of Non Tech","id":"7","inst_id":"1","name":"Muhammad Abdus Sattar Titu","position":"Assistant Professor (Mathematics) & Head of the Department(Non-Tech)","quality":"B.Sc. (Hons), MS (CU.)"},{"department":"Faculty of Non Tech","id":"8","inst_id":"1","name":"Jebunnesa Roma","position":"Assistant Professor (Physics))","quality":"B.Sc. (Hons), M.Sc.(Physics)"},{"department":"Faculty of Non Tech","id":"9","inst_id":"1","name":"A S M Farhadul Alam","position":"Lecturer","quality":"B.Sc. (Hons), M.Sc.(Physics)"},{"department":"Computer Science & Engineering","id":"10","inst_id":"1","name":"Md. Nagrul Islam","position":"Lecturer","quality":"B.Sc. Engineering (CSE)"},{"department":"Civil Engineering","id":"11","inst_id":"1","name":"Md. Nuruzzaman","position":"Lecturer","quality":"B.Sc. Engineering (CE)"},{"department":"Electrical & Electronics Engineering","id":"12","inst_id":"1","name":"Md. Salah Uddin","position":"Lecturer","quality":"B.Sc. Engineering (EEE)"},{"department":"Computer Science & Engineering","id":"13","inst_id":"1","name":"Ozifatun Jannat Akhi","position":"Lecturer","quality":"B.Sc. Engineering (CSE)"},{"department":"Civil Engineering","id":"14","inst_id":"1","name":"Tahia Rabbee","position":"Lecturer","quality":"B.Sc. Engineering (CE)"},{"department":"Electrical & Electronics Engineering","id":"15","inst_id":"1","name":"Engr. Abdul Wahed","position":"Lecturer","quality":"B.Sc. Engineering (EEE)"},{"department":"Faculty of Non Tech","id":"16","inst_id":"1","name":"Mrinal Kanti Roy","position":"Lecturer (Chemistry)","quality":"B.Sc. (Hons.), M.Sc. (Chemistry)"},{"department":"Electrical & Electronics Engineering","id":"17","inst_id":"1","name":"Md. Afzal Hossain","position":"Work Shop/Laboratory In Charge","quality":"B.Sc. in Civil Engineering"},{"department":"Faculty of Non Tech","id":"18","inst_id":"1","name":"Mahfujur Rahman Resel","position":"Lecturer","quality":"B.Sc. (Hons), M.Sc. (Math.)"},{"department":"Civil Engineering","id":"19","inst_id":"1","name":"Utpal Goswami","position":"Workshop/Laboratory Incharge","quality":"B.Sc. Engineering (CE)"},{"department":"Faculty of Non Tech","id":"20","inst_id":"1","name":"Jamini Chandra Bormmon","position":"Lecturer (Math)","quality":"M.Sc. (Applied Mathematics)"},{"department":"Faculty of Non Tech","id":"21","inst_id":"1","name":"Muhammad Saqibul Amin","position":"Lecturer","quality":"B.S.S (Hons.), M.S.S (Public Administration)"},{"department":"Electrical & Electronics Engineering","id":"22","inst_id":"1","name":"Engr. Aysha Siddika","position":"Lecturer","quality":"B.Sc. Engineering (EEE)"},{"department":"Electrical & Electronics Engineering","id":"23","inst_id":"1","name":"Engr. Md. Khalid Saifullah","position":"Lecturer","quality":"B.Sc. Engineering (EEE)"},{"department":"Computer Science & Engineering","id":"24","inst_id":"1","name":"Mohammed Shamsul Haque","position":"Craft Instructor (CSE)","quality":"M.A; B.P.Ed; Diploma in Engineering (CmT)"},{"department":"Civil Engineering","id":"25","inst_id":"1","name":"Kamal Chandra Sarkar","position":"Craft Instructor (CE)","quality":"B.Sc. (Hons), M.Sc (Math)"}],
        loading:true,
        
        name:"Raihan Miraj",
        classroll:"349",
        roll:"44",
        reg_no:2891,
        batch:"3rd",
        teacher:0,
        department:0,
        labreportofassignment:"Lab Report",
        coursename:"Differential And Integral Calculus",
        courseid:"Math-1001",
        ifsubmit:false,
        dateofexp:"01/01/21",
        dateofexpname:"Date Of Experiment"


    }
    
componentDidMount(){
    axios.get('https://mecstudent-26f67-default-rtdb.firebaseio.com/meccover.json' )
      .then( (response)=> {
        console.log(response.data);
        this.setState({
            // departmentdata:response.data.department,
            teachersdata:response.data,  
        loading:false      })
      })
      .catch((error)=> {
        console.log(error);
      });
}

submitHandler = ()=>{
    this.setState({loading:true,
    ifsubmit:true})
    setTimeout( ()=>{
        window.print();
        // this.setState({loading:false,
        //     ifsubmit:false})
        setTimeout( ()=>{
         
            this.setState({loading:false,
                ifsubmit:false})
        } , 1000)
    } , 1000)

 
   
}
afterBeingPrint = () =>{
    this.setState({loading:false,
        ifsubmit:false})
}

inputFieldHandler = ( e) =>{
    this.setState({[e.target.id]:e.target.value})
}


    render() {

        
        if(this.state.loading==false){
            var dept = this.state.departmentdata;
         var departmentDataSelect =    Object.keys(dept) .map(i=>{
                return <option  value={i}>{dept[i].dept_name}</option>;
            })
         
            console.log(departmentDataSelect);

var teacher = this.state.teachersdata;
var teacherDataSelect = Object.keys(teacher).map(i=>{
    return <option value={i}>{teacher[i].name}</option>
})

        }


        
        var teachersname =  this.state.loading==false?this.state.teachersdata[this.state.teacher].name:"hello";
        var  teacherposition =  this.state.loading==false?this.state.teachersdata[this.state.teacher].quality:"hello";
        var  teacherdept =  this.state.loading==false?this.state.teachersdata[this.state.teacher].position:"hello";

var departmentName = this.state.loading==false?this.state.departmentdata[this.state.department].dept_name:"hello";
// var teachersname =   this.state.teachersdata[this.state.teacher].name ;
// var  teacherposition = this.state.teachersdata[this.state.teacher].quality ;
// var  teacherdept =   this.state.teachersdata[this.state.teacher].position ;

var departmentName =  this.state.departmentdata[this.state.department].dept_name ;
var formRender =    <div class="form">
<div class="inputLayer">
<div class="input-field">
    <span>Department</span>
     <select onChange={this.inputFieldHandler} id="department">
{departmentDataSelect}
     </select>
</div>
<div class="input-field">
    <span>Teachers</span>
    <select onChange={this.inputFieldHandler} id="teacher" >
{teacherDataSelect}
     </select>
</div>
<div class="input-field">
    <span>Types</span>
    <select onChange={this.inputFieldHandler} id="labreportofassignment" >
 <option value="Lab Report">Lab Report</option>
 <option  value="Assignment">Assignment</option>
     </select>
</div>

<div class="input-field">
    <span>Course Name</span>
     <input  value={this.state.coursename} onChange={this.inputFieldHandler} id="coursename" type="text"/>
</div>

<div class="input-field">
    <span>Course Code</span>
     <input  value={this.state.courseid} onChange={this.inputFieldHandler} id="courseid" type="text"/>
</div>

<div class="input-field">
    <span>Name</span>
     <input  value={this.state.name} onChange={this.inputFieldHandler} id="name" type="text"/>
</div>
<div class="input-field">
    <span>Batch</span>
     <input   value={this.state.batch}onChange={this.inputFieldHandler} id="batch" type="text"/>
</div>

<div class="input-field">
    <span>Class Roll</span>
     <input   value={this.state.classroll} onChange={this.inputFieldHandler} id="classroll" type="text"/>
</div>

<div class="input-field">
    <span>Exam Roll</span>
     <input   value={this.state.roll} onChange={this.inputFieldHandler} id="roll" type="text"/>
</div>

<div class="input-field">
    <span>Registration No</span>
     <input   value={this.state.reg_no} onChange={this.inputFieldHandler} id="reg_no" type="text"/>
</div>
<div class="input-field">
   <input class="dateofexpname" value={this.state.dateofexpname} onChange={this.inputFieldHandler} id="dateofexpname" type="text"/> 
     <input value={this.state.dateofexp} onChange={this.inputFieldHandler} id="dateofexp" type="text"/>
</div>

<div class="input-field-btn">
    <button type="button" onClick={this.submitHandler}> Print</button>
   
</div>

 

</div>
</div>;

        return (
            <div>
                
                {this.state.loading?"":<Header/>}
                {/* <img src="/meclogo.png" alt=""/> */}
            <div class="formofcoverpage">
{this.state.loading?"":formRender}
          
       <div  class="howpeoplesee" >
               {this.state.ifsubmit ? <CoverPageOfMec institutename= "MYMENSINGH ENGINEERING COLLEGE"
deptname = {departmentName}
coursename =  {this.state.coursename}
coursecode =  {this.state.courseid}
studentname = {this.state.name}
studentroll ={this.state.roll}
classroll = {this.state.classroll}
reg_no ={this.state.reg_no}
studentbatch = {this.state.batch}
teachername = {teachersname}
teacherposition =  {teacherposition}
teacherdept =  {teacherdept}
dateofexp =  {this.state.dateofexpname + ' : '+this.state.dateofexp}
labreportofassignment = {this.state.labreportofassignment}/>:""}
</div>
</div>
              </div>
        )
    }
}

export default FormOfCoverPage
