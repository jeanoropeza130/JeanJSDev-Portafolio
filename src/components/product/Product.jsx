import  "./product.css"

const Product = ({img, link, des}) => {
  return (
    <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div>{des}</div>
        <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"/></a>
    </div>
    
  )
}

export default Product