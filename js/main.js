import delegate from "./delegate"

delegate(
    ".js-detail-summary",
    "click",
    function(e) {
        const summeryElm = e.delegateTarget

        if (summeryElm._open) {
            document.body.className = document.body.className.replace(
                "detail-on",
                ""
            )
            summeryElm._open = false
        } else {
            document.body.className += "detail-on"
            summeryElm._open = true
        }
    },
    false
)
