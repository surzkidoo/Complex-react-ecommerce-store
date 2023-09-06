import React, { Component } from 'react';
import Result from './result';
import Loader from './loader';
import axios from 'axios';
var datainput=[]
class Question extends Component {
    constructor(props){
        super(props);
        this.state={
            i:0,
            counter:1,
            score:0,
            value:"",
            isSubmit:"init",
            result:-1,
            data:
            [
             {
                question:"Pregnancies"
             },
             {
               question:"Glucose"
            },
            {
               question:"Blood Pressure"
            },
            {
               question:"Skin Thickness"
            },
            {
               question:"Insulin"
            },
            {
               question:"BMI"
            },
            {
               question:"Diabetes Predegree Function"
            },
            {
               question:"Age"
            }
            

            ]
           
        }
    }
    
  
     next=()=>{
        if(this.state.value==""){
            alert("Field Cant be Empty");
            return;
        }
        if(this.state.i < this.state.data.length-1){
            this.setState({i:this.state.i+1})
            this.setState({counter:this.state.counter+1})
            this.addarray()

        }
        else{
        
           this.submit();
            
        }
        
     }
handle=(event)=>{
    this.setState({value:event.target.value})
    
}

addarray=()=>{
   datainput.push(this.state.value)
    console.log(datainput)
    this.setState({value:""})
}

submit=()=>{
    this.addarray()
    this.setState({isSubmit:"sent"});
    axios.post(`http://localhost:8000/predict/${this.props.model}`,
       datainput)
       .then((res)=>{ return res.data})
       .then((datar)=>{this.setState({result:datar});this.setState({isSubmit:"else"});
       console.log(datar);
       datainput=[];
    });
}
    render() { 
        if(this.state.isSubmit==="init"){
        return (
            
            <div className="container-fluid bg-red free">
                   <div className="percentage">
        <div style={{backgroundColor:"blue",transition:"all .5s", width:this.state.counter/this.state.data.length*100+"%"}} className="child">

        </div>
    </div>
           
        <span onClick={this.next} className="indicator">
            <p className={this.state.counter===this.state.data.length? "fa fa-retry":"fa fa-right"}>{'>'}</p>
        </span>
        <div className="container">
            
            <div style={{transition:"all 2s "}} className="question">
    
                <div>
                    {this.state.data[this.state.i].question}
                </div>
    
                <input type="text" className="answert" value={this.state.value} onChange={this.handle} name="Answer" id="qid"/>
    
            </div>
            <div className="button" onClick={this.submit} style={{visibility:this.state.counter===this.state.data.length? "visible":"hidden"}} >
                Submit
            </div>
    
        </div>
        </div>
        );
        }
        else if(this.state.isSubmit==="sent"){
            return(
            <div>
                <Loader/> 
             <Result result={this.state.result}/>
            </div>
            
            )
        }
        else{
            return(
                <Result result={this.state.result}/>
            )
        }
    }
}
 
export default Question;