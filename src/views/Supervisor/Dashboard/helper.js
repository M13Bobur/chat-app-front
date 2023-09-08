import {
  FiDatabase,
  FiXCircle,
  FiShare,
  FiCheckSquare,
  FiCheck,
  FiWatch,
} from "react-icons/fi";

export const cardData = [
  {
    title: "Жами",
    icon: FiDatabase,
    type: "total",
    status: 8,
  },
  {
    title: "Янги",
    icon: FiCheck,
    type: "new",
    status: 0,
    path: "/new-appeals",
  },
  {
    title: "Ижрода",
    icon: FiShare,
    type: "inProgress",
    status: 1,
    path: "/sent-appeals",
  },
  {
    title: "Якунланган",
    icon: FiCheckSquare,
    type: "completed",
    status: 3,
    path: "/completed-appeals",
  },
  {
    title: "Рад этилган",
    icon: FiXCircle,
    type: "rejected",
    status: 7,
    path: "/canceled-appeals",
  },
  {
    title: "Муддати тугаган",
    icon: FiWatch,
    type: "expired",
    status: 9,
    path: "/higherOrganization-appeals",
  },
];

export const getMonthName = (num) => {
  switch (num) {
    case 1:
      return "Январь";
    case 2:
      return "Февраль";
    case 3:
      return "Март";
    case 4:
      return "Апрель";
    case 5:
      return "Май";
    case 6:
      return "Июнь";
    case 7:
      return "Июль";
    case 8:
      return "Август";
    case 9:
      return "Сентябрь";
    case 10:
      return "Октябрь";
    case 11:
      return "Ноябрь";
    case 12:
      return "Декабрь";
  }
};

export const getHour = (num) => {
  switch (num) {
    case 0:
      return "00:00";
    case 1:
      return "01:00";
    case 2:
      return "02:00";
    case 3:
      return "03:00";
    case 4:
      return "04:00";
    case 5:
      return "05:00";
    case 6:
      return "06:00";
    case 7:
      return "07:00";
    case 8:
      return "08:00";
    case 9:
      return "09:00";
    case 10:
      return "10:00";
    case 11:
      return "11:00";
    case 12:
      return "12:00";
    case 13:
      return "13:00";
    case 14:
      return "14:00";
    case 15:
      return "15:00";
    case 16:
      return "16:00";
    case 17:
      return "17:00";
    case 18:
      return "18:00";
    case 19:
      return "19:00";
    case 20:
      return "20:00";
    case 21:
      return "21:00";
    case 22:
      return "22:00";
    case 23:
      return "23:00";
  }
};
