let gif = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Thursday", "Saturday"];
let input = document.querySelector("input");
let div = document.querySelector(".gif_video")
input.addEventListener("input", () => {
  console.log(input.value);
if (input.value == "Saturday" || input.value == "Thursday") {
  div.innerHTML =  '<img src="https://media1.giphy.com/media/DYH297XiCS2Ck/200w.gif?cid=6c09b952kzmc1g6eaxfi5f658214wkn6dpgobumtiejkjwph&ep=v1_gifs_search&rid=200w.gif&ct=g">';
} else if(input.value == "Sunday" || input.value == "Monday" || input.value == "Tuesday" || input.value == "Wennesday" || input.value == "Friday") {
  div.innerHTML = '<img src="https://www.icegif.com/wp-content/uploads/2023/08/icegif-753.gif">';
}
});