import React, { useState, useEffect } from "react";

export const Projects = ({ projectsRef }) => {
  const [projectOne, setProjectOne] = useState(false);
  const [projectTwo, setProjectTwo] = useState(false);
  const [projectThree, setProjectThree] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
}, [screenSize])

  const handleProjectOneEnter = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectOne(true);
    }
  };

  const handleProjectOneLeave = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectOne(false);
    }
  };

  const handleProjectTwoEnter = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectTwo(true);
    }
  };

  const handleProjectTwoLeave = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectTwo(false);
    }
  };

  const handleProjectThreeEnter = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectThree(true);
    }
  };

  const handleProjectThreeLeave = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectThree(false);
    }
  };
  

  const projectOneDesc = (
    <div className="project-desc">
      <h3>Pokedex App</h3>
      <p>
        My React.js Pokedex App is a responsive web application that offers detailed information on over 800 Pokémon. It's designed for a seamless user experience, allowing you to explore their stats, abilities, and more. 
      </p>
      <p>
        Utilizing a RESTful API, it dynamically updates the UI based on your search, and its visually appealing design makes discovering Pokémon a delightful experience.
      </p>
      <h3>Technologies</h3>
      <div className="icon-container">
        <div>
          <img src="./images/react.png" alt="React"/>
          <img src="./images/sass.png" alt="React"/>
          <img src="./images/api.png" alt="API"/>
        </div>
        <div className="site-container">
          <a className="code-btn" href="https://github.com/Crowbr1995/react-pokedex-app" target="_blank">
          Code
          </a>
          <a className="code-btn" href="https://crowbr1995.github.io/react-pokedex-app/" target="_blank">
          Live Site
          </a>
        </div>
      </div>
    </div>
  )

  const projectTwoDesc = (            
    <div className="project-desc">
      <h3>Weather App</h3>
      <p>
          The Weather App is a responsive web application built with React that provides real-time weather information for any location. It allows users to search for a specific location and displays current weather conditions, temperature, humidity, wind speed, and a 5-day forecast.
      </p>
      <p>
          The app fetches weather data from a third-party API and dynamically updates the UI based on the user's search. It features a clean and intuitive user interface, with visually appealing icons and a modern design.
      </p>
      <h3>Technologies</h3>
      <div className="icon-container">
        <div>
          <img src="./images/react.png" alt="React"/>
          <img src="./images/api.png" alt="API"/>
        </div>
        <div className="site-container">
          <a className="code-btn" href="https://github.com/Crowbr1995/react-weather-app" target="_blank">
          Code
          </a>
          <a className="code-btn" href="https://crowbr1995.github.io/react-weather-app/" target="_blank">
          Live Site
          </a>
        </div>
      </div>
    </div>
  )

  const projectThreeDesc = (            
    <div className="project-desc">
      <h3>Tik Tak Toe</h3>
      <p>
          A simple Tik Tak Toe game features made from HTML, CSS and JavaScript that features a simple and intuitive user interface, with a responsive layout that works well on both desktop and mobile devices. It keeps track of the current player's turn, displays a message when the game ends in a win or a draw, and allows players to reset the game and start a new round.
      </p>
      <h3>Technologies</h3>
      <div className="icon-container">
        <div>
          <img src="./images/html.png" alt="HTML"/>
          <img src="./images/css.png" alt="CSS"/>
          <img src="./images/js.png" alt="JavaScript"/>
        </div>
        <div className="site-container">
          <a className="code-btn" href="https://github.com/Crowbr1995/JS-Tic-Tac-Toe" target="_blank">
          Code
          </a>
          <a className="code-btn" href="https://crowbr1995.github.io/JS-Tic-Tac-Toe/" target="_blank">
          Live Site
          </a>
        </div>
      </div>
    </div>
  )
  

  return (
    <>
      <div ref={projectsRef} className="project-container">
        <h1>Projects</h1>
        <div
          className={`project project-1 ${screenSize.width <= 1100 && screenSize.width >= 575 ? 'hovered' : ''}`}
          onMouseEnter={handleProjectOneEnter}
          onMouseLeave={handleProjectOneLeave}>
            <div className="img-container">
                <img src="./images/pokemon.png"/>
                {projectOne && projectOneDesc}
            </div>
            {screenSize.width >= 1100 || screenSize.width <= 575 ? projectOneDesc : ''}
        </div> 
       
        <div
          className={`project project-2 ${screenSize.width <= 1100 && screenSize.width >= 575 ? 'hovered' : ''}`}
          onMouseEnter={handleProjectTwoEnter}
          onMouseLeave={handleProjectTwoLeave}>
            {screenSize.width >= 1100 && projectTwoDesc}
            <div className="img-container">
              {projectTwo && projectTwoDesc}
                <img src="./images/wa.png"/>     
            </div>
            {screenSize.width <= 575 ? projectTwoDesc : ''}
        </div>

        <div
          className={`project project-1 ${screenSize.width <= 1100 && screenSize.width >= 575 ? 'hovered' : ''}`}
          onMouseEnter={handleProjectThreeEnter}
          onMouseLeave={handleProjectThreeLeave}>
            <div className="img-container">
                <img src="./images/ttt.png"/>
                {projectThree && projectThreeDesc}
            </div>
            {screenSize.width >= 1100 || screenSize.width <= 575 ? projectThreeDesc : ''}
        </div> 

      </div>
    </>
  );
};

