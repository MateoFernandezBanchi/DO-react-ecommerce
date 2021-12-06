import React from 'react'


function Carousel({foto1, foto2, foto3} ) {


    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  srcSet={foto1}  className="d-block w-100 imgCarousel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img srcSet={foto2} className="d-block w-100 imgCarousel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  srcSet={foto3} className="d-block w-100 imgCarousel" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}

export default Carousel
