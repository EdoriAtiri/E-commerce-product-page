let no_items_selected = 0;
// Dark Overlay
const dark = document.getElementById('dark_bg');

// STORE AND UPDATE VALUES
function values() {
  let item_value = 125;
  let currFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  let item_val_usd = currFormatter.format(item_value);
  document.getElementById('item_value').innerHTML = item_val_usd;

  const empty_cart = document.querySelector('#card_body > span'),
    add_to_cart_btn = document.getElementById('add_to_cart_btn'),
    no_of_items_counter = document.querySelector('#add_to_cart > div > span'),
    increase = document.querySelector('.increase'),
    reduce = document.querySelector('.reduce');

  const filled_cart = document.getElementById('filled_cart'),
    price_of_item = document.querySelector('.prod_price'),
    no_of_items = document.querySelector('.no'),
    total_of_item = document.querySelector('.total_cost'),
    cart_item_no = document.getElementById('cart_item_no');

  // Reduce and Increase no of items customer want to purchase
  increase.addEventListener('click', () => {
    no_items_selected++;
    no_of_items_counter.innerHTML = no_items_selected;
    no_of_selected = no_items_selected;
  });
  reduce.addEventListener('click', () => {
    if (no_items_selected <= 0) {
      no_items_selected = 0;
    } else {
      no_items_selected--;
    }
    no_of_items_counter.innerHTML = no_items_selected;
    no_of_selected = no_items_selected;
  });

  // Add To Cart
  add_to_cart_btn.addEventListener('click', () => {
    if (no_items_selected >= 1) {
      empty_cart.classList.add('hidden');
      filled_cart.classList.remove('hidden');
      price_of_item.innerHTML = item_val_usd;
      no_of_items.innerHTML = `x ${no_items_selected}`;
      total_of_item.innerHTML = currFormatter.format(
        no_items_selected * item_value
      );
      cart_item_no.classList.remove('opacity-0');
      cart_item_no.querySelector('small').innerHTML = no_items_selected;
    } else {
      empty_cart.classList.remove('hidden');
      filled_cart.classList.add('hidden');
      cart_item_no.classList.add('opacity-0');
    }
  });

  // Delete Cart Items
  document.querySelector('#delete_item').onclick = () => {
    no_items_selected = 0;
    empty_cart.classList.remove('hidden');
    filled_cart.classList.add('hidden');
    cart_item_no.classList.add('opacity-0');
    cart_item_no.querySelector('small').innerHTML = no_items_selected;
  };
}

// GALLERY AND THUMBNAIL
function gallery() {
  const thumbs = document.querySelectorAll('.thumb_container'),
    image = document.getElementById('product_image'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

  // Gallery Small Screen
  const product_gallery_prev_next = (prevElem, nextElem, index, img) => {
    prevElem.addEventListener('click', () => {
      if (index > 1) {
        index = index - 1;
      } else {
        index = 4;
      }
      img.src = `images/image-product-${index}.jpg`;
    });
    nextElem.addEventListener('click', () => {
      if (index >= 4) {
        index = 1;
      } else {
        index = index + 1;
      }

      img.src = `images/image-product-${index}.jpg`;
    });
  };

  //Regex function to get no from string gotten from this url: https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript

  let product_image_index = parseInt(image.src.slice(-19).match(/\d+/)[0]);
  product_gallery_prev_next(prev, next, product_image_index, image);

  // Gallery Large Screen
  function focus_on_thumb(element, img) {
    element.forEach((elem) => {
      elem.addEventListener('focus', () => {
        const elem_no = elem
          .querySelector('img')
          .src.slice(-29)
          .match(/\d+/)[0];

        img.src = `images/image-product-${elem_no}.jpg`;
      });
    });
  }

  focus_on_thumb(thumbs, image);

  // LightBox
  const lightbox = document.getElementById('lightbox'),
    lb_image = document.getElementById('lb_product_image'),
    lb_thumbs = document.querySelectorAll('.thumb_light_container'),
    lb_prev = document.querySelector('.lb_prev'),
    lb_next = document.querySelector('.lb_next');
  // get the current index of the gallery when clicked and display lightbox
  let current_image = 0;

  image.addEventListener('click', (e) => {
    current_image = parseInt(e.target.src.slice(-19).match(/\d+/)[0]);

    lb_image.src = `images/image-product-${current_image}.jpg`;

    if (window.innerWidth >= 768) {
      lightbox.classList.add('md:block');
      dark.classList.add('md:block');
    }
  });

  dark.onclick = () => {
    lightbox.classList.remove('md:block');
    dark.classList.remove('md:block');
  };

  product_gallery_prev_next(lb_prev, lb_next, current_image, lb_image);
  focus_on_thumb(lb_thumbs, lb_image);
}

// OPEN AND CLOSE CART AND SIDEBAR MENU FOR MOBILE
const openCloseMenuAndCart = () => {
  const open_sidebar_btn = document.getElementById('open'),
    close_sidebar_btn = document.getElementById('x'),
    menu = document.getElementById('menu'),
    open_cart_btn = document.getElementById('cart_btn'),
    cart = document.getElementById('cart');

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

  // Close Cart if a different element is clicked
  document.documentElement.addEventListener('click', (e) => {
    if (
      e.target.id !== 'cart' &&
      e.target.parentNode.id !== 'cart' &&
      e.target.parentNode.parentNode.id !== 'cart' &&
      e.target.parentNode.parentNode.parentNode.id !== 'cart' &&
      e.target.parentNode.id !== 'filled_cart' &&
      e.target.parentNode.parentNode.id !== 'filled_cart' &&
      e.target.parentNode.parentNode.parentNode.id !== 'filled_cart' &&
      e.target.parentNode.id !== 'pricing' &&
      e.target.tagName !== 'svg' &&
      e.target.tagName !== 'path'
    ) {
      cart.classList.add('hidden');
    }
  });
};

openCloseMenuAndCart();
values();
gallery();
