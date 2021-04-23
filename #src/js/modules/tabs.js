import { _qs, _d, _e, _qsa } from "../utils/domutil";

function tabs() {
  const tabsParent = _qs(".news__tabs-wrap", _d);
  const tabsTextContent = [];
  const tabsArr = _qsa(".news-tab", _d);
  const textBlocks = _qsa(".news-tab__text", _d);
  textBlocks.forEach(item => {
    const text = item.textContent;
    tabsTextContent.push(text);
  });

  tabsArr.forEach((tab, i, arr) => {

    _e("click", tab, (ev) => {
      const target = ev.target;
      if (target.closest(".news-tab__link") || target.closest(".news-tab_active")) {
        return;
      }
      arr.forEach((item, i) => {
        item.classList.remove("news-tab_active");
        cutText(item, i);
      });
      tab.classList.add("news-tab_active");
      returnFullText(tab, i);

      if (window.innerWidth < 992) {
        const gotoBlockValue = tabsParent.getBoundingClientRect().top + window.pageYOffset - 20;
        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
      }
      
    });
    cutText(tab, i);

    if (tab.classList.contains("news-tab_active")) {
      returnFullText(tab, i);
    }

  }); 

  function cutText(node, i) {
    const textBlock = _qs(".news-tab__text", node);
    const text= textBlock.textContent;
    if (text.length > 75) {
      textBlock.textContent = text.slice(0, 72) + "...";
    }
  }

  function returnFullText(node, i) {
    const textBlock = _qs(".news-tab__text", node);
    textBlock.textContent = tabsTextContent[i];
  }
}

export default tabs;