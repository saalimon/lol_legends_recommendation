import logo from './logo.svg';
import '../css/pico.min.css';
import Champions from './Champions';
function App() {
  return (
    <div className="App">
      <header  className="container">
            <hgroup>
                <h1>LOL, Draft Pick Recomendation System!</h1>
                <h2>League of Legends is a team-based game with over 140 champions to make epic plays with.</h2>
              </hgroup>
        </header >
        <main className="container">
        <div className="grid">
                <div className="grid">
                    {[...Array(5)].map((x, i) =>
                      <div><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="Aatrox"/><span class="name">Aatrox</span></div>
                    )}  
                </div>
                <div className="grid">
                    {[...Array(5)].map((x, i) =>
                      <div><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="Aatrox"/><span class="name">Aatrox</span></div>
                    )}  
                </div>
          </div>
          <div className="grid">
                <div className="grid">
                    {[...Array(5)].map((x, i) =>
                      <div><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="Aatrox"/><span class="name">Aatrox</span></div>
                    )}  
                </div>
                <div className="grid">
                    {[...Array(5)].map((x, i) =>
                      <div><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg" alt="Aatrox"/><span class="name">Aatrox</span></div>
                    )}  
                </div>
          </div>
          <Champions />
        </main>
        <footer className="container">
            <small>Built with <a href="https://reactjs.org/">React</a> ✖ <a href="https://picocss.com">Pico</a> ✖ <a href="https://github.com/saalimon">Saalimon</a></small>
        </footer>
    </div>
  );
}

export default App;
