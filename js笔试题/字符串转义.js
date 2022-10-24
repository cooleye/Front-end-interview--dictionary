const escapeHTML = function (a) {
    a = "" + a;
    return a.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, `&quot;`)
        .replace(/'/g, "&apos;");;
}

const escapeHTML2 = function (str) {
    return str.replace(/[<>"&]/g, function (match) {
        switch (match) {
            case "<": return "&lt;";
            case ">": return "&gt";
            case "&": return "&amp;";
            case `""`: return "";
        }
    });
}



let html = `<h1> hello world </h1> `;


// document.body.innerHTML = html;

document.body.innerHTML = escapeHTML(html)