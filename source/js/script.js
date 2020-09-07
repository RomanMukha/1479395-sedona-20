(() => {
  const menuButton = document.querySelector(".nav__button");
  const menuNav = document.querySelector(".nav");
  const submitButton = document.querySelector(".main-button");
  const popupFailure = document.querySelector(".popup-failure");
  const popupSuccess = document.querySelector(".popup-success");
  const popupFailureClose = document.querySelector(".popup-failure__button");
  const popupSuccessClose = document.querySelector(".popup-success__button");

  menuButton.classList.remove("nav__button--nojs");

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

  if (submitButton) {
    submitButton.addEventListener("click", (evt) => {
      const form = document.querySelector(".main-form");
      const collection = [];
      recursiveQueue(form, collection);

      const somAreFalse = collection.some((elem) => {
        return elem === false;
      });
      if (somAreFalse) {
        // If some validation errors;
        popupFailure.classList.add("popup-failure--active");
      } else {
        // If no errors;
        evt.preventDefault();
        popupSuccess.classList.add("popup-success--active");
        submitButton.disabled = true;
      }
    });
  }

  if (popupFailureClose) {
    popupFailureClose.addEventListener("click", () => {
      if (popupFailure.classList.contains("popup-failure--active")) {
        popupFailure.classList.remove("popup-failure--active");
      }
    });
  };

  if (popupSuccessClose) {
    popupSuccessClose.addEventListener("click", () => {
      if (popupSuccess.classList.contains("popup-success--active")) {
        popupSuccess.classList.remove("popup-success--active");
      }
    });
  };

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      if (menuNav.classList.contains("nav--opened")) {
        menuNav.classList.remove("nav--opened");
        menuNav.classList.add("nav--closed");
      } else {
        menuNav.classList.remove("nav--closed");
        menuNav.classList.add("nav--opened");
      }
    });
  }
})();
