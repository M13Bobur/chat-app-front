export const workConstructor = () => {
  const constructorMethod = (data, commons) => {
    const foo = data?.map((work, ind) => {
      return {
        ...work,
        key: ind + 1,
        sectorName: commons.groups?.find((group) => group._id === work?.sector)
          ?.title,
        userName:
          work.user !== undefined && work.user !== null
            ? `${work.user?.firstName ?? ""} ${work.user?.lastName ?? ""} ${
                work.user?.middleName ?? ""
              }`
            : "",
        categoryName: commons.categories?.find(
          (category) => category._id === work?.category
        )?.title,
        regionName: commons.regions?.find(
          (region) => region._id === work?.region
        )?.title,
        subCategoryName: commons.categories?.find(
          (subCategory) => subCategory._id === work?.subCategory
        )?.title,
        subCategoryObj: commons.categories?.find(
          (subCategory) => subCategory._id === work?.subCategory
        ),
      };
    });
    return foo;
  };

  return {
    constructorMethod,
  };
};
