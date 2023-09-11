import React from "react";
import { NotFound } from "./style";
import Empty from "antd/lib/empty";

export default () => {
  return (
    <NotFound>
      <Empty description="Маълумот йўқ" />
    </NotFound>
  );
};
