export const formData = {
  title: "Фойдаланувчи қўшиш",

  data: [
    {
      type: "select",
      label: "Роль",
      name: "role",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },

    {
      type: "text",
      label: "Фамилияси",
      name: "lastName",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },
    {
      type: "text",
      label: "Исми",
      name: "firstName",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },
    {
      type: "text",
      label: "Шарифи",
      name: "middleName",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },
    {
      type: "text",
      label: "Логин",
      name: "username",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },

    {
      type: "password",
      label: "Парол",
      name: "password",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },

    {
      type: "select",
      label: "Туман",
      name: "region",
      value: "",
      size: 12,
      permission: ["moderator"],
    },

    {
      type: "tel",
      label: "Телефон рақами",
      name: "phone",
      value: "",
      size: 12,
      permission: ["moderator", "admin"],
    },
  ],
};

export const initialValuesAdd = {
  firstName: "",
  lastName: "",
  middleName: "",
  username: "",
  password: "",
  region: "",
  role: "",
  phone: "",
};
