import {
  RiHome8Line,
  RiLineChartLine,
  RiBookmark2Line,
  RiHomeGearLine,
} from "react-icons/ri";
import { TbHeartHandshake, TbBuildingCommunity } from "react-icons/tb";
import { GiFallingStar } from "react-icons/gi";
export const groups = [
  {
    id: Date.now(),
    title: "1-Гуруҳ:",
    percent: "50",
  },
  {
    id: Date.now(),
    title: "2-Гуруҳ:",
    percent: "90",
  },
  {
    id: Date.now(),
    title: "3-Гуруҳ:",
    percent: "70",
  },
  {
    id: Date.now(),
    title: "4-Гуруҳ:",
    percent: "20",
  },
];
export const CategoryList = [
  {
    title: "Маҳаллабай, дафтарлар",
    icon: RiHome8Line,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 96,
  },
  {
    title: "Инвестиция, Экспорт, Бюджет",
    icon: RiLineChartLine,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 70,
  },
  {
    title: "Мурожаатлар, таълим",
    icon: RiBookmark2Line.apply,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 66,
  },
  {
    title: "Хизмат кўрсатиш",
    icon: TbHeartHandshake,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 50,
  },
  {
    title: "'Обод қишлоқ', 'Обод махалла'",
    icon: TbBuildingCommunity,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 70,
  },
  {
    title: "Коммунал соҳа",
    icon: GiFallingStar,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 100,
  },
  {
    title: "Тиббиёт, Банк, Оила",
    icon: RiHomeGearLine,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 30,
  },
  {
    title: "Бошқа масалалар",
    icon: RiHome8Line,
    tasks: {
      marked: 70,
      completed: 66,
    },
    percent: 10,
  },
];
export const userData = [
  {
    id: Date.now(),
    regionName: "Ёзёвон тумани",
    personName: " М.Юлчиев",
    percent: "45",
  },
  {
    id: Date.now(),
    regionName: "Олтиариқ тумани",
    personName: "А.Рахимов",
    percent: "35",
  },
  {
    id: Date.now(),
    regionName: "Қўқон шаҳар",
    personName: "Ю.Мамаюсупов",
    percent: "20",
  },
];
