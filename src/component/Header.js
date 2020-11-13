import React from 'react'
import logo from './olx-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { auth, provider } from './Firebase';

function Header() {

        const signIn = ()=>{
            auth
            .signInWithPopup(provider)
            .then((result) => alert(`Welcome: ${result.user.displayName}`))
            .catch((error) =>alert(error.message))
        };


    return (
        <div className='headerMain__div'>
            <div className='olx__logo'>
                <img src={logo} alt="" width='50px'/>
            </div>

            <div className='Header__dropdown' >

                <select name="dropdown" id="dropdown" >

                   <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                    <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>

                </select>


            </div>
            <div className='Header__Searchinput'>
                <input type="text" id='input__search' placeholder='Find Cars,Mobile Phones and more' />
            </div>
            <div className='headerSearch__div'>
                <SearchIcon />
            </div>
            <div className='Header__login'>
                <h3 className='Heading__login' onClick={signIn}>Login</h3>
            </div>
            <div className='Header__sell'>
                <h4 className='Heading__sell'>+SELL</h4>
            </div>
        </div>
    )
}

export default Header
