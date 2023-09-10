import './SingleCollection.css'

export default function SingleCollection(collection) {  

  return (
    <div className="singleCollection">
          <div>
            <img className="rounded" src={collection.collection.imageUrl}></img>
          </div>
          <h2>Title: { collection.collection.title }</h2>

    </div>
  )
}
