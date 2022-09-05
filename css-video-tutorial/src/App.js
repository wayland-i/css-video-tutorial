import './App.css';

function App() {
  return (
    <>
      <h1>My Website</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>About Me</h2>
      <img id="main-image"src="https://pbs.twimg.com/media/E-o6gtkVgAAMzRU.jpg:large" alt="Koalas"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Includar:
        <ul>
            <li>Things go here</li>
            <li>Here is another thing</li>
            <li>There are three things</li>
        </ul>
      </p>

      <h2>Services</h2>
      <div id="container">
        <a id="google-link" href="https://www.google.com/">Click here to go to google</a>
      </div>
      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td>Peter</td>
          <td>Griffin</td>
        </tr>
        <tr>
          <td>Lois</td>
          <td>Griffin</td>
        </tr>
      </table>

      <div id="gradient"></div>

      <img src="https://i.pinimg.com/originals/e4/a1/74/e4a174cd93aca42b85636cf54b4ad08d.jpg" alt="Single Koala"></img>
    
      

      <div class="container">
        <div class="container-item" style={{ order: "4"}}>A</div>
        <div class="container-item" style={{ order: "3"}}>B</div>
        <div class="container-item" style={{ order: "5"}}>C</div>
        <div class="container-item" style={{ order: "1"}}>D</div>
        <div class="container-item" style={{ order: "2"}}>E</div>
      </div>


      <div class="grid-container">
        <div class="grid-item" style={{ background: "rgb(255, 150, 150)"}}>1</div>
        <div class="grid-item" style={{ background: "rgb(170, 255, 140)"}}>2</div>
        <div class="grid-item" style={{ background: "rgb(222, 132, 255)"}}>3</div>
        <div class="grid-item" style={{ background: "rgb(255, 207, 119)"}}>4</div>
        <div class="grid-item" style={{ background: "rgb(140, 210, 255)"}}>5</div>
      </div>

      <form class="form">
        <h1>Contact Us</h1>
        <input placeholder="Full Name" style={{ margin: "10px" }}></input> <br></br>
        <input placeholder="Email" style={{ margin: "10px" }}></input> <br></br>
        <textarea style={{ margin: "10px" }}></textarea> <br></br>
        <button class="form-button">Submit</button>
      </form>
    </>
  )
}

export default App;
