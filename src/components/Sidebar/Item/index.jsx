import React, { useState } from "react";
import { Badge, Radio } from "antd";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  Title,
  Wrapper,
  IconContainer,
  SubElements,
  SubElement,
  CustomBadge,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setActiveItem } from "../../../redux/modules/application/actions";
import { colors } from "../../../constants/colors";

const Item = ({ title, path, icon: Icon, elements = [], count, status }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useSelector((state) => state.worksReducer);
  const { activeItem } = useSelector((state) => state.appReducer);
  const [active, setActive] = useState(activeItem);
  const [hovered, setHovered] = useState(false);

  const isActive = (checkPath) => location.pathname === checkPath;

  const handleNavigate = (path) => {
    if (location.pathname === "/") {
      navigate(path, { replace: true });
    } else {
      navigate(path, { replace: true });
    }
  };

  const handleItem = (id) => {
    dispatch(setActiveItem(id));
  };

  const checkSubItems = () => {
    if (elements.length > 0 && location.pathname === "/") {
      return <FiChevronDown size={18} />;
    }
    if (elements.length > 0) return <FiChevronRight size={18} />;
  };

  return (
    <Wrapper>
      <Container
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        active={isActive(path)}
        hovered={hovered}
        onClick={() => handleNavigate(path)}
      >
        {/* <Badge
          size="default"
          count={data[count]}
          className="sidebar__list__badge"
        /> */}

        <Container.Left>
          <IconContainer active={isActive(path)} hovered={hovered}>
            <Icon size={18} />
          </IconContainer>
          <Title hovered={hovered} active={isActive(path)}>
            {title}{" "}
          </Title>
        </Container.Left>
        {checkSubItems()}
        {count && (
          <CustomBadge color={colors[status]}>{data[count]}</CustomBadge>
        )}
      </Container>

      <SubElements expand={isActive(path)}>
        {elements.map(
          (child, index) =>
            !child.hidden && (
              <SubElement
                key={`${index + 1}`}
                active={child.id === active}
                onClick={() => {
                  handleItem(child?.id);
                  setActive(child.id);
                }}
              >
                <Radio checked={child.id === active} />
                <Title active={child.id === active}>{child.title}</Title>
              </SubElement>
            )
        )}
      </SubElements>
    </Wrapper>
  );
};

export default Item;
