import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  state = { loading: true };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState({
      loading: false,
      name: json.pets[0].name,
      breed: json.pets[0].breed,
      animal: json.pets[0].animal,
      city: json.pets[0].city,
      state: json.pets[0].state,
      description: json.pets[0].description,
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
