const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems= []
getData()

async function getData() {
const res = await fetch('https://ramdomuser.me/ap?results=50')

 const data = await res.json()
 console.log(data)
}