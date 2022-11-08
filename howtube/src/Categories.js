import React from 'react';

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
                        <button style={buttonStyle} className='art'> ART </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='cooking'> COOKING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='building'> BUILDING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='home'> HOME </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='vehicles'> VEHICLES </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='organizing'> ORGANIZING </button>
                    </td>
                    <td>
                        <button style={buttonStyle} className='makeup'> MAKEUP </button>
                    </td>
                </tr>
            </table>
        )
    }
}