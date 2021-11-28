import React from 'react'

const Video = () => {
    return (
        <div>
        

<a href="#pop-up">
  <div class="play-button">
  <div class="play-icon">
    
  </div>
</div>
</a>



<div class="video-pop" id="pop-up">
  <div class="pop-bg">
    <div class="pop-container">
      <a class="close" href="#">&times;</a>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LqmratdBFNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>
        </div>
    )
}

export default Video
