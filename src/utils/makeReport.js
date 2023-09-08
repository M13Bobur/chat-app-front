export const makeReport = (
  reportData = [],
  regions = [],
  groups = [],
  categories = [],
  users = []
) => {
  // const groupsObject = groups.reduce(
  //   (a, v) => ({ ...a, [v._id]: v.title }),
  //   {}
  // );
  const parentCategories = categories
    .filter((item) => !item.parent)
    .reduce((a, v) => ({ ...a, [v._id]: v.title }), {});
  // const usersMap = users.reduce(
  //   (a, v) => ({
  //     ...a,
  //     [v._id]: `${v.lastName} ${v.middleName} ${v.firstName}`,
  //   }),
  //   {}
  // );
  // const regionsMap = regions.reduce(
  //   (a, v) => ({
  //     ...a,
  //     [v._id]: v.title,
  //   }),
  //   {}
  // );
  const report = reportData.map((item, idx) => {
    let parentCats = categories.filter((item) => !item.parent);
    let categoriesAll = {};
    item?.categorys.forEach((itmn) => {
      parentCats = parentCats.filter((e) => e._id !== itmn.category);
      categoriesAll[itmn.category] = {
        value: itmn?.categoryRate ? Math.round(itmn?.categoryRate) : 0,
        id: itmn.category,
        userId: item._id && item._id.user?._id,
        categoryValue: itmn?.categoryRate ? Math.round(itmn?.categoryRate) : 0,
        categoryTitle: parentCategories[itmn.category],
        groupId: Math.floor(Math.random() * 100000),
      };
    });
    parentCats.forEach((itmn) => {
      categoriesAll[itmn._id] = {
        value: null,
        id: itmn._id,
        categoryValue: null,
        categoryTitle: parentCategories[itmn._id],
        groupId: Math.floor(Math.random() * 100000),
      };
    });
    return {
      id: idx + 1,
      ...categoriesAll,
      user_name: {
        name: item._id
          ? `${item._id?.user.firstName} ${item._id?.user.lastName}`
          : '',
        value: 85,
      },
      total: {
        value: 85,
        userRank: 85,
      },
    };
  });
  return report;
};

export const makeReportAllgroups = (
  reportsData = [],
  categories = [],
  groups = []
) => {
  const report = reportsData.map((item) => {
    const category = categories.find((itm) => itm._id === item.category);
    const group = item?.groups.map((value) => {
      const str = groups.find((e) => e._id === value.group);
      return {
        id: Date.now(),
        title: str ? str.title : '',
        percent: checkWorkAndPlan(value.work, value.plan),
      };
    });
    return {
      id: Date.now(),
      mainTitle: category ? category.title : '',
      resultsTitle: 'Гуруҳлар умумий кўрсаткичлари',

      tasks: {
        marked: item.plans,
        completed: item.works,
      },
      percent: checkWorkAndPlan(item.works, item.plans),
      results: group,
    };
  });
  return report;
};

export const makeReportGrops = (card = [], categories = []) => {
  const cardReport = card.map((item) => {
    const category = categories.find((itm) => itm._id === item.category);
    const group = item?.groups
      .map((value) => {
        return {
          id: value?.group?._id,
          title: value?.group?.title ?? '',
          percent: checkWorkAndPlan(value.work, value.plan),
        };
      })
      ?.sort((a, b) => b?.percent - a?.percent)
      ?.slice(-4);

    return {
      id: Date.now(),
      mainTitle: category ? category.title : '',
      resultsTitle: 'Гуруҳлар умумий кўрсаткичлари',
      tasks: {
        marked: item.plans,
        completed: item.works,
      },
      percent: checkWorkAndPlan(item.works, item.plans),
      results: group,
    };
  });
  return cardReport;
};

export const makeReportOnegroup = (reportsData = []) => {
  const report = reportsData.map((item) => {
    return {
      id: Date.now(),
      mainTitle: item?.category.title ? item.category.title : '',
      resultsTitle: 'Гуруҳлар умумий кўрсаткичлари',
      tasks: {
        marked: item.plans,
        completed: item.works,
      },

      percent: checkWorkAndPlan(item.works, item.plans),
      results: '',
    };
  });
  return report;
};
export const checkWorkAndPlan = (work, plan) => {
  if (work === 0 && plan === 0) {
    return 0;
  }
  if (plan === 0 && work > 0) {
    return 100;
  }
  return Math.round((Number(work) * 100) / Number(plan));
};

export const makeReportBygroup = (reportsData = [], regions = [], category) => {
  const report = reportsData.find((item) => item.category == category);
  const data = report?.regions.map((item) => {
    const reg = regions?.find((e) => e._id === item.region);
    return {
      regionName: reg.title,
      percent: checkWorkAndPlan(item.work, item.plan),
    };
  });
  return data;
};
