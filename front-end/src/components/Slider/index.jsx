import React from 'react'

function Slider() {
  return (
    <div className="col-12 px-0">
      <div id="slider" className="carousel slide w-100" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active"></li>
          <li data-target="#slider" data-slide-to="1"></li>
          <li data-target="#slider" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src='https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png'
              className="slider-img"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2018/02/11/17/43/bitcoin-3146330_960_720.jpg"
              className="slider-img"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/12/08/51/payroll-3219081_960_720.jpg"
              className="slider-img"
            />
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#slider"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#slider"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Slider
