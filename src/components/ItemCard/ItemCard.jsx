import './ItemCard.css'

export default function ItemCard(item) {  

  return (
    <div className="singleItem">
          <div>
            <img className="rounded" src={item.item.imageUrl}></img>
          </div>
          <h2>Title: { item.item.title }</h2>
          <h4>Description: { item.item.description }</h4>

    </div>
  )
}