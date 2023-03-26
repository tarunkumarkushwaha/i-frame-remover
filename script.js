document.querySelector('form').setAttribute("onsubmit", "clickHandler()")
let iframes = document.querySelectorAll('iframe')
let searchInput = document.getElementById('fname')
const remover = () => {
    let input = localStorage.getItem("searchdata") || "any"
    const start = performance.now();
    for (let i = 0; i < iframes.length; i++) {
        const filtered = Object.values(iframes[i].attributes)
        if (filtered.find(o => o.name === 'src').value.split('.').includes(input.toLowerCase())) {
            filtered, iframes[i].setAttribute("style", "display:none")
        }
    }
    const end = performance.now();
    console.log(`Execution time: ${end - start} ms`);
}
document.body.onload = remover()

const clickHandler = () => {
    localStorage.setItem("searchdata", searchInput.value)
}
// onsubmit="clickHandler()"
