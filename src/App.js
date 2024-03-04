import React from 'react'
import ImageSlider from './Imageslider';
const App = () => {
  const slides=[
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfp8OpGWKydpK4fw0zPn3OoxWu0fKZt22dtcccF5dKeQ&s",title:"Italy"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkyO9rTjphl1W_79UrxjRJ8mWGHRjHue-oQCY0boO5g&s",title:"Italy"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-osKUUqBT8Ey4Kz38NpkfJ1KIvh59O3T9V4fQBuNHcw&s",title:"Italy"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3K7JLbCcmtvtBb6E5FsawuTTPovI65u8n1l9olHXrA&s",title:"Italy"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaTohaYDhiPt9ZL7wicC0YJnp1v8Ls5Pu0YoJVvLj_g&s",title:"Italy"},
  ];

  const containerStyles={
    width:"500px",
    height:"280px",
    margin:"0 auto",
  }

  return (
    <div>
      <h1 >Hello App</h1>
      <div  style={containerStyles}>
        <ImageSlider slides={slides}></ImageSlider>
      </div>
    </div>
  )
}

export default App;