import React from 'react'
import './Carousel.css';


function Carousel({foto1, foto2, foto3} ) {


    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={foto1}  className="d-block w-50 imgCarousel" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={foto2} className="d-block w-50 imgCarousel" alt="..."/>
    </div>
    <div class="carousel-item">
      <img  src={foto3} className="d-block w-50 imgCarousel" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        </div>
    )
}

export default Carousel
