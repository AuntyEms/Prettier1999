export function get(key) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (_) {
    // noop
  }
}

export function set(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {
    // noop
  }
}
