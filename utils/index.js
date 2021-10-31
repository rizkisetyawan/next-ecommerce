const getChildrenData = (data, name) => data.find((row) => row.name === name).children_data;

const rp = (num) => Intl.NumberFormat('id-Id').format(num);

export {
  rp,
  getChildrenData,
};
