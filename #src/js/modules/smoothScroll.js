import { _qs, _d, _e, _qsa } from "../utils/domutil";

function smoothScroll() {
  const downBtn = _qs(".promo__link-down", _d);
  const upBtn = _qs(".footer__up", _d);

  _e("click", upBtn, () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  _e("click", downBtn, () => {
    window.scrollTo({
      top: document.body.scrollHeight - window.innerHeight,
      behavior: "smooth",
    });
  });
}

export default smoothScroll;