import "./App.css";
import React, { Route, Component } from "react";
import axios from "axios";
// import ProductList from "./ProductList";
// import Header from "./Header";
// import Results from "./Results";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allAPIData: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        "https://api.infermedica.com/v2",
        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/",
        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=${userInput}",
        // "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7K1lMY96eMDJ7GsheuvqeW4NwdKvRuHBFpiJY2eV&q=${https://www.nps.gov/afam/index.htm}",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        this.setState({
          allAPIData: response.data.data,
        });
      });
  };

  render() {
    return (
      <div className="App-header">
        <h1> SelfDoctor </h1>
        {/* <Header /> */}
        {/* <Results allproducts={this.props.data} /> */}
        {/* <ProductList products={this.props.data} /> */}
      </div>
    );
  }
}

export default App;

// axios.post("https://api.infermedica.com/v2", data)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };
