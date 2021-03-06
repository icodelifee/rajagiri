function closeMenu() {
    westContainer.classList.contains(selectors.onScreen) ? (westContainer.classList.remove(selectors.onScreen), westTrigger.classList.remove(selectors.triggerActive)) : (westContainer.classList.add(selectors.onScreen), westTrigger.classList.add(selectors.triggerActive))
}
var selectors = {
        offScreen: "off-screen",
        onScreen: "on-screen",
        triggerActive: "west__trigger--active"
    },
    westTrigger = document.querySelector(".west__trigger"),
    westContainer = document.documentElement;
westContainer.classList.add(selectors.offScreen), westTrigger.addEventListener("click", closeMenu), document.onkeydown = function (e) {
    e = e || window.event, 27 == e.keyCode && westContainer.classList.contains(selectors.onScreen) && closeMenu()
};