const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex flex-row justify-content-around">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>
        <h1>REST-Rant</h1>
        <div>
          <img id="home-page-pic" src="/images/fingerfood.jpg" alt="" />
          <div>
            Photo by{" "}
            <a href="https://www.pexels.com/photo/chef-preparing-vegetable-dish-on-tree-slab-1267320/">
              Elevate
            </a>{" "}
            on
            <a href="https://www.pexels.com/"> Pexels</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
