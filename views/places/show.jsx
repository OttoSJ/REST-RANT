const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <div>
        <main>
          <div className="row">
            <div className="col-sm-6">
              <img className="m-4" src={data.place.pic} alt={data.place.name} />
            </div>
            <div className="col-sm-6">
              <h2 className="m-4">{data.place.name} </h2>
              <h3>Rating</h3>
              <p>Not Rated</p>
              <h3>Description</h3>
              <p className="text-center">
                Located in {data.place.city}, {data.place.state} and serving{" "}
                {data.place.cuisines}
              </p>
              <div className="d-flex justify-content-center">
                <a
                  href={`/places/${data.id}/edit`}
                  className="btn btn-warning mx-4"
                >
                  Edit <i class="fas fa-trash-alt"></i>
                </a>
                <form
                  method="POST"
                  action={`/places/${data.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-danger btn-md">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <h2> Comments </h2>
            <p>No comments yet!</p>
          </div>
        </main>
      </div>
    </Def>
  );
}

module.exports = show;
