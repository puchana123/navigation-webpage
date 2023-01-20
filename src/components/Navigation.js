import {Link} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {IoCloseSharp} from 'react-icons/io5'
import { useState } from 'react'
import './Navigation.css'
import MenuData from '../data/MenuData'

const Navigation = ()=>{

    const [showMenu,setShowMenu] = useState(false)

    const toggleMenu = ()=>setShowMenu(!showMenu)

    return(
        <aside>
            <div className='navbar'>
                <div className='navbar-toggle'>
                    <Link to='#' className='menu-bar'>
                        <HiMenu onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu?'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-item' >
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bar'>
                            <IoCloseSharp onClick={toggleMenu}/>
                        </Link>
                    </li>
                    {MenuData.map((menu,index)=>{
                        return(
                            <li className='menu-text'key={index} onClick={toggleMenu}>
                                <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link> 
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation