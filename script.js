document.querySelector('form').setAttribute("onsubmit", "clickHandler()")
let iframes = [...document.querySelectorAll('iframe')]
let searchInput = document.getElementById('fname')
let iframeremoved = document.createElement('div')
iframeremoved.innerHTML="Iframe Blocked !!"

const remover = () => {
    let input = localStorage.getItem("searchdata") || "any"
    const start = performance.now();
    for (let i = 0; i < iframes.length; i++) {
        if (iframes[i].getAttribute("src").indexOf((input.toLowerCase())) != -1) {
            document.body.replaceChild(iframeremoved,iframes[i])
        }
    }
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
}
document.body.onload = remover()
const clickHandler = () => {
    localStorage.setItem("searchdata", searchInput.value)
}