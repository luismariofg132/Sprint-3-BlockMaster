import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {

    return (
        <Carousel fade className="slider" >
            <Carousel.Item>
                <img
                    src="https://image.tmdb.org/t/p/w1280/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://image.tmdb.org/t/p/w1280//eG0oOQVsniPAuecPzDD1B1gnYWy.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://image.tmdb.org/t/p/w1280/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider