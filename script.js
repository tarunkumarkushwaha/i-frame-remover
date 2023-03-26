document.querySelector('form').setAttribute("onsubmit", "clickHandler()")
let iframes = document.querySelectorAll('iframe')
let searchInput = document.getElementById('fname')

const remover = () => {
    let input = localStorage.getItem("searchdata") || "any"
    for (let i = 0; i < iframes.length; i++) {
        if (iframes[i].getAttribute("src").indexOf((input.toLowerCase())) != -1) {
            let iframeremoved = document.createElement('div')
            iframeremoved.innerHTML = "Iframe Blocked !!"
            document.body.replaceChild(iframeremoved, iframes[i])
        }
    }
}
document.body.onload = remover()
const clickHandler = () => {
    localStorage.setItem("searchdata", searchInput.value)
}