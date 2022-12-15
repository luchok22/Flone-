import { Link } from "react-router-dom"
import women from './Women.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import free from './free.png'
import twoh from './24.svg'
import money from './money.svg'
import off from './off.svg'
const Dash = () => {
    return (
        <main>
            <div className="dashboard">
                <div className="container">
                    <div className="products">
                        <h3>Smart Products</h3>
                        <h1>Summer Offer <br /> 2022 Collection</h1>
                        <Link><button>SHOP NOW</button></Link>
                    </div>
                    <div className="img">
                        <img src={women} width={450} alt="" />
                    </div>
                </div>
            </div>
            <div className="advantage">
                <div className="item">
                    <img src={free} width={50} alt="" />
                    <div>
                        <h3>Free Shipping</h3>
                        <p>Free shipping on all order</p>
                    </div>
                </div>
                <div className="item">
                    <img src={twoh} width={50} alt="" />
                    <div>
                        <h3>Support 24/7</h3>
                        <p>Free shipping on all order</p>
                    </div>
                </div>
                <div className="item">
                    <img src={money} width={50} alt="" />
                    <div>
                        <h3>Money Return</h3>
                        <p>Free shipping on all order</p>
                    </div>
                </div>
                <div className="item">
                    <img src={off} width={50} alt="" />
                    <div>
                        <h3>Order Discount</h3>
                        <p>Free shipping on all order</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Dash