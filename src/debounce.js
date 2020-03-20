export function debounce(fn, delay){
  let timer;
  return function (...args){
    clearInterval(timer);
    timer = setTimeout(() => {
      fn(args)
    }, delay)
  }
}