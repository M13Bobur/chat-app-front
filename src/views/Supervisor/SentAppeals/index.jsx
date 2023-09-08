import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Empty, Input, Row, Table } from "antd";
import {
  Actions,
  Container,
  FilterContainer,
  NoData,
  SearchInput,
  Wrapper,
} from "./style";
import { workConstructor } from "utils/workConstructor";
import Spinner from "components/Spinner";
import works from "services/works";
import { useHideModal, useShowAlert, useShowModal } from "hooks";
import moment from "moment";

import AddAnswerForm from "components/AddAnswerForm";
import RangePicker from "components/RangePicker";
import { Title } from "components/FormElements/Select/style";
import { FiCornerUpLeft, FiEye, FiSearch } from "react-icons/fi";
import Select from "components/FormElements/Select";
import { ReloadOutlined } from "@ant-design/icons";
import { ActionButtons } from "../NewAppeals/style";
import { BsCheck2Circle } from "react-icons/bs";
import CardviewModal from "../CardviewModal";
import { getStatus } from "utils/statusMaker";
import { getColor } from "utils/getColor";
import { clearSelectedDate } from "redux/modules/dates/actions";

export default () => {
  const { error, success } = useShowAlert();
  const { categories, regions, groups, users } = useSelector(
    (state) => state.appReducer
  );
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);
  const { constructorMethod } = workConstructor();
  const [loading, setLoading] = useState(true);
  const [worksData, setWorksData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [search, setSearch] = useState("");
  const [postData, setPostData] = useState({
    startDate: selectedDate[0],
    endDate: selectedDate[1],
  });
  const [paginationProps, setPaginationProps] = useState({});
  const [page, setPage] = useState(1);
  const common = { categories, regions, groups, users };

  const fetchWorks = (reload) => {
    if (reload) {
      setPostData({});
      dispatch(clearSelectedDate());
      setPage((prev) => 1);
      setSearch("");
    }
    setLoading(true);
    const putData = {
      ...postData,
      status: [1, 4, 2, 5],
      startDate: selectedDate[0],
      endDate: selectedDate[1],
      // search: "#workId || title",
      // region: "regionId",
      // sector: "sectorId",
      // category: "categoryId",
      // subCategory: "subCategoryId",
      // object: "objectId",
      page: page,
      limit: 10,
    };
    if (postData?.sector !== undefined) {
      putData["sector"] = postData?.sector;
    }
    if (search?.length) {
      putData["search"] = search;
    }
    if (postData?.category !== undefined) {
      putData["category"] = postData?.category;
    }
    works
      .getSentAppeals(putData)
      .then(({ docs, totalDocs, page: pageNum }) => {
        setPaginationProps((prev) => ({
          ...prev,
          total: totalDocs,
          pageNum,
        }));
        const workerData = constructorMethod(docs, common);
        setWorksData(workerData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    if (categories.length) {
      const parentCategories = categories.filter(
        (item) => item.parent === null
      );
      setCategoryList(parentCategories);
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    // if (selectedDate.every((item) => item !== "Invalid date")) {
    fetchWorks();
    // }
  }, [selectedDate, postData, page]);

  const sendData = (id, text, image) => {
    const formDataBody = new FormData();
    formDataBody.append("title", text);
    for (let i = 0; i < image.length; i++) {
      formDataBody.append("files", image[i]);
    }
    if (id && text && image) {
      setLoading(!loading);
      works
        .sendAnswer(id, formDataBody)
        .then(() => {
          hideModal();
          fetchWorks();
          success("Мувофаққиятли юборилди!", 2, "bottom");
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      error("Xatolik yuz berdi", 2, "topRight");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addAnswer = (id) => {
    showBlured({
      title: "Мурожаатни якунлаш!",
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <AddAnswerForm id={id} submitForm={sendData} close={hideModal} />
      ),
    });
  };

  const showCard = (id) => {
    setLoading(true);
    if (id) {
      works
        .getOne(id)
        .then((resp) => {
          const workerData = constructorMethod(Array(resp), common);
          showBlured({
            title: "Келиб тушган мурожаат!",
            maxWidth: "70vw",
            height: "600px",
            withHeader: false,
            body: () => (
              <CardviewModal
                data={workerData[0]}
                close={hideModal}
                loading={loading}
              />
            ),
          });
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  };

  const columns = [
    {
      title: "№",
      dataIndex: "н",
      key: "н",
      align: "center",
      render: (id, item, index) => {
        let pageNumber =
          paginationProps.pageNum > 1
            ? paginationProps.pageNum * 10 + index - 10
            : ++index;
        return pageNumber;
      },
    },
    {
      title: "Мурожаат рақами",
      dataIndex: "workId",
      key: "workId",
      align: "center",
      render(text) {
        return {
          props: {
            style: { padding: "15px" },
          },
          children: <div>#{text}</div>,
        };
      },
      filterDropdown: (props) => (
        <div
          style={{
            padding: "10px",
            // width: "300px",
            display: "flex",
            gap: "5px",
          }}
        >
          <Input
            placeholder="Матн бўйича қидирув..."
            allowClear
            prefix={<FiSearch color="#CCCCCC" size={12} />}
            className="search"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(0, 0, 0, 0.07)",
              borderRadius: "10px",
              height: "42px",
              fontSize: "14px",
              minWidth: "160px",
            }}
            onChange={handleSearch}
            value={search}
          />
          <Button
            type="primary"
            onClick={() => {
              setPostData({ ...postData, ["search"]: search });
            }}
            style={{
              height: "40px",
              background: "#3380FF",
              borderRadius: "10px",
              // padding: "0 40px",
            }}
          >
            <FiSearch />
          </Button>
        </div>
      ),
      filterIcon: () => <FiSearch />,
      // filterDropDown: (value, record) =>
      //   console.log("record==", record, "value==", value),
    },
    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "categoryName",
      filters: categoryList,
      filterDropdown: () => (
        <div
          style={{
            padding: "10px",
          }}
        >
          <Select
            handleChange={(value) => {
              setPostData({ ...postData, ["category"]: value });
            }}
            options={categoryList}
            name="category"
            title="Асосий категориялар"
            defaultVal={postData?.category}
          />
        </div>
      ),
      // filters: categoryList,
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: "Субкатегория",
      dataIndex: "subCategory",
      key: "subCategory",
      render: (subCategory) => (
        <p style={{ margin: "0px" }}>{subCategory?.title}</p>
      ),
    },
    {
      title: "Шаҳар/туман",
      dataIndex: "region",
      render: (region) => <p style={{ margin: "0px" }}>{region?.title}</p>,
      key: "region",
      align: "center",
    },
    {
      title: "Сектор",
      dataIndex: "sectorName",
      key: "sectorName",
      filters: groups,
      filterDropdown: () => (
        <div
          style={{
            padding: "10px",
          }}
        >
          <Select
            handleChange={(value) => {
              setPostData({ ...postData, ["sector"]: value });
            }}
            options={groups}
            name="sector"
            title="Сектор"
            defaultVal={postData?.category}
          />
        </div>
      ),
    },
    {
      title: "Мурожаат манзили",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Мурожаатчи тел. рақами",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Мурожаат вақти",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (createdAt) => (
        <p style={{ margin: "0px" }}>
          {moment(createdAt).format("DD.MM.YYYY HH:mm")}
        </p>
      ),
    },
    {
      title: "Ижро муддати вақти",
      dataIndex: "startDate",
      key: "startDate",
      align: "center",
      render: (startDate, item) => (
        <p style={{ margin: "0px" }}>
          {moment(startDate)
            .add(item?.subCategory?.deadline, "hours")
            .format("DD.MM.YYYY HH:mm")}
        </p>
      ),
    },
    {
      title: "Мурожаат ҳолати",
      dataIndex: "status",
      key: "status",
      align: "center",
      render: (status) => (
        <p style={{ margin: "0px", color: getColor(status) }}>
          {getStatus(status)}
        </p>
      ),
    },
    {
      title: "Бошқариш",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (props, item) => (
        <ActionButtons key={props}>
          {!item?.resp.length > 0 || item.status === 4 ? (
            <BsCheck2Circle
              size={22}
              className="add__answer"
              onClick={() => addAnswer(props)}
            />
          ) : (
            ""
          )}
          <FiEye size={20} className="edit" onClick={() => showCard(props)} />
        </ActionButtons>
      ),
    },
  ];

  const handleChangeRangePicker = (_, value) => {
    postData.startDate = value[0];
    postData.endDate = value[1];
  };
  const handleReload = () => {
    fetchWorks("reload");
  };

  if (loading) return <Spinner maxHeight="100%" />;
  return (
    <Wrapper>
      <FilterContainer>
        <Row gutter={10} align="items-center" justify="space-between">
          <Col>
            <RangePicker
              title="Даврни танлаш"
              allowClear={false}
              onChange={handleChangeRangePicker}
              defaultValue={[
                moment(postData?.startDate),
                moment(postData?.endDate),
              ]}
            />
          </Col>
          <Col
            className="reload__button__area"
            align="content-center"
            justify="center"
            space="x-10"
            span={4}
          >
            <Title>Саҳифани янгилаш</Title>
            <ReloadOutlined
              className="reload__button"
              onClick={() => handleReload()}
            />
          </Col>
        </Row>
      </FilterContainer>
      {worksData?.length > 0 ? (
        <Container>
          <div className="work">
            <Table
              bordered
              align="content-center"
              dataSource={worksData}
              columns={columns}
              className="column__style"
              style={{
                textAlign: "center",
              }}
              pagination={{
                ...paginationProps,
                current: page,
                onChange: (current) => setPage(current),
              }}
            />
          </div>
          <Actions></Actions>
        </Container>
      ) : (
        <Container>
          <NoData>
            <Empty
              description={<h1>Белгиланган кун учун мурожаатлар топилмади!</h1>}
            />
          </NoData>
        </Container>
      )}
    </Wrapper>
  );
};
