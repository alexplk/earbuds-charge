import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Animation } from "./animation";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Animation />
          </Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
