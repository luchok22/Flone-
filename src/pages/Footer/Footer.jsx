import css from './footer.module.css'

const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footer_menu}>
                <div className={css.footerI}>
                    <h1>Flone.</h1>
                    <p>© 2021 Flone.</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className={css.footerI}>
                    <h4>ABOUT US</h4>
                    <p>About us</p>
                    <p>Store location</p>
                    <p>Contact</p>
                    <p>Orders tracking</p>
                </div>
                <div className={css.footerI}>
                    <h4>USEFUL LINKS</h4>
                    <p>Returns</p>
                    <p>Support Policy</p>
                    <p>Size guide</p>
                    <p>FAQs</p>
                </div>
                <div className={css.footerI}>
                    <h4>FOLLOW US</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                </div>
                <div className={css.footerI}>
                    <h4>SUBSCRIBE</h4>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <input type="text" />
                    <a href="">SUBSCRIBE</a>
                </div>
            </div>
        </div>)
}

export default Footer