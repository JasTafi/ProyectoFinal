function Get(key) {
  const res = localStorage.getItem(key);

  try {
    if (typeof res === 'string' && res !== 'undefined' && res !== null) {
      return JSON.parse(res);
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return null;
}

function Set(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return true;
}

export { Get, Set };