import './ItemCards.css'
import { Link } from "react-router-dom";


export default function ItemCards(item) {  


  return (
    <Link to={`/collections/${item.item.collection}/${item.item.imageName1}`} state={item}>

      <div className="singleItem">
            <div>
              <img className="rounded" src={item.item.imageUrl1} alt=''></img>
            </div>
            <h2>Title: { item.item.title }</h2>
            <h4>Description: { item.item.description }</h4>
            <h4>Collection: { item.item.collection }</h4>


      </div>
    </Link>
  )
}
