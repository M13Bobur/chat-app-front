import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Button, Col, Empty, Input, Row, Table } from "antd";
import { ActionButtons, Container, NoData, Wrapper } from "./style";
import { workConstructor } from "utils/workConstructor";
import Spinner from "components/Spinner";
import works from "services/works";
import objectService from "services/objects";
import { useHideModal, useShowAlert, useShowModal } from "hooks";
import { FilterContainer } from "../SentAppeals/style";
import RangePicker from "components/RangePicker";
import Cardview from "./Cardview";
import { Title } from "components/FormElements/Select/style";
import { ReloadOutlined } from "@ant-design/icons";
import Select from "components/FormElements/Select";
import { FiSearch, FiX } from "react-icons/fi";
import OffcastForm from "./OffcastForm";
import { BsCheck2Circle } from "react-icons/bs";
import { getStatus } from "utils/statusMaker";
import { getColor } from "utils/getColor";
import { clearSelectedDate } from "redux/modules/dates/actions";

export default () => {
  const { error, success } = useShowAlert();
  const { categories, regions, groups, users, objects } = useSelector(
    (state) => state.appReducer
  );
  const regionId = localStorage.getItem("regionId");
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const dispatch = useDispatch();
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);
  const { constructorMethod } = workConstructor();
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [search, setSearch] = useState("");
  const [paginationProps, setPaginationProps] = useState({});
  const [page, setPage] = useState(1);
  const [appealsTotal, setAppealsTotal] = useState(0);
  const [worksData, setWorksData] = useState([]);
  const [objectList, setObjectList] = useState([]);
  const [postData, setPostData] = useState({});
  const common = { categories, regions, groups, users };

  const fetchWorks = (reload) => {
    if (reload) {
      setPostData({});
      dispatch(clearSelectedDate());
      setPage((prev) => 1);
      setSearch("");
    }
    setLoading(true);
    const reqBody = {
      ...postData,
      startDate: selectedDate[0],
      endDate: selectedDate[1],
      page: page,
      limit: 10,
      status: [0],
    };

    works
      .getAll(reqBody)
      .then(({ docs, totalDocs, page: pageNum, count }) => {
        setPaginationProps((prev) => ({
          ...prev,
          total: totalDocs,
          pageNum,
        }));
        setAppealsTotal(count);
        const workerData = constructorMethod(docs, common);
        setWorksData(workerData);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    if (selectedDate.every((item) => item !== "Invalid date")) {
      fetchWorks();
    }
  }, [selectedDate, page, postData]);

  useEffect(() => {
    if (objects?.length) {
      const objId = objects[0]?._id;
      const data = {
        parent: objId,
        region: regionId,
        limit: 1000,
        page: 1,
      };
      objectService
        .getAllSubsList(data)
        .then(({ docs }) => setObjectList(docs))
        .catch((err) => console.error(err));
    }
    if (categories.length) {
      const parentCategories = categories.filter(
        (item) => item.parent === null
      );
      // .map((item) => ({
      //   text: item?.title,
      //   value: item?._id,
      // }));
      setCategoryList(parentCategories);
    }
  }, []);

  const handleUpdateWork = (id, object) => {
    if (Object.keys(object).length) {
      setLoading(!loading);
      works
        .update(id, object)
        .then(() => {
          fetchWorks();
          success("Мувофаққиятли юборилди!", 2, "bottom");
          hideModal();
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      error("Хатолик объект танланмаган!", 2, "topRight");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const addAnswer = (id) => {
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
              <Cardview
                data={workerData[0]}
                submitForm={handleUpdateWork}
                close={hideModal}
                loading={loading}
                objectList={objectList}
                cancelAppeal={cancelAppeal}
                categories={categories}
              />
            ),
          });
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  };
  const handleReturnAppeal = (id, text) => {
    if (id && text) {
      setLoading(!loading);
      const reqBody = {
        workId: id,
        title: text,
      };
      works
        .offcast(reqBody)
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
  const cancelAppeal = (id) => {
    showBlured({
      title: "Мурожаатни рад этиш!",
      maxWidth: "600px",
      height: "400px",
      withHeader: false,
      body: () => (
        <OffcastForm
          id={id}
          submitForm={handleReturnAppeal}
          close={hideModal}
          loading={loading}
          objectList={objectList}
        />
      ),
    });
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
      filterDropdown: () => (
        <div
          style={{
            padding: "10px",
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
            }}
          >
            <FiSearch />
          </Button>
        </div>
      ),
      filterIcon: () => <FiSearch />,
      render: (text) => <div>#{text}</div>,
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
      title: "Мурожаат манзили",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Мурожаатчи тел. рақами",
      dataIndex: "phone",
      key: "phone",
      width: "200px",
      align: "center",
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
      render: (props) => {
        return (
          <ActionButtons key={props}>
            <BsCheck2Circle
              size={22}
              className="add__answer"
              onClick={() => addAnswer(props)}
            />
            <FiX
              size={20}
              className="cancel"
              onClick={() => cancelAppeal(props)}
            />
          </ActionButtons>
        );
      },
    },
  ];

  const handleReload = () => {
    fetchWorks("reload");
  };

  if (loading) return <Spinner maxHeight="100%" />;
  return (
    <Wrapper>
      <FilterContainer>
        <Row gutter={[8, 12]} align="items-center" justify="space-between">
          <Col span={8}>
            <RangePicker title="Даврни танлаш" allowClear={false} />
          </Col>
          <Col span={10}>
            <div className="appeals__total">
              Янги мурожаатлар умумий сони : {appealsTotal}
            </div>
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
              // sticky={true}
              size="middle"
              bordered
              align="content-center"
              dataSource={worksData}
              columns={columns}
              pagination={{
                ...paginationProps,
                current: page,
                onChange: (current) => setPage(current),
              }}
            />
          </div>
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
