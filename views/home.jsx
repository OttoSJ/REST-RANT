const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
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
