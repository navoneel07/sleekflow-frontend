import React, { Component } from "react";

import { Container, Icon, Button, Segment } from "semantic-ui-react";

const footer = () => (
  <Segment inverted textAlign="center" style={{ padding: "1em 0em" }} vertical>
    <Container text>
      Made with <Icon name="heart" color="red" />
      by SleekFlow.
    </Container>
  </Segment>
);

export default footer;
