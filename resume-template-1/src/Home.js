import './Home.css';
import Footer from "./footer";

function Home() {
    return (
      <div>
        <div className='external-div'>
          <div className='home'>
            <div className='left-side-section'>
              <h1>Jotheeswaran N</h1>
              <h2>Expertise</h2>
              <button>
                know more
              </button>
            </div>
            <div className='right-side-section'>
              <img src='icon\man-icon.png' />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      
    );
  };
  
  export default Home;