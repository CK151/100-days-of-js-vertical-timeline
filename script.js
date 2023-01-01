(function () {
    const items = document.querySelectorAll(".timeline li");

    function isElementInViewPort(el) {
        let rect = el.getBoundingClientRect();
        return(
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    function slidIn() {
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewPort(items[i])) {
                items[i].classList.add("slide-in")
            }
            else {
                items[i].classList.remove("slide-in")
            }
        }
    }


    window.addEventListener("load", slidIn);
    window.addEventListener("scroll", slidIn);
    window.addEventListener("resize", slidIn);
})();