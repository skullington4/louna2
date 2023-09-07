import './SingleItem.css'

export default function SingleItem(item) {  

  return (
    <div className="flex flex-col items-center justify-center singleItem">
          <h2>Title: { item.item.title }</h2>
          <h4>Description: { item.item.description }</h4>
          <img className="rounded" width="430" height="768" src={item.item.imageUrl}></img>

    </div>
  )
}
