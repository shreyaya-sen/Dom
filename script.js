let x = document.getElementById("sqr1");
x.addEventListener("mouseenter", function () {
    let r = Math.floor(Math.random() * 11);
    x.innerHTML = `<h1>${r}</h1>`;
});
x.addEventListener("mouseleave", function () {
    x.innerHTML = `<h1>1</h1>`;
});

let y = document.getElementById("sqr2");
cr = "green";
y.addEventListener("mouseenter", function () {
    if (cr == "green") {
        y.style.backgroundColor = "green";
        cr = "red";
    }
    else {
        y.style.backgroundColor = "red";
        cr = "green";
    }
}
);
y = document.getElementById("sqr2");
y.addEventListener("mouseleave", function () {
    y.style.backgroundColor = "white";
}
);
// rb(a, b, c) 

let z = document.getElementById("sqr3");
z.addEventListener("mouseenter", function () {
    z.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)}, 
     ${Math.floor(Math.random() * 256)})`;
});
z.addEventListener("mouseleave", function () {
    z.style.backgroundColor = "white";
});
let w = document.getElementById("sqr4");
w.addEventListener("mouseenter", function () {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    z.style.backgroundColor = `rgb(${r1}, 255, 255)`;
    y.style.backgroundColor = `rgb(255, ${r2}, 255)`;
    x.style.backgroundColor = `rgb(255, 255, ${r3})`;
});
w.addEventListener("mouseleave", function () {
    z.style.backgroundColor = "white";
    y.style.backgroundColor = "white";
    x.style.backgroundColor = "white";
    w.style.backgroundColor = "white";
});
//why is the 2nd square not changing color when the 
// mouse enters the 4th square?
//The issue is due to space between rgb n bracket
// z.style.backgroundColor = `rgb(${r1}, 56, 89)`
   // y.style.backgroundColor = `rgb(46, ${r2}, 85)`
    //x.style.backgroundColor = `rgb(67, 71, ${r3})
    //for random color generation
