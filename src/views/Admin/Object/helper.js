export const initialValuesAdd = { title: "", desc: "", parent: "" };
export const formData = {
  title: "Объект қўшиш",

  data: [
    { type: "text", label: "Номи", name: "title", value: "", size: 24 },
    { type: "text", label: "Изоҳ", name: "desc", value: "", size: 24 },
    {
      type: "select",
      label: "Қайси обектга тегишли",
      name: "parent",
      value: "",
      size: 24,
    },

    {
      type: "select",
      label: "Туманни танланг",
      name: "region",
      value: "",
      size: 24,
    },
    {
      type: "select",
      label: "Секторни танланг",
      name: "sector",
      value: "",
      size: 24,
    },
  ],
};

export const parentFormData = {
  title: "Объект қўшиш",

  data: [
    { type: "text", label: "Номи", name: "title", value: "", size: 24 },
    { type: "text", label: "Изоҳ", name: "desc", value: "", size: 24 },

    // {
    //   type: "select",
    //   label: "Туман",

    //   name: "region",
    //   value: "",
    //   size: 24,
    // },
    // {
    //   type: "select",
    //   label: "Секторни танланг",
    //   name: "sector",
    //   value: "",
    //   size: 24,
    // },
  ],
};
