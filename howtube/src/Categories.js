import React from 'react';
import { ytSearch } from './Search';

const buttonStyle = {
    'background-color': 'rgb(217,217,217)',
    'border-radius': '12px',
    'width': '150px',
    'margin': '25px',
}

export class Categories extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <td>
                        <button style={buttonStyle} className='art' onClick={ ytSearch('art')}> ART </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='cooking' onClick={ ytSearch('cooking')}> COOKING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='building' onClick={ ytSearch('building')}> BUILDING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='home' onClick={ ytSearch('home')}> HOME </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='vehicles' onClick={ ytSearch('vehicles')}> VEHICLES </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='organizing' onClick={ ytSearch('organizing')}> ORGANIZING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='makeup' onClick={ ytSearch('makeup')}> MAKEUP </button>
                    </td>
                </tr>
            </table>
        )
    }
}