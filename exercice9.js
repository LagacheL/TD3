alert("Je vais modifier la div");
let maDiv1;
maDiv1 = document.getElementsByName('test');
maDiv1.forEach(div => div.innerHTML = "Hello");