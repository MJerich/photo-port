import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Et malesuada fames ac turpis egestas integer. Lorem sed risus ultricies tristique nulla aliquet enim. 
      Nunc id cursus metus aliquam eleifend mi in nulla posuere. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. 
      Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. 
      Tempus quam pellentesque nec nam. Ipsum suspendisse ultrices gravida dictum fusce. Nam at lectus urna duis convallis. 
      Accumsan in nisl nisi scelerisque. Pellentesque habitant morbi tristique senectus.
      </p>
    </section>
  );
}

export default About;