import { useState, useEffect } from "react";
import categories from "../services/categories";
import objects from "../services/objects";
import provinces from "../services/provinces";
import regions from "../services/regions";
import sectors from "../services/sectors";
import users from "../services/users";

export const useDataFetcher = ({
  category,
  user,
  region,
  group,
  province,
  object,
}) => {
  const [categoryList, setCategoryList] = useState([]);
  const [groupList, setgroupList] = useState([]);
  const [regionsList, setRegionsList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [usersList, setUserList] = useState([]);
  const [objectsList, setObjectsList] = useState([]);

  useEffect(() => {
    if (category) {
      categories.getAll().then((category) => setCategoryList(category));
    }
    if (group) {
      sectors.getAll().then((group) => setgroupList(group));
    }
    if (region) {
      regions.getAll().then((region) => setRegionsList(region));
    }
    if (province) {
      provinces.getAll().then((provinces) => setProvinceList(provinces));
    }
    if (user) {
      users.getAll().then((user) => setUserList(user));
    }
    if (object) {
      objects.getAll().then((object) => setObjectsList(object));
    }
  }, []);
  return {
    categoryList,
    groupList,
    regionsList,
    provinceList,
    usersList,
    objectsList,
  };
};
