(() => {
  const menuButton = document.querySelector(".nav__button");
  const menuNav = document.querySelector(".nav");
  const submitButton = document.querySelector(".main-button");
  const popupFailure = document.querySelector(".popup-failure");
  const popupSuccess = document.querySelector(".popup-success");
  const popupFailureClose = document.querySelector(".popup-failure__button");
  const popupSuccessClose = document.querySelector(".popup-success__button");

  function recursiveQueue(elem, collection) {
    if (elem.children && elem.children.length) {
      for (child of elem.children) {
        if (child.checkValidity) {
          collection.push(child.checkValidity());
        }
        recursiveQueue(child, collection);
      }
    }
  }

  submitButton.addEventListener("click", (evt) => {
    const form = document.querySelector(".main-form");
    const collection = [];
    recursiveQueue(form, collection);

    const somAreFalse = collection.some(function (elem) {
      return elem === false;
    });
    if (somAreFalse) {
      popupFailure.classList.add("popup-failure--active");
    } else {
      // All is good;
      evt.preventDefault();
      popupSuccess.classList.add("popup-success--active");
      submitButton.disabled = true;
    }
  });

  popupFailureClose.addEventListener("click", () => {
    if (popupFailure.classList.contains("popup-failure--active")) {
      popupFailure.classList.remove("popup-failure--active");
    } else {
      null;
    }
  });

  popupSuccessClose.addEventListener("click", () => {
    if (popupSuccess.classList.contains("popup-success--active")) {
      popupSuccess.classList.remove("popup-success--active");
    } else {
      null;
    }
  });

  menuButton.addEventListener("click", () => {
    if (menuNav.classList.contains("nav--opened")) {
      menuNav.classList.remove("nav--opened");
      menuNav.classList.add("nav--closed");
    } else {
      menuNav.classList.remove("nav--closed");
      menuNav.classList.add("nav--opened");
    }
  });
})();
