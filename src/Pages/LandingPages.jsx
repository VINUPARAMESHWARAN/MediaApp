import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPages() {
  const navigateByUrl=useNavigate()
  return (
    <>
    <Row>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{fontSize:'40px'}} className='mt-5'>Welcome to <span className='text-warning'>Media-player</span></h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis a distinctio neque repellat iusto obcaecati pariatur odit nihil eaque illo, voluptatibus nostrum deleniti velit ipsam omnis. Neque, nobis. Ipsum, sunt!</p>
        <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4'>Get started</button>
      </Col>
      <Col lg={5}>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" alt="" style={{width:'800px', height:'600px'}} />
      </Col>
      <Col></Col>
    </Row>

    <div className='container mb-3 d-flex align-items-center justify-content-center flex-column'>
      <h3>Features</h3>
      <div className=' cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
        {/* cards */}
      <Card style={{ width: '18rem' }} className='p-4 bg-info'>
      <Card.Img variant="top"  height={'300px'} width={'300px'}  src="https://gifdb.com/images/high/psychedelic-funny-pikachu-vr82amo9eyyu8zq2.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='p-4 bg-info'>
      <Card.Img variant="top"  height={'300px'} width={'300px'}  src="https://lh3.googleusercontent.com/proxy/2GSSGlYuAu76v0gvIo58I4tJh9-gNilCMVUfyxcSbxWBC939ncKYeKyEdx4Epfm9-GoYWEJiNS9y1YOTH1WyUCSxwndgyxqYeSqzylOcR-GJ6CAJjy8hp7s-gqJKAaLFgDJwthTr_QbWA8isY0JOjt6_1py1_w" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://gifdb.com/images/high/psychedelic-spaced-out-homer-simpson-wgy70atq3lzzb86a.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className='container border rounded p-5 border-light mb-5 d-flex align-item-center justify-content-between w-100'>
      <div className='col-lg-5'>
        <h4 className='text-warning'>Simple, Powerfull & Fast</h4>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everyhting :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore dolore at praesentium assumenda, perspiciatis qui, aliquid maxime expedita in harum totam quis beatae dicta quos maiores ratione vel fugiat!</h6>
      
        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everyhting :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore dolore at praesentium assumenda, perspiciatis qui, aliquid maxime expedita in harum totam quis beatae dicta quos maiores ratione vel fugiat!</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everyhting :</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, labore dolore at praesentium assumenda, perspiciatis qui, aliquid maxime expedita in harum totam quis beatae dicta quos maiores ratione vel fugiat!</h6>

      </div>
      <div className='video col-lg-5 mt-5'>
      <iframe width="450" height="250" src="https://www.youtube.com/embed/60ItHLz5WEA?si=h5UnqRryl2hODuB_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>

    </>
  )
}

export default LandingPages