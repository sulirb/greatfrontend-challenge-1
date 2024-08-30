/* eslint-disable react/no-unescaped-entities */
import "./App.css";
import photo from "../img/profile-thumbnail.png";

function App() {
  return (
    <div className="card">
      <div className="card-elements">
        <div className="flex-card">
          <img className="photo" src={photo} alt="thumbnail" />
          <div className="identity">
            <div className="name">Sarah Dole</div>
            <div className="username">@sarahdole</div>
          </div>
        </div>
        <div className="message">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </div>
      </div>
    </div>
  );
}

export default App;
