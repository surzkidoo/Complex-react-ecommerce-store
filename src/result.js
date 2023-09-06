import React, { Component } from 'react';


class Result extends Component {
    constructor(props){
        super(props);
        this.state={
            i:0,
            counter:1,
            score:0
        }
    }
    
    
    render() { 
        return (
            <React.Fragment>
            <div className="container result">
                <div style={{border:this.props.result==1?"solid red 5px":"solid green 5px",backgroundColor:"white",padding:"50px",textAlign:"center",width:"400px"}}>
                <p style={{fontSize:"30px"}}> DIABETES</p>
                <p style={{fontSize:"24px",margin:"20px"}}>STATUS </p>
             
                <p style={{fontFamily:'Lucida Sans',fontWeight:"bolder"}}>{this.props.result==1?"POSITIVE":"NEGATIVE"}</p>
            {this.props.result}
            </div>
          </div>
       </React.Fragment>
        );
    }
}
 
export default Result;