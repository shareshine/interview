// 实现'2[a]3[b]' => aabbb   '2[2[a]3[b]]' => aabbbaabbb  解码 
function decodeStr(str){
  if(str.indexOf('[') === -1) {
    return str
  }
  let list = str.match(/\d+\[([a-z]|[A-Z])+\]/ig);
  console.log(list);
  // let list = str.match(/(\d+)(\[([a-z]|[A-Z])+\])/ig)
  list.map(item => {
    let s = item.indexOf('[');
    let e = item.indexOf(']');
    let num = item.slice(0,s);
    let char = item.slice(s+1,e);
    let sumChar = ''
    for ( var i = 0; i < num; i++) {
      sumChar += char
    }
    console.log(item, sumChar);
    str = str.replace(item, sumChar);
    console.log(str)
  })
  return decodeStr(str);
}