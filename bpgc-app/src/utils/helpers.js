const checkForInvalidBrowser = () => {
  // Internet Explorer 6-11
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;
  // Edge 20+
  const isEdge = !isIE && !!window.StyleMedia;
  // Safari - transparent text bug
  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(!window['safari']);
  // prevent IE disable ( 404 )
  var isFirefox = typeof InstallTrigger !== 'undefined';
  return isIE || isEdge || isSafari || isFirefox;
};

export { checkForInvalidBrowser };
