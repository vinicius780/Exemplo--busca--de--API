// https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/users

function  Clicked() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
  return response.json()
})
.then(data => {
  console.log(data)
})
}

document.querySelector('.button').addEventListener('click', Clicked)


function Click() {
fetch(' https://jsonplaceholder.typicode.com/posts')
.then(response => {
  return response.json()
})
.then(data => {
console.log(data)
})
}
document.querySelector('#button').addEventListener('click', Click)