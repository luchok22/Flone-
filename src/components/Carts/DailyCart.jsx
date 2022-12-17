


const Card = ({ImgUrl, title, price}) => {
return(
    <div className="card">  
    <img src={ImgUrl} alt="" />
    <p>{title}</p>
    <p>${price}</p>
    
</div>  
)
} 

export default Card