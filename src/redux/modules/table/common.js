export const productsHeader = [
  {
    id: 1,
    Header: '№',
    accessor: 'id',
    show: true,
    width: 30,
  },
  {
    id: 2,
    Header: 'Фамилия, Исм, Шариф',
    accessor: 'user_name',
    show: true,
    width: 250,
    type: 'name',
  },
  {
    id: 3,
    Header: 'Жами',
    accessor: 'total',
    type: 'info',
    show: true,
    width: 170,
    pl: 40,
    pr: 20,
  },
];

export const reportHeader = [
  {
    Header: 'Т/р',
    columns: [
      {
        Header: 'header_1',
        accessor: 'id',
        displayNone: true,
      },
    ],
    rowSpan: '2',
    show: true,
  },
  {
    Header: 'Шахар, туманлар номи',
    columns: [
      {
        accessor: 'name',
        Header: 'header_2',
        displayNone: true,
      },
    ],
    rowSpan: '2',
    show: true,
  },
  // {
  //   Header: "Маҳаллабай, дафтарлар",
  //   show: true,
  //   height: 150,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "firstName",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "lastName",
  //     },
  //   ],
  // },
  // {
  //   Header: "Инвестиция,Экспорт,Бюджет",
  //   height: 150,
  //   show: true,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "age",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "visits",
  //     },
  //   ],
  // },
  // {
  //   Header: "Мурожаатлар,таълим",
  //   height: 150,
  //   show: true,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "age1",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "visits1",
  //     },
  //   ],
  // },
  // {
  //   Header: "Хизмат кўрсатиш",
  //   height: 150,
  //   show: true,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "age2",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "visits2",
  //     },
  //   ],
  // },
  // {
  //   Header: "“Обод қишлоқ”, “Обод махалла”",
  //   show: true,
  //   height: 150,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "age3",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "visits3",
  //     },
  //   ],
  // },
  // {
  //   Header: "Коммунал соҳа",
  //   height: 150,
  //   show: true,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "age4",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "visits4",
  //     },
  //   ],
  // },
  // {
  //   Header: "Бошқа масалалар",
  //   height: 150,
  //   show: true,
  //   columns: [
  //     {
  //       Header: "Режа",
  //       accessor: "age5",
  //     },
  //     {
  //       Header: "Амалда",
  //       accessor: "visits5",
  //     },
  //   ],
  // },
];

export const statisticsHeader = [
  {
    Header: 'Т/р',
    show: true,
    height: 150,
    width: 50,
    accessor: 'id',
  },
  {
    Header: 'Худуд',
    show: true,
    height: 150,
    accessor: 'region',
  },
  {
    Header: 'Амалга оширилиши белгиланган ишлар сони',
    show: true,
    height: 150,

    accessor: 'plan_works',
  },
  {
    Header: 'Жами амалга оширилган ишлар сони	',
    show: true,
    height: 150,

    accessor: 'completed_works',
  },
  {
    Header: '%',
    show: true,
    height: 150,
    width: 100,
    accessor: 'percent',
  },
  {
    Header: 'Қуйилган бахо',
    show: true,
    height: 150,
    accessor: 'rating',
  },
];
