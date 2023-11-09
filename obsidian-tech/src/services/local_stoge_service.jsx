function Get(key) {
  const res = localStorage.getItem(key);

  if (res) {
    return JSON.parse(res);
  }

  return null;
}

function Set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}

export { Get, Set };