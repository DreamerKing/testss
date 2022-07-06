export const filterDot = (str:string):string => {
  return str.replace(/[.|'|"]/g,'')
}

export const getQueryName = (name:string) => {
  let result = window.location.href.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return "";
  }
  return decodeURIComponent(result[1]);
}
