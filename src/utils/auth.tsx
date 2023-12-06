export const getItem = (key: string) => {
  const itemInStorage = localStorage.getItem(key);
  if (itemInStorage) {
    return JSON.parse(itemInStorage);
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setItem = (key: string, token: any) => {
  localStorage.setItem(key, JSON.stringify(token));
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
