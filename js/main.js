import delegate from "./delegate"
import closest from "./closest"

delegate(
    ".details-dialog .summary",
    "click",
    function(e) {
        addClass(document.documentElement, "dialog-on")
        const detail = closest(e.delegateTarget, ".details-dialog")
        addClass(detail, "on")
    },
    false
)

delegate(
    ".details-dialog .dialog-close",
    "click",
    function(e) {
        var detail = document.querySelector(".details-dialog.on")
        removeClass(detail, "on")
        removeClass(document.documentElement, "dialog-on")
    },
    false
)

delegate(
    ".details-dialog .dialog",
    "click",
    function(e) {
        var detail = document.querySelector(".details-dialog.on")
        var content = document.querySelector(
            ".details-dialog.on .dialog-content"
        )
        var rect = content.getBoundingClientRect()

        if (e.clientX < rect.left || e.clientX > rect.right) {
            removeClass(detail, "on")
            removeClass(document.documentElement, "dialog-on")
        }
    },
    false
)

function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className)
    return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"))
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className)
    else if (hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)")
        el.className = el.className.replace(reg, " ")
    }
}
