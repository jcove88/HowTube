import React from 'react';
import { ytSearch, Home } from './Search';

const buttonStyle = {
    'background-color': 'rgb(217,217,217)',
    'border-radius': '12px',
    'width': '150px',
    'margin-top': '25px',
    'margin-left': '25px',
    'margin-right': '25px',
}

let myfavorites = {}

export class Categories extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <td>
                        <button style={buttonStyle} className='art' onClick={() => ytSearch('art')}> ART </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='cooking' onClick={() => ytSearch('cooking')}> COOKING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='building' onClick={() => ytSearch('building')}> BUILDING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='vehicles' onClick={() => ytSearch('vehicles')}> VEHICLES </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='organizing' onClick={() => ytSearch('organizing')}> ORGANIZING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='makeup' onClick={() => ytSearch('makeup')}> MAKEUP </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='myfavorites' onClick={() => Home(myfavorites)}> My Favorites </button>
                    </td>
                </tr>
            </table>
        )
    }
}
export{myfavorites}