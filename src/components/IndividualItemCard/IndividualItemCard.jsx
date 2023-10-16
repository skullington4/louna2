import './IndividualItemCard.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function IndividualItemCard({user}) {  

  const [imageSlide, setImageSlide] = useState();
  let id = null;
  let paramsName = useParams();
  const [fullItem, setFullItem] = useState([]);
  
  useEffect(() => {
      async function getItem() {
          const result = await axios.get(`/api/collections/${paramsName.collection}/${paramsName.item}`)
          setImageSlide(result.data.imageUrl1)
          setFullItem(result.data)
          id = result.data.id
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
              <img className="thumbnailImage" src={fullItem.imageUrl1} alt='' onClick={() => handleClick(fullItem.imageUrl1)}></img>
              <img className="thumbnailImage" src={fullItem.imageUrl2} alt='' onClick={() => handleClick(fullItem.imageUrl2)}></img>
              <img className="thumbnailImage" src={fullItem.imageUrl3} alt='' onClick={() => handleClick(fullItem.imageUrl3)}></img>
          </div>
        </div>
        <div className="restOfPage">

          <h2 className="title">{ fullItem.title }</h2>
              <div className="imageanddesc">
                <h4 className="desc">Description: { fullItem.description }
                <div>
                  <Link to={"https://" + fullItem.link1} target="_blank" >Shirt</Link>
                </div>
                <div>
                  <Link to={"https://" + fullItem.link2} target="_blank" >Pants</Link>
                </div>
                </h4>
              </div>
              
              <h4>Collection: { fullItem.collection }</h4>
        </div>






        {user && (
        <>
          <div onClick={() => deleteItemClicked({id})}>
            <Link to={`/collections`}>
              <h6 className=''> X </h6>
            </Link>
            
          </div>
        </>
      )}

              

      </div>

  )
}
