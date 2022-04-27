// Write your code here!
const body = document.getElementsByTagName("body")[0];
body.removeChild(main);

const newHeader = document.createElement("h1");
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion"
body.append(newHeader)
