import React, { Component, Fragment } from "react";
import {
  Container,
  Header,
  Button,
  Segment,
  Grid,
  Form
} from "semantic-ui-react";

class AdressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.setState(prevState => ({ active: !prevState.active }));
  };

  render() {
    const { active } = this.state;
    return (
      <Form
        style={{
          margin: "2em 0em"
        }}
      >
        <Form.Group inline>
          <Form.Button
            circular
            active={active}
            color={active ? this.props.color : null}
            size="huge"
            icon={this.props.name}
            onClick={this.handleClick}
          />
          <Form.Input
            width={10}
            disabled={!active}
            icon={this.props.name}
            placeholder={this.props.place}
            iconPosition="left"
          />
          {/* <Form.Button disabled={!active} content="Submit" /> */}
        </Form.Group>
      </Form>
    );
  }
}

class SocialContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Segment textAlign="center" style={{ padding: "3em 0em" }} vertical>
        <Grid divided>
          <Grid.Column width={10}>
            <Container text>
              <AdressForm name="whatsapp" color="green" place="Whatsapp" />
              <AdressForm
                name="facebook messenger"
                color="facebook"
                place="Facebook"
              />
              <AdressForm name="wechat" color="green" place="WeChat" />
              <AdressForm name="linechat" color="green" place="Line" />
              <AdressForm name="viber" color="violet" place="Viber" />
              <AdressForm name="telegram plane" color="blue" place="Telegram" />
              <AdressForm name="mail" color="yellow" place="Mail" />
              <AdressForm name="call" color="orange" place="Call" />
            </Container>
          </Grid.Column>
          <Grid.Column width={6} verticalAlign="middle">
            <Header
              as="h1"
              content="1. Add the socials you want"
              style={{
                fontSize: "2.5em",
                fontWeight: "normal",
                marginBottom: 0
              }}
            />
          </Grid.Column>
        </Grid>
        <Button size="large">Add Socials</Button>
      </Segment>
    );
  }
}

export default SocialContainer;
