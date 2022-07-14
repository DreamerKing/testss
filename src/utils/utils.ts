export const filterDot = (str:string):string => {
  return str.replace(/[.|'|"]/g,'')
}

export const getQueryName = (name:string) => {
  const result = window.location.href.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
  if (result == null || result.length < 1) {
    return "";
  }
  return decodeURIComponent(result[1]);
}

export const getRouteList = (items, list = []) => {
  items.map(item => {
    if (item.path && item.component) {
      list.push({ ...item })
    }
    item.children && getRouteList(item.children, list)
  })
  return list
}
