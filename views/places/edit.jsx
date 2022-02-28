const React = require("react");
const Def = require("../default");

function edit_form(data) {
  return (
    <div>
      <Def>
        <main className="container">
          <h1 className="pt-2">Edit Page</h1>
          <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="name">Place Name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  value={data.place.name}
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="pic">Place Picture</label>
                <input
                  className="form-control"
                  type="url"
                  id="pic"
                  name="pic"
                  value={data.place.pic}
                />
              </div>
            </div>
            <div className="row ">
              <div className="form-group col-sm-6">
                <label htmlFor="city">City</label>
                <input
                  className="form-control"
                  id="city"
                  name="city"
                  value={data.place.city}
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="state">State</label>
                <input
                  className="form-control"
                  id="state"
                  name="state"
                  value={data.place.state}
                />
              </div>
              <div className="form-group ">
                <label htmlFor="cuisines">Cuisines</label>
                <input
                  className="form-control"
                  id="cuisines"
                  name="cuisines"
                  required
                  value={data.place.cuisines}
                />
              </div>
            </div>
            <input
              className="btn btn-primary  mb-5 mt-5 btn-lg"
              type="submit"
              value="Edit Place"
            />
          </form>
        </main>
      </Def>
    </div>
  );
}

module.exports = edit_form;
