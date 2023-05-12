import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"


const DestinationData = () => {
  return(
    <div className="destination">
      <h1>Popular Destiations</h1>
      <p>Tours give you the oppurtunity to see a lot, within a time frame</p>


      <div className="first-des">
        <div className="des-text">
          <h2>Taal volcano, Batangas</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil inventore eligendi dolorum soluta temporibus labore blanditiis cumque atque repellendus aperiam? Ipsam modi ullam rem numquam cupiditate animi cum aliquam sed.lorem
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nostrum? Assumenda nam non molestiae magni nulla in architecto unde eius blanditiis explicabo, exercitationem animi corporis? Unde quae alias adipisci aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur beatae, expedita ab sed eos? A, recusandae! Neque temporibus eligendi ut eveniet aliquid dicta velit. Vitae ipsa molestiae ipsum.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Mountain1}/>
          <img alt="img" src={Mountain2}/>
        </div>
      </div>
    </div>
  )
}

export default DestinationData;
