document.querySelector('form').setAttribute("onsubmit", "clickHandler()")
let iframes = document.querySelectorAll('iframe')
let searchInput = document.getElementById('fname')

const remover = () => {
    let input = localStorage.getItem("searchdata") || "any"
    const start = performance.now();
    for (let i = 0; i < iframes.length; i++) {
        if (iframes[i].getAttribute("src").split('.').includes(input.toLowerCase())) {
            iframes[i].setAttribute("style", "display:none")
        }
    }
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
}

document.body.onload = remover()

const clickHandler = () => {
    localStorage.setItem("searchdata", searchInput.value)
}
