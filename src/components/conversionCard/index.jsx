import React from 'react';
import {Container, Card, Row, Circle, VerticalLine} from "./style";

const ConversionCard = () => {
  return (
    <Container>
      <Card>
        <Row>
          <div className="wrapper">
            <Circle>AFYA</Circle>
            <h1>143.00</h1>
            <p>balance</p>
          </div>
          <VerticalLine className="vertical-line"></VerticalLine>
          <div className="wrapper">
            <Circle>ZAR</Circle>
            <h1>167.00</h1>
            <p>balance</p>
          </div>
        </Row>
      </Card>
    </Container>
  )
}

export default ConversionCard;
