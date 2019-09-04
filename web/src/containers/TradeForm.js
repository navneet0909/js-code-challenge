import React from "react";
import { Container, Header } from "semantic-ui-react";

import { MakeDropDown } from "../components/MakeDropdown";
import { ModelDropDown } from "../components/ModelDropdown";

import "./TradeForm.scss";

export class TradeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      year: undefined,
      make: undefined,
      model: undefined,
      mileage: undefined
    };
  }

  handleFormChange = (e, { name, value }) => {
    name = name ? name : e.target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Header as="h2" style={{ margin: "3em 0 2em" }}>
          Trade-In Calculator
        </Header>
        <div className="form-body">
          <MakeDropDown onChange={this.handleFormChange} />
          <ModelDropDown
            year={this.state.year}
            make={this.state.make}
            onChange={this.handleFormChange}
          />
        </div>
      </Container>
    );
  }
}
