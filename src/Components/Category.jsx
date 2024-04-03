import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getAllCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from './VideoCard';


function Category(dropVideoResponse) {

  const[allCategories,setAllCategories]=useState([])
  const [categoryName,setCategoryName]= useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd= async ()=>{
    if (categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
      }else{
        alert(result.message)
      }
    }else{
      alert("please fill the category field")
    }
  }
  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const getCategories= async()=>{
    const {data}= await getAllCategoryAPI()
    setAllCategories(data)
  }
  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  // drag and add
  const dragOver=(e)=>{
    console.log("Video card dragged over the category");
    e.preventDefault()
  }
  
  const videoDrop= async (e,categoryId)=>{
    const videoId=e.dataTransfer.getData("VideoId")
    console.log("Video Id"+videoId+"Dropped inside the category:"+categoryId);
    const {data}=await getAVideoAPI(videoId)
    // console.log(data);
    const selectedCategory= allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }
  
  const  videoDragStarted=(e,videoId,categoryId)=>{
    let datashare={ videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
  }
  console.log(allCategories);

  return (
    <>
    <div className='d-grid'>
      <button className='btn btn-info' onClick={handleShow}>Add category</button>
    </div>

    { allCategories?.length>0?allCategories.map(category=>(
 
<div className="border rounded p-3 mt-2" droppable="true" onDragOver={e=>dragOver(e)}  onDrop={e=>videoDrop(e,category?.id)}> <div className='d-flex justify-content-between align-items-center' >
   <h6>{category?.categoryName}</h6>
   <button onClick={()=>removeCategory(category?.id)} className='btn'><i class="fa-solid fa-trash-can text-danger"></i></button>
 </div>

 <Row>
  {
    category?.allVideos?.length>0?category?.allVideos.map(card=>(
    <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
    <VideoCard video={card} insideCategory={true}/>
    </Col>
    )):null
  }
 
</Row>

</div>
    )):<p className='text-danger fw-bolder'>no categories yet</p>}
   



    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel controlId="floatingName" label="Category Name">
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setCategoryName(e.target.value)}/>
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category