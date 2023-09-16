import './IndividualItemCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function IndividualItemCard(item) {  

  const id = item.item.id



  const deleteItemClicked = async ({id}) => {
    console.log(`deletePostClicked = (${id})`)
    await axios.delete("/api/collections/" + id)
  }

  return (
   

      <div className="singleItem">
            <h2 className="title">{ item.item.title }</h2>
            <div className="imageanddesc">
              <h4 className="desc">Description: { item.item.description }</h4>
              <img className="image" src={item.item.imageUrl} alt=''></img>
            </div>
            <h4>Collection: { item.item.collection }</h4>

            <div onClick={() => deleteItemClicked({id})}>
              <Link to={`/collections/${item.item.collection}`}>
                <h6 className=''> X </h6>
              </Link>
              
            </div>
      </div>

  )
}
