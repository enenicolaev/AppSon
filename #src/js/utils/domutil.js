const _d = document;

// Add event handler (foo) on node for eventName
function _e(eventName, node, foo, options) {
  return node.addEventListener(eventName, foo, options);
}

// Query selector
function _qs(selector, node) {
  return node.querySelector(selector);
}

// Query selector all
function _qsa(selector, node) {
  return node.querySelectorAll(selector);
}

export {
  _d,
  _e,
  _qs,
  _qsa,
};