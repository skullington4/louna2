import './ItemCards.css'
import { Link } from "react-router-dom";


export default function ItemCards(item) {  


  return (
    <Link to={`/collections/${item.item.collection}/${item.item.imageName1}`} state={item}>

      <div className="singleItem">
            <div>
              <img className="rounded" src={item.item.imageUrl1} alt=''></img>
            </div>
            <h2>{ item.item.title }</h2>
      </div>
    </Link>
  )
}
