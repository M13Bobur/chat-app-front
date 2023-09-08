import React from "react";
import TaskCard from "components/Cards/TaskCard";
import { AnswerSection, Container, Description } from "./style";
import { Col, Image, Row } from "antd";

export default ({ data }) => {
  return (
    <Container>
      <div className="work">
        <TaskCard canDeleteImage data={data} allowEdit borderLess />
        {data.resp.length > 0 ? (
          <AnswerSection>
            <h3>Юборилган жавоблар!</h3>{" "}
            <Row gutter={[10, 20]} align="content-start" justify="start">
              {data.resp?.map((item, index) => (
                <>
                  <Col key={`item ${index}`} span={3}>
                    {item?.media?.map((itm) => (
                      <Image key={itm} loading="lazy" width={100} src={itm} />
                    ))}
                  </Col>
                  <Col span={21}>
                    <Description>{item?.title}</Description>
                  </Col>
                </>
              ))}
            </Row>
          </AnswerSection>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};
