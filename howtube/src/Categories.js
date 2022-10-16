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
                        <button style={buttonStyle}> ART </button>
                    </td>
                    <td>
                        <button style={buttonStyle}> COOKING </button>
                    </td>
                    <td>
                        <button style={buttonStyle}> BUILDING </button>
                    </td>
                    <td>
                        <button style={buttonStyle}> HOME </button>
                    </td>
                    <td>
                        <button style={buttonStyle}> VEHICLES </button>
                    </td>
                    <td>
                        <button style={buttonStyle}> ORGANIZING </button>
                    </td>
                    <td>
                        <button style={buttonStyle}> MAKEUP </button>
                    </td>
                </tr>
            </table>
        )
    }
}