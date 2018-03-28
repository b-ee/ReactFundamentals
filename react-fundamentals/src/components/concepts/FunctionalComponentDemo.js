import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
// CardText omitted

const FunctionalComponentDemo = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Functional Component</h1>
        <p>Functional Components allow you to render information to the web page without having to use or change state.</p>
        <dl>
          <dt>Presentational</dt>
          <dd>Often used for simply rendering a small chunk of code to the DOM.</dd>
          <dt>No 'this' keyword</dt>
          <dd>Unlike class components, functional ones don't use 'this'.</dd>
          <dt>No state</dt>
          <dd>These are 'dumb' components for UI.</dd>
          <dt>return()</dt>
          <dd>Must return a single element.</dd>
        </dl>
      </div>

      <Row>
        <Col sm="6">
          <Card body>
            <CardImg width="100%" height="350rem" src="https://pre00.deviantart.net/54d9/th/pre/f/2016/037/8/4/dinosaurs_by_fel_x-d9qqxge.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Regular Function</CardTitle>
              <CardSubtitle>Savage. Unrefined. Pre-6.</CardSubtitle>
              <br />
              {/* <CardText>function helloWorld(){ console.log('Hello World') };</CardText> */}
              <Button href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" target="blank">MDN docs</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardImg width="100%" height="350rem" src="http://www.myfreewallpapers.net/fantasy/wallpapers/future-landscape-02.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle>Arrow Function</CardTitle>
              <CardSubtitle>E6. Modern. WE LIVE IN THE FUTURE. THE FUTURE IS NOW.</CardSubtitle>
              <br />
              {/* <CardText>const helloWorld = () => console.log('Hello World');</CardText> */}
              <Button href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="blank">MDN docs</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FunctionalComponentDemo;