import { _qs, _d, _e } from "../utils/domutil";

function burgerMenu() {
  const burgerContainer = _qs(".burger-container", _d);
  const burgerMenu = _qs(".burger-menu__container", _d);
  const burger = _qs(".burger", _d);
  _e("click", burgerContainer, (ev) => {
    burger.classList.toggle("burger_active");
    burgerMenu.classList.toggle("burger-menu__container_active");
    burgerContainer.classList.toggle("burger-container_active");
  });
}

export default burgerMenu;