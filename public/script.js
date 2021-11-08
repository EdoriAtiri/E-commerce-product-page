// OPEN AND CLOSE SIDEBAR MENU FOR MOBILE
const openCloseMenuAndCart = () => {
  const open_sidebar_btn = document.getElementById('open'),
    close_sidebar_btn = document.getElementById('x'),
    menu = document.getElementById('menu'),
    dark = document.getElementById('dark_bg'),
    open_cart_btn = document.getElementById('cart_btn'),
    cart = document.getElementById('cart'),
    cart_item_no = document.getElementById('cart_item_no');

  function add_class(elem, cl1, cl2) {
    elem.classList.add(cl1);
    elem.classList.add(cl2);
  }
  function remove_class(elem, cl1, cl2) {
    elem.classList.remove(cl1);
    elem.classList.remove(cl2);
  }

  // Open sidebar
  open_sidebar_btn.addEventListener('click', () => {
    add_class(cart, 'hidden');
    remove_class(menu, '-translate-x-full', 'opacity-0');
    remove_class(dark, 'hidden');
    add_class(document.body, 'overflow-y-hidden');
    setTimeout(() => {
      remove_class(close_sidebar_btn, 'hidden');
    }, 190);
  });

  function close_menu(elem) {
    elem.addEventListener('click', () => {
      add_class(menu, '-translate-x-full', 'pl-8');
      setTimeout(() => {
        add_class(menu, 'opacity-0');
      }, 200);
      add_class(dark, 'hidden');
      remove_class(document.body, 'overflow-y-hidden');
      add_class(close_sidebar_btn, 'hidden');
    });
  }
  close_menu(dark);
  close_menu(close_sidebar_btn);

  // Open and close Cart
  open_cart_btn.addEventListener('click', () => {
    if (cart.classList.contains('hidden')) {
      remove_class(cart, 'hidden');
    } else {
      add_class(cart, 'hidden');
    }
  });

  // if (cart.classList.contains('hidden'))
  //   document.onClick = (e) => {
  //     if (e.target.id !== cart) {
  //       add_class(cart, 'hidden');
  //     }
  //   };
};

openCloseMenuAndCart();
