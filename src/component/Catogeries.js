import React from 'react'


function Catogeries() {
    return (
        <div className='menue'>
            <div className='Menus__dropdown'>
                <select name="catogeries" id="catogeries">
                    <option value="Default">ALL CATEGORIES</option>
                    <option value="Default">vechiles</option>
                </select>
            </div>

            <div className="Menue__items">
                <p>Mobile</p>
                <p>Cars</p>
                <p>Houses</p>
                <p className='hiddenn'>TV-Audio</p>
                <p className='hidden'>Tablets</p>
                <p className='hidden'>Land Plots</p>
            </div>

            
        </div>
    )
}

export default Catogeries
