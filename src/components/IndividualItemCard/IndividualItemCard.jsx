import './IndividualItemCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function IndividualItemCard(item) {  

  const id = item.item.id
  const [imageSlide, setImageSlide] = useState(item.item.imageUrl1);

  let paramsName = useParams();
  
  useEffect(() => {
      async function getItem() {
          const result = await axios.get(`/api/collections/${paramsName.collection}/${paramsName.item}`)
          setImageSlide(result.data.imageUrl1)
      }
      getItem();

  }, [])

  
  async function handleClick(clickId) {
    setImageSlide(clickId);
  }

  const deleteItemClicked = async ({id}) => {
    console.log(`deletePostClicked = (${id})`)
    await axios.delete("/api/collections/" + id)
  }

  return (
      <div className="individualItem">
        <div className="allPictures">
          <div>
              <img className="bigImage" src={imageSlide} alt=''></img>
          </div>
          <div>
              <img className="thumbnailImage" src={item.item.imageUrl1} alt='' onClick={() => handleClick(item.item.imageUrl1)}></img>
              <img className="thumbnailImage" src={item.item.imageUrl2} alt='' onClick={() => handleClick(item.item.imageUrl2)}></img>
              <img className="thumbnailImage" src={item.item.imageUrl3} alt='' onClick={() => handleClick(item.item.imageUrl3)}></img>
          </div>
        </div>
        <div className="restOfPage">

          <h2 className="title">{ item.item.title }</h2>
              <div className="imageanddesc">
                <h4 className="desc">Description: { item.item.description }
                <div>
                  <Link to={"https://" + item.item.link1} target="_blank" >Shirt</Link>
                </div>
                <div>
                  <Link to={"https://" + item.item.link2} target="_blank" >Pants</Link>
                </div>
                </h4>
              </div>
              
              <h4>Collection: { item.item.collection }</h4>
        </div>







            <div onClick={() => deleteItemClicked({id})}>
              <Link to={`/collections`}>
                <h6 className=''> X </h6>
              </Link>
              
            </div>
      </div>

  )
}
