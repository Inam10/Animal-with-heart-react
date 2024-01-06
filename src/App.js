import "bulma/css/bulma.css";
import PorfileCard from "./ProfileCard";
import AlexaImage from "./Images/alexa.png";
import CortanaImage from "./Images/cortana.png";
import SiriImage from "./Images/siri.png";

function App() {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistance </p>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <PorfileCard title="Alexa" handle="@alexa" image={AlexaImage}  descripton = "This is provide be amazon"/>
            </div>
            <div className="column is-3">
              <PorfileCard
                title="Cotrana"
                handle="@cortana"
                image={CortanaImage}
                descripton = "This is provide be amazon"
              />
            </div>
            <div className="column is-3">
              <PorfileCard title="Siri" handle="@siri" image={SiriImage} descripton = "This is provide be amazon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
