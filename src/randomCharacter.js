import React from 'react';
import Movies from './Movies'
class RandomCharacter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            dataAvailible:false,
            name:null
        }
    }
    async fetchRandomPerson(){
        // random number generation , 1<=random Number<=82
        let randomNumber=(Math.ceil(Math.random()*82))
        let url="https://swapi.dev/api/people/"+String(randomNumber)+"/"
        let response=await fetch(url)
        let data=await response.json() 
        return data
    } 

    async displayData(){
        let data= await this.fetchRandomPerson()
        this.setState({
            dataAvailible:true,
            name:data.name,
            height:data.height,
            mass:data.mass,
            gender:data.gender,
            eye_color:data.eye_color, 
            hair_color:data.hair_color,
            skin_color:data.skin_color,
            films:data.films
        })

    }

    render(){
        return(
            <div>
                <h1>Generate Random Star Wars Characters</h1>
                <button onClick={()=>this.displayData()}>Get Random Person</button>
                {
                     this.state.dataAvailible && 
                    <div className="gridBox">
                        <div className="contentBox">
                            <h4>General Information</h4>
                            <ul>
                                <li>Name: {this.state.name}</li>
                                <li>Height: {this.state.height}</li>
                                <li>Mass: {this.state.mass}</li>
                                <li>Gender: {this.state.gender}</li>
                                <li>Eye Color: {this.state.eye_color}</li>
                                <li>Hair Color: {this.state.hair_color}</li>
                                <li>Skin Color: {this.state.skin_color}</li>
                            </ul>
                        </div>
                        <div className="contentBox">
                            <h4>Movies</h4>
                            <Movies films={this.state.films}/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default RandomCharacter;