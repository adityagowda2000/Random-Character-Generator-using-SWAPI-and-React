import React from "react";

class Movies extends React.Component{
    render(){
        return(
            <div>
                <ul>
                {
                    this.props.films.map((film) => {
                        return(
                        <li>
                           <a href={String(film)}>  {film}    </a> 
                        </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Movies;