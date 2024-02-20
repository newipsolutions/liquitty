const getItem = (key: string) => {
  const data: any =
    localStorage.getItem(key) == undefined ? "" : localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

const setItem = (key: string, value: string | number) => {
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;
  return localStorage.setItem(key, stringify);
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
