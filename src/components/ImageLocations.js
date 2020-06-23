import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

import '../App.css'

export default class ImageLocations extends Component {


  render() {
    return (
        <Carousel interval={1000} >
            <Carousel.Item className="carousel-item">
                <img 
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/08/fb/9a/08fb9aa4515240a5c52dbd68fd76566e.jpg"
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/08/fb/9a/08fb9aa4515240a5c52dbd68fd76566e.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="carousel-item">
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/08/fb/9a/08fb9aa4515240a5c52dbd68fd76566e.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
  }
}




// function ImageLocations(props) {

//     var items = [
//                     {
//                         imgsrc: "https://i.pinimg.com/originals/08/fb/9a/08fb9aa4515240a5c52dbd68fd76566e.jpg",
//                         imgalt: "First Slide",
//                         imgtitle: "Probably the most random thing you have ever seen!",
//                         imgcaption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
//                     },
//                     {
//                         imgsrc: "https://i.pinimg.com/originals/08/fb/9a/08fb9aa4515240a5c52dbd68fd76566e.jpg",
//                         imgalt: "Second Slide",
//                         imgtitle: "Probably the most random thing you have ever seen!",
//                         imgcaption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
//                     },
//                     {
//                         imgsrc: "https://i.pinimg.com/originals/08/fb/9a/08fb9aa4515240a5c52dbd68fd76566e.jpg",
//                         imgalt: "Third Slide",
//                         imgtitle: "Probably the most random thing you have ever seen!",
//                         imgcaption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
//                     } 
//                 ]    

//     return (
//             <Carousel>
//                 { items.map( item => <Item item={item} /> ) }
//             </Carousel>


//     )
// }

// function Item(props) {
//             <Carousel.Item className="carousel-item">
//                 <img 
//                     className="d-block w-100"
//                     src={props.item.imgsrc}
//                     alt={props.item.imgalt}
//                 />

//                 <Carousel.Caption>
//                     <h3>{props.item.imgtitle}</h3>
//                     <p>{props.item.imgcaption}</p>
//                 </Carousel.Caption>
//             </Carousel.Item>
// }

 

