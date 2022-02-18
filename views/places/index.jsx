const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6">
        <h2 key={place.name}>
          <a href={`/places/${index}`}>{place.name} </a>
        </h2>
        <p key={data.index} className="text-center">
          {place.cuisines}
        </p>
        <img key={data.index} src={place.pic} alt={place.name} />
        <p key={data.index} className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places to Rant and Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;
