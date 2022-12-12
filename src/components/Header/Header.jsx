import css from './Header.module.css'
import { Link } from 'react-router-dom'
import heart from './heart.svg'
import avatar from './avatar.svg'
import pocket from './pocket.svg'
const Header = () => {
    return(
        <div className={css.head}>
           <div className={css.header_left}>
                <h1>Flone.</h1>
           </div>
           <div className={css.header_center}>
            <Link>Collection</Link>
            <Link>About us</Link>
            <Link>Contact us</Link>  
           </div>
           <div className={css.header_right}>
               <Link><img src={heart} width='23px' alt="" /></Link>
               <Link><img src={avatar} width='23px' alt="" /></Link>
               <Link><img src={pocket} width='23px' alt="" /></Link>
           </div>
        </div>
        )
}

export default Header