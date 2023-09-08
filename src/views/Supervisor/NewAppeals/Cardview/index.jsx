import React, { useEffect, useState } from "react";
import TaskCard from "components/Cards/TaskCard";
import MultipleSelect from "components/FormElements/MultipleSelect";
import { Actions, CancelBtn, Container, SaveBtn } from "./style";

export default ({ data, objectList, submitForm, cancelAppeal, categories }) => {
  const [requirements, setRequirements] = useState({
    category: data?.category?._id,
    subCategory: data?.subCategory?._id,
  });
  const [parentCategory, setParentCategory] = useState(
    categories.filter((item) => item.parent == null)
  );
  const [subCategory, setSubCategory] = useState(
    categories.filter((item) => item.parent == data?.category?._id)
  );
  const handleObject = (value) => {
    if (value) {
      setRequirements((prev) => ({
        ...prev,
        ["object"]: value,
      }));
    } else {
      let foo = { ...requirements };
      delete foo.object;

      setRequirements(foo);
    }
  };
  const handleCategory = (value) => {
    if (value) {
      setSubCategory(categories.filter((item) => item.parent == value));
      setRequirements((prev) => ({
        ...prev,
        ["category"]: value,
      }));
      let foo = { ...requirements };
      delete foo.subCategory;
      setRequirements(foo);
    } else {
      let foo = { ...requirements };
      delete foo.category;
      setRequirements(foo);
      setSubCategory(categories.filter((item) => item.parent == null));
    }
  };
  console.log(requirements);
  const handleSubCategory = (value) => {
    if (value) {
      setRequirements((prev) => ({
        ...prev,
        ["subCategory"]: value,
      }));
    } else {
      let foo = { ...requirements };
      delete foo.subCategory;

      setRequirements(foo);
    }
  };
  return (
    <Container>
      <div className="work">
        <TaskCard canDeleteImage data={data} allowEdit borderLess />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div id="selects">
          <div id="object-select">
            <div id="title">Категория</div>
            <MultipleSelect
              // status={!requirements?.category && "error"}
              onChange={handleCategory}
              id={data?._id}
              data={parentCategory}
              placeholder=""
              defaultVal={requirements?.category}
              className="object-select-input"
            />
          </div>
        </div>

        <div id="selects">
          <div id="object-select">
            <div id="title">Суб категория</div>
            <MultipleSelect
              // status={!requirements?.subCategory && "error"}
              onChange={handleSubCategory}
              id={data?._id}
              data={subCategory}
              placeholder=""
              defaultVal={requirements?.subCategory}
              className="object-select-input"
              disabled={!(requirements?.category && true)}
            />
          </div>
        </div>
        <div id="selects">
          <div id="object-select">
            <div id="title">Фуқаролар йиғини номи</div>
            <MultipleSelect
              status={!requirements?.object && "error"}
              onChange={handleObject}
              id={data?._id}
              data={objectList}
              placeholder=""
              defaultVal={requirements?.object}
              className="object-select-input"
            />
          </div>
        </div>
      </div>
      <Actions>
        <div className="actions-block">
          <CancelBtn
            style={{ marginTop: "12px" }}
            isDisabled={true}
            disabled={false}
            onClick={() => cancelAppeal(data?._id)}
          >
            Рад этиш
          </CancelBtn>

          <SaveBtn
            style={{ marginTop: "12px" }}
            isDisabled={Object.keys(requirements).length > 2 && true}
            // disabled={!Object.keys(requirements).length > 0 && true}
            onClick={() => submitForm(data?._id, requirements)}
          >
            Юбориш
          </SaveBtn>
        </div>
      </Actions>
    </Container>
  );
};
