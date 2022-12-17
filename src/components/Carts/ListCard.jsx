


const ListCard = ({ImgUrl, title, price}) => {

    return (
        <div className="cartsItem">
            <img src={ImgUrl} alt="" />
            <p>{title}</p>
            <p>${price}</p>
            <button className="addto">ADD TO CART</button>
        </div>
    )
}

export default ListCard