import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-bg"></div>
    <div className="pl1">
      
        <div className="pl-texts">
          <h1 className="pl-title">Proyectos</h1>
          <p className="pl-desc">
          Portafolio creativo que su trabajo ha estado esperando hermosas cosas, impresionantes estilos y mucho más lo espera en el interior.
          </p>
        </div>
       <div className="pl_list">
      {products.map((item) => (
        <Product key={item.id} img={item.img} link={item.link} des={item.des} />
        
      ))}
       </div>
    </div>
    </div>
  )
}

export default ProductList