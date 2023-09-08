export const objectConstructor = () => {
  const constructorMethod = (data, regions, groups) => {
    const foo = data?.map((object, index) => {
      return {
        ...object,
        groupName: groups?.find((group) => group._id === object?.group)?.title,

        regionName: regions?.find((region) => region._id === object?.region)
          ?.title,
        key: index + 1,
      };
    });
    return foo;
  };

  return {
    constructorMethod,
  };
};
