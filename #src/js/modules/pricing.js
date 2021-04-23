import { _qs, _d, _e, _qsa } from "../utils/domutil";

const prices = {
  premium: {
    month: "49.00",
    year: "539.00",
  },
  standart: {
    month: "19.00",
    year: "209.00",
  }
};

function pricingBtns() {
  const btns = _qsa(".pricing__btn", _d);
  const premiumPrice = _qs("#premium", _d);
  const standartPrice = _qs("#standart", _d);
  btns.forEach((btn, i, arr) => {
    _e("click", btn, () => {
      arr.forEach(btn => btn.classList.remove("pricing__btn_active"));
      btn.classList.add("pricing__btn_active");
      if (btn.classList.contains("pricing__btn_year")) {
        premiumPrice.textContent = prices.premium.year;
        standartPrice.textContent = prices.standart.year;
      } else {
        premiumPrice.textContent = prices.premium.month;
        standartPrice.textContent = prices.standart.month;
      }
    });
  });
}

export default pricingBtns;