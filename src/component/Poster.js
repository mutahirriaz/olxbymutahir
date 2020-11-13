import React from 'react'
import olxbackgroundimage from './olxbackgroundimg.png';
import olxbackgroundimage2 from './olxbackgroundimg2.png';


function Poster() {
    return (
        <div>
            <div>
                <img src={olxbackgroundimage} alt="" width='100%'/>
                <img src={olxbackgroundimage2} alt="" width='100%'/>
            </div>
        </div>
    )
}

export default Poster
