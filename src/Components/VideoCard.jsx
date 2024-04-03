import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const{caption,link}=video

    let today = new Date()
    let timeStamp= new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timeStamp);
  let videoHistory={caption,link,timeStamp}

  // maki api call
  await addVideoHistoryAPI(videoHistory)
  }
  const removeVideo= async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }
  const dragStarted= (e,id)=>{
    console.log("Drag started...video Id:",+id);
    e.dataTransfer.setData("VideoId",id)
  }

  return (
    <> 
     <Card draggable onDragStart={e=>dragStarted(e,video?.id)} style={{ width: '12rem' }}>
     <Card.Img variant="top"style={{width:"100%", height:"200px"}} onClick={handleShow} src={video?.url}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h5>{video?.caption}</h5>
          {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn'><i class="fa-solid fa-trash-can text-danger"></i></button>}
        </Card.Title>       
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>


    </>
  )
}

export default VideoCard