import photo from "C:/Users/Sean/Documents/VSCode Files/giulia_website/src/Images/about_me_img_wide-min.png"

import "./aboutMe.css"

function AboutMe() {
    return (
      <div className="about-me-container">
        <div className="about-photo-container">
          <img className="about-photo" src={photo} alt="" />
        </div>
        <div className="about-text-container">
          <p className="about-me-text">
            Born and raised in Brescia, Italy, with a passion for drawing. I was
            not always constant. I drew according to my mood, but every time I
            did it I felt good. it was a way to express myself even though I had
            not really found my style.
          </p>
          <br />
          <p className="about-me-text">
            In 2017 I left for Finland and in a year alone I started to create
            and experiment, imagining characters and places that stimulated my
            imagination.
          </p>
          <br />
          <p className="about-me-text">
            I started working with a kindergarten and this introduced me to the
            love of children's illustration. Back in Italy, I completed several
            courses in graphic design and illustration as well as children's
            illustration.
          </p>
          <br />
          <p className="about-me-text">
            In 2019 I left for Germany, I continue to experiment until I can
            select what I love to draw the most, namely animals and people.
          </p>
          <br />
          <p className="about-me-text">
            In 2020 my drawing "homesick" ends up on the front page of the
            Brescia newspaper, as a symbol of the fight against the COVID-19
            pandemic where Brescia and Bergamo were the cities most affected by
            the virus in Italy.
          </p>
          <br />
          <p className="about-me-text">
            In 2022 I switched to digital illustration, I took a course to be
            able to use programmes such as Procreate and Illustrator.
          </p>
          <br />
          <p className="about-me-text">
            In January 2023 my first book as an illustrator 'Wünschen kann man
            sich alles' is published.
          </p>
        </div>
      </div>
    );
}

export default AboutMe;