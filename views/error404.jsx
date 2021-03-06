const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Ooops, sorry, we can't find this page!</p>
        <div>
          <img src="/images/facepalm.jpg" alt="man doing a facepalm" />
          <div></div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
