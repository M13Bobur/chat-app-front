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
import { useHideModal, useShowModal } from "hooks";

import RangePicker from "components/RangePicker";
import { Title } from "components/FormElements/Select/style";
import { FiEye, FiSearch } from "react-icons/fi";
import Select from "components/FormElements/Select";
import { ReloadOutlined } from "@ant-design/icons";
import { ActionButtons } from "../NewAppeals/style";
import CardviewModal from "../CardviewModal";
import { getStatus } from "utils/statusMaker";
import { getColor } from "utils/getColor";
import moment from "moment";
import { clearSelectedDate } from "redux/modules/dates/actions";

export default () => {
  const { categories, regions, groups, users } = useSelector(
    (state) => state.appReducer
  );
  const dispatch = useDispatch();
  const { showBlured } = useShowModal();
  const { hideModal } = useHideModal();
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);
  const { constructorMethod } = workConstructor();
  const [loading, setLoading] = useState(true);
  const [worksData, setWorksData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [search, setSearch] = useState("");
  const [postData, setPostData] = useState({});
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
      startDate: selectedDate[0],
      endDate: selectedDate[1],
      page: page,
      limit: 10,
    };
    if (search?.length) {
      putData["search"] = search;
    }
    if (postData?.category !== undefined) {
      putData["category"] = postData?.category;
    }
    works
      .getAllOffcast(putData)
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
  }, [selectedDate, page, postData]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const showCard = (id) => {
    setLoading(true);
    if (id) {
      works
        .getOneOffcast(id)
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

      title: 'Мурожаат рақами',
      dataIndex: 'workId',
      key: 'workId',
      align: 'center',
      render: (text) => <div>#{text}</div>,
      filterDropdown: () => (

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
    },
    {
      title: "Категория",
      dataIndex: "categoryName",
      key: "categoryName",
      filters: categoryList,

      filterDropdown: (props) => (
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
            value={postData?.category}
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
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (createdAt, item) => (
        <p style={{ margin: "0px" }}>
          {moment(createdAt)
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
      title: "Actions",
      dataIndex: "_id",
      key: "_id",
      align: "center",
      render: (props) => (
        <ActionButtons key={props}>
          <FiEye size={20} className="edit" onClick={() => showCard(props)} />
        </ActionButtons>
      ),
    },
  ];

  const handleReload = () => {
    fetchWorks("reload");
  };

  if (loading) return <Spinner maxHeight="100%" />;
  return (
    <Wrapper>
      <FilterContainer>
        <Row gutter={10} align="items-center" justify="space-between">
          <Col>
            <RangePicker title="Даврни танлаш" allowClear={false} />
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
