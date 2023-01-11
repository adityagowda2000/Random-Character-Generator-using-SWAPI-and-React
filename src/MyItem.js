import React from 'react';
class Item extends React.Component{
    constructor(props){
        super(props) //super has to be called before "this" is used 
        //in constructor
        //Reference: https://stackoverflow.com/questions/40433463/what-does-calling-super-in-a-react-constructor-do
        this.state={
            clicks:0,
            remaningClicks:10000
        }
    }
    clickMe() {
        this.setState({
            clicks: this.state.clicks+1,
            remaningClicks:this.state.remaningClicks-1

        })
        console.log('button clicked')
    }
    render(){
      return(
        <div>
            {/*Here we can see the use of props*/}
             <h1>Hello world this is {this.props.name}</h1>
            <h2> My age is {this.props.age}</h2>
            <h3>Button clicked {this.state.clicks}</h3>
            <h4> Reamaining clicks:{this.state.remaningClicks}</h4>
            <button onClick={()=>{this.clickMe()}}>Click Me!</button>
        </div>
       
      )
    }
  }

  export default Item