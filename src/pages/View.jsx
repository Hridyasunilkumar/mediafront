import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import {  getVideo } from '../service/allapi'





function View({ serverRes }) {

  const [allVideos, setallVideos] = useState([])
  const [deleteStatus, setdeleteStatus] = useState(false)
  // const [allCategories, setallCategories] = useState([])
  // const[allCategories,setallCategories]=useState([])

  // useEffect

  useEffect(() => {

    getallVideos()

  }, [serverRes, deleteStatus])

 

  // useEffect(() => {

  //   getallCategories()

  // }, [serverRes])


  const handleDeleteStatus = (res) => {
    setdeleteStatus(res)

  }



  // define a function for api call

  const getallVideos = async () => {

    // api call

    const response = await getVideo()
    //  console.log(response.data);
    setallVideos(response.data)

  }

  console.log(allVideos);

  





  return (
    <>
      <div className='border p-3 rounded m-4'>

        <Row>

          { 

            allVideos.map(video => (

                <Col sm={12} md={6}>
                <VideoCard card={video} handleDeleteStatus={handleDeleteStatus} />
                </Col>

            ))
 }


</Row>



      </div>


      {/* <div>
        
        {

allCategories.map(Category => (


  <Col sm={12} md={6}>
    <Categorycard cards={Category} />

  </Col>

))




}

        
      </div> */}

    </>
  )
}

export default View