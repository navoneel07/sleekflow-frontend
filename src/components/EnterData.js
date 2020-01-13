import React, { Component, Fragment } from "react";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Form
} from "semantic-ui-react";

const Info = () => (
  <Form>
    <Form.Input
      fluid
      icon="building outline"
      iconPosition="left"
      placeholder="Company Logo (URL)"
    />
    <Form.TextArea placeholder="Message" />
    <Form.Input
      fluid
      icon="building outline"
      iconPosition="left"
      placeholder="Color"
    />
  </Form>
);

class Widget extends Component {
  constructor(props) {
    super(props);
  }
}

class FormHolder extends Component {
  render() {
    return (
      <Segment
        inverted
        color="blue"
        textAlign="center"
        style={{ padding: "2em 0em" }}
        vertical
      >
        <Grid>
          <Grid.Column width={10}>
            <Container text>
              <br></br>
              <Info />
              <br></br>
            </Container>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign="middle">
            <Header
              inverted
              as="h1"
              content="2. Enter the following details"
              style={{
                fontSize: "2.5em",
                fontWeight: "normal",
                marginBottom: 0
              }}
            />
          </Grid.Column>
        </Grid>
        <Button>Submit</Button>
      </Segment>
    );
  }
}

export default FormHolder;
