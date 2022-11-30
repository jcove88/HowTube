import React from "react"
const p = { 
    'color': '#cfe1fc',
    'font-size': '30px',
    'display': 'flex',
    'justify-content': 'center',
    'margin-right': '25px',
}
export class Favorites extends React.Component{
    render(){
        return(
            <div class="heart-like-button">
                <p style={p}>
                    You have no videos saved. Search for some cool videos to add!
                </p>
            </div>
        )
    }
}