const React = require("react");
const modeFix = require("tar/lib/mode-fix");
const Def = require("../default");

function showPage() {
  return (
    <Def>
      <div>
        <main>
          <h1>SHOW PAGE</h1>
        </main>
      </div>
    </Def>
  );
}

module.exports = showPage;
