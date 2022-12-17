import { Link } from 'react-router-dom'
import ListCard from '../../components/Carts/ListCard'

const Profile = ({item}) => {
    return (
        <div className='MyItems'>
            <div className='border'>
                <div><Link to='/'><h1>HOME</h1></Link> ——— <h1>WISHLIST</h1></div>
            </div>
            <h3>Your cart items</h3>
            <div className='cart'>
              <div className='menu'>
                <p>IMAGE</p>
                <p>PRODUCT NAME</p>
                <p>UNTIL PRICE</p>
                <p>ADD TO CART</p>
              </div>
               {item.map((item2) => <ListCard {...item2}/>)}
           </div>
        </div>
    )
}

export default Profile