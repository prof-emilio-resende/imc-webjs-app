export function debounce(func, timeout = 300) {
  let timer;
  let debounceFct = (...args) => {
    if (!timer) {
      console.log('acting...');
      func.apply(this, args);
    }
    console.log('cancelling...');
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log('cleaning...')
      timer = undefined;
    }, timeout);
  };

  return debounceFct;
}