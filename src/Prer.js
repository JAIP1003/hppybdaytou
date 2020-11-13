import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Prjp.css';

import pr1 from './srcFile/prr1.jpeg';
 import pr2 from './srcFile/prr2.jpg';
 import pr4 from './srcFile/prr4.jpg';
 import pr12 from './srcFile/prr12.jpg';
 import pr16 from './srcFile/prr16.jpg';
  import pr19 from './srcFile/prr19.jpg';


const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 100 },
      items: 1,
      slidesToSlide: 1
    }
  };
function Prer(){
    return(
        <div  style={{width:"100%",backgroundColor:"red",textAlign:"center"}}>
          <Container fluid >
            <Row>
              <Col  style={{width:"33%",color:"#fff"}}>
              <h1 className="jaii"><marquee behavior="alternate">HAPPY </marquee> </h1>
              </Col>
              <Col  style={{width:"33%",color:"#fff"}}>
              <h1 className="jaii"><marquee behavior="alternate" direction="right">BIRTHDAY </marquee> </h1>
              </Col>
              <Col  style={{width:"33%",color:"#fff"}}>
              <h1 className="jaii" ><marquee behavior="alternate">TO YOU </marquee> </h1>
              </Col>
            </Row>
          </Container>
         
            <Container >
                <Row>
                    <Col>
        <div className="OJCarousel">
      <Carousel swipeable={true}
      draggable={true}
      showDots={false}
      arrows={true}
      infinite={true}
      autoPlay={true }
       autoPlaySpeed={100}
      customTransition="all 3"
      transitionDuration={25000}
      responsive={responsive}>
   <marquee><div className="jaiimg">  <img  src={pr1} /></div></marquee> 
  <marquee> <div className="jaiimg">  <img  src={pr2}/></div></marquee> 
   <marquee> <div className="jaiimg"><img  src={pr4}/></div></marquee>
  <marquee> <div className="jaiimg"><img  src={pr12}/></div></marquee> 
  <marquee> <div className="jaiimg"><img  src={pr16}/></div></marquee> 
  <marquee> <div className="jaiimg"><img  src={pr19}/></div></marquee> 
</Carousel>;
</div>
</Col>
</Row>
</Container>

<Container fluid style={{backgroundColor:"blue"}}>
            <Row>
              <Col  style={{width:"33%",color:"#fff"}}>
              <h6 className="jaip"><marquee behavior="alternate">Made with ❤️ in Patna</marquee> </h6>
              </Col>
              <Col  style={{width:"33%",color:"#fff"}}>
              <h6 className="jaip"><marquee behavior="alternate" direction="right">Made with ❤️ in Patna </marquee> </h6>
              </Col>
            </Row>
          </Container>
        </div>
    )
}
 
export default Prer;