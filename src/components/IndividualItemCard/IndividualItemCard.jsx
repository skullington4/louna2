import './IndividualItemCard.css'

export default function IndividualItemCard(item) {  

  console.log(item, "Ind. Card page")
  return (
   

      <div className="singleItem">
            <h2 className="title">Title: { item.item.title }</h2>
            <div className="imageanddesc">
              <h4 className="desc">Description: { item.item.description }</h4>
              <img className="image" src={item.item.imageUrl} alt=''></img>
            </div>
            <h4>Collection: { item.item.collection }</h4>


      </div>

  )
}
