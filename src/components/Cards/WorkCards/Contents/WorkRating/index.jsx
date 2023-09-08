import React from "react";
import { Checkbox, Col, Row } from "antd";
import { Item, Box, Text, FlexBox } from "./style";
import Map from "../../../../Map";

export default ({
  bal,
  onChange,
  data,
  handleShowModal,
  workId,
  selectedRates,
}) => {
  return (
    <div>
      <Row gutter={[10, 15]}>
        <Col span={16}>
          {data?.map((item, index) => (
            <Item key={index + 1}>
              <Checkbox
                disabled={
                  !selectedRates.includes(item?._id) && bal - item.rate < 0
                }
                defaultValue={item._id}
                checked={selectedRates?.includes(item?._id)}
                onChange={() => onChange(workId, item?._id, item.rate)}
              >
                {item.title}
              </Checkbox>
              {item.rate}
            </Item>
          ))}
        </Col>
        <Col span={8}>
          <Box>
            <FlexBox>
              <Text>{bal}</Text>
              <Map handleShowModal={handleShowModal} />
            </FlexBox>
          </Box>
        </Col>
      </Row>
    </div>
  );
};
