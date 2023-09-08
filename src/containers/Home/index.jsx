import React, { useLayoutEffect } from "react";
import Content from "../../components/Content";
import works from "../../services/works";
import { useDispatch, useSelector } from "react-redux";
import { fetchWData } from "../../redux/modules/works/actions";
import { fetchData } from "../../redux/modules/application/actions";
import Spinner from "../../components/Spinner/FullScreen";
import Sidebar from "../../components/Sidebar";
import Container from "../../components/Container";

export default () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.authReducer);
  const { loading } = useSelector((state) => state.appReducer);
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);
  const regionId = localStorage.getItem("regionId");
  const groupId = localStorage.getItem("groupId");
  const roles = {
    moderator: true,
    admin: false,
  };
  useLayoutEffect(() => {
    if (roles[role] || role === "moderator") {
      dispatch(fetchData());
      dispatch(fetchWData());

      setInterval(() => {
        dispatch(fetchWData());
      }, 30000);
    }
    // if (role === "groupadmin") {
    //   const totalsData = {
    //     date: selectedDate[selectedDate.length - 1],
    //     region: regionId,
    //     group: groupId,
    //   };

    //   // works
    //   //   .getTotal(totalsData)
    //   //   .then(({ newWorks }) => {
    //   //     dispatch(setTotal(newWorks?.count));
    //   //   })
    //   //   .catch((err) => {
    //   //     console.error(err);
    //   //     dispatch(setTotal(0));
    //   //   });
    // }
  }, []);
  if (loading && role !== "admin") return <Spinner />;
  return (
    <>
      {roles[role] ? (
        <Container>
          <Sidebar />
          <Content />
        </Container>
      ) : (
        <Content />
      )}
    </>
  );
};
