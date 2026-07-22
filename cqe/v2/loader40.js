(() => {
  "use strict";

  const target = new URL("../latest.html", window.location.href);
  target.searchParams.set("v", "20260722-11");
  window.location.replace(target.toString());
})();
