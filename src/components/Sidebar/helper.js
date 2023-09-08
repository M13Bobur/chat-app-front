import {
  FiLayers,
  FiTrendingUp,
  FiClock,
  FiSearch,
  FiGlobe,
  FiEdit,
  FiShare,
  FiAlertTriangle,
  FiCheckSquare,
  FiBarChart2,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export const governorTabs = [
  {
    title: "Соҳалар",
    path: "/",
    icon: FiLayers,
    children: [{ title: "Барча гуруҳлар", path: "/", id: "all" }],
  },
  { title: "Кунлик рейтинг", path: "/daily-rating", icon: FiTrendingUp },
  { title: "Вақт кесимида", path: "/time-interval", icon: FiClock },
  { title: "Ҳисобот", path: "/reports", icon: FiEdit },
  { title: "Қидириш", path: "/search", icon: FiSearch },
  {
    title: "Харитада кўриш",
    path: "/map",
    icon: FiGlobe,
  },
  // { title: 'Натижавий хисобот', path: '/statistics' },  //keyingi versionda qo'shiladi!
];

export const secretaryTabs = [
  {
    title: "Бош саҳифа",
    path: "/",
    icon: FiBarChart2,
  },
  {
    title: "Янги мурожаатлар",
    path: "/new-appeals",
    icon: FiLayers,
    count: "new",
    status: 0,
  },
  {
    title: "Ижрога юборилганлар",
    path: "/sent-appeals",
    icon: FiShare,
    count: "inProgress",
    status: 1,
  },
  {
    title: "Якунланган мурожаатлар",
    path: "/completed-appeals",
    icon: FiCheckSquare,
    count: "completed",
    status: 3,
  },
  {
    title: "Рад этилган мурожаатлар",
    path: "/canceled-appeals",
    icon: FiAlertTriangle,
    count: "rejected",
    status: 7,
  },
  {
    title: "Юқори ташкилотга чиқарилган мурожаатлар",
    path: "/higherOrganization-appeals",
    icon: HiOutlineOfficeBuilding,
    count: "expired",
    status: 9,
  },
  // { title: "Кунлик рейтинг", path: "/daily-rating", icon: FiTrendingUp },
  // { title: "Вақт кесимида", path: "/time-interval", icon: FiClock },
  // { title: "Диагамма", path: "/diagramma", icon: FiBarChart2 },
  // { title: "Янги ишлар", path: "/new-works", icon: FiCheckSquare },
];
