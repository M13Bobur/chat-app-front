export const initialValuesAdd = { title: '', deadline: '', parent: '' };
export const formData = {
  title: 'Категория қўшиш',

  data: [
    { type: 'text', label: 'Номи', name: 'title', value: '', size: 24 },
    {
      type: 'text',
      label: 'Қисқача номи',
      name: 'shortName',
      value: '',
      size: 24,
      maxLength: 3,
      description:
        'Майдонга киритиладиган қиймат 2-3та харфдан иборат бўлиши керак! масалан: "Сув масаласи" = "SM" кўринишида бўлиши керак!',
    },
    { type: 'text', label: 'Муддати', name: 'deadline', value: '', size: 24 },
    {
      type: 'select',
      label: 'Қайси категорияга тегишли',
      name: 'parent',
      value: '',
      size: 24,
    },
  ],
};

export const childFormData = {
  title: 'Категория қўшиш',

  data: [
    { type: 'text', label: 'Номи', name: 'title', value: '', size: 24 },
    { type: 'text', label: 'Муддати', name: 'deadline', value: '', size: 24 },

    {
      type: 'select',
      label: 'Қайси категорияга тегишли',
      name: 'parent',
      value: '',
      size: 24,
    },
  ],
};

export const parentFormData = {
  title: 'Категория қўшиш',

  data: [
    { type: 'text', label: 'Номи', name: 'title', value: '', size: 24 },

    {
      type: 'text',
      label: 'Қисқача номи',
      name: 'shortName',
      value: '',
      size: 24,
    },
  ],
};
