const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
let device_type = getDeviceType();
if (device_type == "desktop") {
  let link_sheet = document.getElementById("styles");
  link_sheet.href = "./styles.css";
} else if (device_type == "mobile" || device_type == "tablet") {
  let link_sheet = document.getElementById("styles");
  link_sheet.href = "./mobile.css";
}
