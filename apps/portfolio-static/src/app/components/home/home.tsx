import './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <>
      <div className="row content-section">
        <div className="col-12">
          <h1>Hi there</h1>
          <p>
            My name is Stephanus and I am a full stack developer. Here's a short
            description of my skills and some projects that I've been working
            on. Some for fun, some to show I can actually do some of the things
            I say I can.
          </p>
        </div>
      </div>
      <div className="row mt-5 content-section">
        <h2 className="col-12">Skills</h2>
        <div className="col-6 mt-3">
          <h4>Front-end development</h4>
          <ul>
            <li>HTML/CSS</li>
            <li>Javascript / jQuery / Typescript</li>
            <li>RiotJS (beginner)</li>
            <li>ReactJS</li>
            <li>Moustache</li>
            <li>Webpack</li>
            <li>Angular 4-10</li>
            <li>Angular Universal (SSR)</li>
            <li>Angular shell (HTML that can be 'hydrated' to an SPA)</li>
            <li>Angular Elements (stand alone widgets)</li>
            <li>SCSS/LESS</li>
            <li>Ionic 3 & 4</li>
            <li>WebSQL/SQLLite/IndexDB</li>
          </ul>
        </div>
        <div className="col-6 mt-3">
          <h4>Back-end development</h4>
          <ul>
            <li>C#/Razer (beginner)</li>
            <li>Umbraco / Kentico</li>
            <li>Next JS / Express</li>
            <li>Server side rendering (SSR)</li>
            <li>Websockets</li>
            <li>Build Agents</li>
            <li>Mongo DB (novice)</li>
            <li>Azure Devops</li>
            <ul>
              <li>Built pipelines and managed artifacts</li>
            </ul>

            <li>Server side file triggers</li>
            <li>Git triggers</li>
            <li>Experimented with serverless functions</li>
            <li>MS SQL (novice)</li>
          </ul>
        </div>
        <div className="col-6 mt-3">
          <h4>Admin</h4>
          <ul>
            <li>Create UML diagrams for use stories and functional flows</li>
            <li>Advised on application architecture to fit SDLC</li>
            <li>Agile (novice)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
