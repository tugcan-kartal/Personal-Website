import React from 'react'
import './Navbar.css';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import HomeIcon from '@mui/icons-material/Home';
import HomeRepairServiceSharpIcon from '@mui/icons-material/HomeRepairServiceSharp';
import AccessibilityNewSharpIcon from '@mui/icons-material/AccessibilityNewSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';


function Navbar() {
    return (
        <div className='AllOfNavbar'>

            <div className='Logo'>
                Tuğcan Kartal
            </div>

            <div className='Menu'>
                <div>
                    <div className='SymbolOfMenu'> <MenuSharpIcon fontSize='large' /> </div>
                    <div className='ContentOfMenu'>
                        <div className='ElementOfContent'> <a href='#allofhomepage'><HomeIcon/></a>  </div>
                        <div className='ElementOfContent'> <a href='#allofservices'><HomeRepairServiceSharpIcon /></a> </div>
                        <div className='ElementOfContent'> <a href='#allofskillsfornavbar'><AccessibilityNewSharpIcon /></a> </div>
                        <div className='ElementOfContent'> <a href='#allofcontactfornavbar'><CallSharpIcon /></a> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

