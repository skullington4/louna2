import { Link } from "react-router-dom";


export default function IndividualItemCard(item) {  


  return (
    <Link to={`/collections/${item.item.collection}/${item.item.imageName}`} state={item}>

      <div className="singleItem">
            <div>
              <img className="rounded" src={item.item.imageUrl} alt=''></img>
            </div>
            <h2>Title: { item.item.title }</h2>
            <h4>Description: { item.item.description }</h4>
            <h4>Collection: { item.item.collection }</h4>


      </div>
    </Link>
  )
}
