import './CollectionCard.css'
import { Link } from "react-router-dom";


export default function CollectionCard(collection) {  

  return (

    <Link to={`/collections/${collection.collection.title}`} state={collection}>
        <div className="singleCollection">
            <div>
                <img src={collection.collection.imageUrl}></img>
            </div>
            <h2>{ collection.collection.title }</h2>

        </div>
    </Link>
  )
}
