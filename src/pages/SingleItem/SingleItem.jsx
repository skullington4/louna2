import './SingleItem.css'

export default function SingleItem(item) {  

  return (
    <div className="flex flex-col items-center justify-center singleItem">
          <div>
            <img className="rounded" src={item.item.imageUrl}></img>
          </div>
          <h2>Title: { item.item.title }</h2>
          <h4>Description: { item.item.description }</h4>

    </div>
  )
}
