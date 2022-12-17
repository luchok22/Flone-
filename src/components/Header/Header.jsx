import css from './Header.module.css'
import { Link } from 'react-router-dom'
import heart from './heart.svg'
import avatar from './avatar.svg'
import pocket from './pocket.svg'
const Header = () => {
    return(
        <div className={css.head}>
           <div className={css.header_left}>
                <Link to='/'><h1>Flone.</h1></Link>
           </div>
           <div className={css.header_center}>
            <Link to='/profile'>Wishlist</Link>
            <Link to='/about'>About us</Link>
            <Link to='/conctat'>Contact us</Link>  
           </div>
           <div className={css.header_right}>
               <Link to='/profile'><img src={heart} width='23px' alt="" /></Link>
               <Link to='/profile'><img src={avatar} width='23px' alt="" /></Link>
               <Link><img src={pocket} width='23px' alt="" /></Link>
           </div>
        </div>
        )
}

export default Header