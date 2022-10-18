let myText = document.getElementById("my-text");
myText.addEventListener("input", () => {
    let count = (myText.value).length;
    document.getElementById("count-result").textContent = `Total characters: ${count}`;
});
let btn1 = document.querySelector('.btn1')
btn1.addEventListener("click",()=>{
   input = document.getElementById('my-text').value
  let result = input.toUpperCase()
  document.getElementById('my-text').value = result
})
let btn2= document.querySelector('.btn2')
btn2.addEventListener("click",()=>{
   input = document.getElementById('my-text').value
  let result = input.toLowerCase()
  document.getElementById('my-text').value = result
})
let btn3 = document.querySelector('.btn3')
btn3.addEventListener("click",()=>{
  document.getElementById('my-text').value = ""
})
let btn4 = document.querySelector('.btn4')
btn4.addEventListener("click",()=>{
var text = document.getElementById('my-text').value;
navigator.clipboard.writeText(text).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
})