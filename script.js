const iframeblocker = () => {
    if (confirm("do you want to remove iframes")) {
        let getiframes = document.querySelectorAll('iframe')
        for (let i = 0; i < getiframes.length; i++) {
            let iframeremoved = document.createElement('div')
            iframeremoved.innerHTML = "Iframe Blocked !!"
            document.body.replaceChild(iframeremoved, getiframes[i])
        }

    }
}
iframeblocker()

const scriptunblocker = () => {
    if (confirm("do you want to enable scripts")) {
        let getscript = document.querySelectorAll('script[cz-script-category]')
        for (let i = 0; i < getscript.length; i++) {
            if (getscript[i].getAttribute('cz-script-category').trim() == "functional") {
                getscript[i].setAttribute("type", "text/javascript")
            }

        }
    }
}

// scriptunblocker()






// document.querySelector('form').setAttribute("onsubmit", "clickHandler()")
// let iframes = document.querySelectorAll('iframe')
// let searchInput = document.getElementById('fname')

// const remover = () => {
//     let input = localStorage.getItem("searchdata") || "any"
//     for (let i = 0; i < iframes.length; i++) {
//         if (iframes[i].getAttribute("src").indexOf((input.toLowerCase())) != -1) {
//             let iframeremoved = document.createElement('div')
//             iframeremoved.innerHTML = "Iframe Blocked !!"
//             document.body.replaceChild(iframeremoved, iframes[i])
//         }
//     }
// }
// // document.body.onload = remover()
// const clickHandler = () => {
//     localStorage.setItem("searchdata", searchInput.value)
// }
