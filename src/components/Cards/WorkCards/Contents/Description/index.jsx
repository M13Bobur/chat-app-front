import { Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Highlighter from "react-highlight-words";
import {
  Descriptions,
  DescriptionText,
  DescriptionTitle,
  FooterDescription,
} from "./style";
import "./style.css";

const Description = ({
  mainData = "",
  title,
  onChange,
  value,
  workId,
  errorHelper,
  searchWords,
}) => {
  const { role } = useSelector((state) => state.authReducer);
  const location = useLocation();
  return (
    <FooterDescription>
      <Descriptions>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionText>
          {role === "groupsecretary" && location.pathname === "/new-works" ? (
            <Input.TextArea
              className={`${errorHelper ? "inputError" : ""} input_body`}
              value={value}
              onChange={(e) => onChange(e, workId)}
              placeholder="Малумот ёзинг"
              autoSize={{ minRows: 5 }}
            />
          ) : (
            <>
              <Highlighter
                highlightClassName="Active"
                searchWords={[searchWords]}
                autoEscape={true}
                textToHighlight={`${mainData ?? "Изохлар йўқ!"}`}
              />
            </>
          )}
        </DescriptionText>
      </Descriptions>
    </FooterDescription>
  );
};

export default Description;
