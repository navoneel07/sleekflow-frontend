import React, { Component, Fragment } from "react";
import {
  Container,
  Menu,
  Image,
  Header,
  Button,
  Icon,
  Segment,
  Grid
} from "semantic-ui-react";

const Head = () => (
  <Container text>
    <Header
      as="h1"
      content="The SleekFlow Widget"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "3em"
      }}
    />
    <Header
      as="h2"
      content="Easily talk to clients across a variety of channels, simultaneously"
      inverted
      style={{
        fontSize: "1.5em",
        fontWeight: "normal",
        marginTop: "1.5em"
      }}
    />
    <p>
      <br></br>
    </p>
    <Button inverted size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

const MenuBar = () => (
  <Menu color="blue" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="small" src="" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a" name="home">
          Home
        </Menu.Item>
        <Menu.Item as="a" name="sleekflow">
          Sleekflow
        </Menu.Item>
        <Menu.Item as="a" name="widget">
          Widget
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

class HeaderContainer extends Component {
  render() {
    return (
      <Segment
        inverted
        color="blue"
        textAlign="center"
        style={{ minHeight: 700, padding: "1em 0em" }}
        vertical
      >
        <MenuBar />
        <Grid>
          <Grid.Column width={10}>
            <Head />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default HeaderContainer;
