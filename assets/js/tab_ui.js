const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Menu mobile cấp 1
const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".line");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
handleMenuMobile();
tabs.forEach((tab, index) => {
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    panes[index].classList.add("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    handleMenuMobile();
  };
});

// Menu mobile cấp 2
function handleMenuMobile() {
  const list_menu_has_child=$$(".tab-pane.active .list-parent__has-child");
  list_menu_has_child.forEach((menu_child,index) => {
    menu_child.onclick = function(){
      menu_child.classList.add("active");
    }
    const close_menu_child = menu_child.querySelector(".list-child-of-list-parent")
    .querySelector(".list-child__title-and-close")
      close_menu_child.onclick = (event) =>{
        event.stopPropagation();
        menu_child.classList.remove("active");
      }
  });
}
// Handle action cuộn gọn title
const aside_title =$$('.aside-title');
aside_title.forEach((aside_title,index) => {
  const aside_content =aside_title.nextSibling.nextSibling;
  aside_title.onclick = function(){
    aside_content.classList.toggle("active");
  }
})
// handle action Xem thêm, Thu gọn.
const array_asideContent = $$(".aside-content");
array_asideContent.forEach(aside_content => {
  const maxHeight = aside_content.firstElementChild;
  const show_more = aside_content.firstElementChild.nextElementSibling;
  const show_less = aside_content.lastElementChild;
  show_more.onclick = () =>{
    maxHeight.classList.remove("max-height");
    show_more.classList.add("d-none");
    show_less.classList.remove("d-none");
  }
  show_less.onclick = () =>{
    maxHeight.classList.add("max-height");
    show_less.classList.add("d-none");
    show_more.classList.remove("d-none");

  }
});

// Handle click filer sorting
const showTextSort = $('.section-sort__selected-sort__title .text span');
console.dir(showTextSort)
const btn_quick_sort = $$('.btn-quick-sort');
btn_quick_sort.forEach(sort_item =>{
  sort_item.onclick =() =>{
    $(".btn-quick-sort.active").classList.remove("active");
    sort_item.classList.add('active');
    showTextSort.innerHTML = `${sort_item.innerText}`;
    console.log(sort_item.innerText);
  }
});
