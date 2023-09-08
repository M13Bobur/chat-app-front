import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Space } from "./style";
import Item from "../Item";
import { secretaryTabs } from "../helper";

export const SidebarBody = () => {
  const { role } = useSelector((state) => state.authReducer);
  const { groups } = useSelector((state) => state.appReducer);
  const { selectedDate } = useSelector((state) => state.selectedDateReducer);

  // useEffect(() => {
  //   const totalsData = {
  //     date: selectedDate[selectedDate.length - 1],
  //     region: regionId,
  //     sector: sectorId,
  //   };
  //   works
  //     .getTotal(totalsData)
  //     .then(({ newWorks }) => {
  //       console.count("total worksc request");
  //       if (Object.keys(newWorks).length > 0) {
  //         dispatch(setTotal(newWorks?.count));
  //       }
  //     })
  //     .catch((error) => {
  //       dispatch(setTotal(0));
  //       console.error(error);
  //     });
  // }, []);

  // let governorTab;
  // if (governorTabs[0]?.children.length !== groups.length + 1) {
  //   governorTab = governorTabs[0].children.concat(
  //     groups.map((item) => ({
  //       title: item.title,
  //       id: item._id,
  //       path: `/${item.title}`,
  //     }))
  //   );
  //   governorTabs[0].children = governorTab;
  // }
  const sideItems = {
    // governor: governorTabs,
    // moderator: secretaryTabs,
    moderator: secretaryTabs,
  };
  return (
    <Container>
      <Space />
      {sideItems[role].map(
        ({ title, icon, path, children, count, status }, index) => (
          <Item
            key={`${title + 1}`}
            title={title}
            icon={icon}
            path={path}
            elements={children}
            count={count}
            status={status}
          />
        )
      )}
    </Container>
  );
};

export default React.memo(SidebarBody);
