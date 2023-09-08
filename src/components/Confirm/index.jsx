// Render Prop
import React from "react";

import { Box, TextContainer } from "./style";
import { Col, Row, Button } from "antd";
import Typograpy from "../Typograpy";
export default ({ agree, cancel }) => {
  return (
    <Box>
      <TextContainer>
        <Typograpy>Олиб ташлашни тасдиқлайсизми ?</Typograpy>
      </TextContainer>
      <Row justify="end" gutter={[8, 8]}>
        <Col>
          <Button onClick={cancel}>Бекор қилиш</Button>
        </Col>
        <Col>
          <Button type="primary" onClick={agree}>
            Тасдиқлаш
          </Button>
        </Col>
      </Row>
    </Box>
  );
};
