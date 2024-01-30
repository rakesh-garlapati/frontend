const btn = document.getElementById('btn')
const mainDiv = document.getElementById('mainDiv')
const mode = document.getElementById('mode');
mode.addEventListener('click',changecolor)
btn.addEventListener('click',fetchData)
function fetchData(){
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                handleData(json)
            })

}
function changecolor(){
    console.log('hey')
    const icon = document.getElementById('icon')
    if(icon.classList.contains('fa-toggle-on')){
        icon.classList.replace('fa-toggle-on','fa-toggle-off')
        const heading = document.getElementById('bookstorehead')
        // heading.style.color = 'orange';
        heading.style.color='rgb(236, 155, 34)';
        btn.style.color = ' rgb(236, 155, 34)';
        btn.style.backgroundColor= 'black'; 
        // const book = document.getElementsByClassName('book')
        // console.log(document.getElementsByClassName('book'))
        // book.style.border='2px solid  rgb(236, 155, 34)'
        // book.style.backgroundColor = 'black'


    }else{
        icon.classList.replace('fa-toggle-off','fa-toggle-on')
        const heading = document.getElementById('bookstorehead')
        heading.style.color='black';
        btn.style.color =  'black';
        btn.style.backgroundColor= ' rgb(236, 155, 34)'; 
        const book = document.getElementsByClassName('book')
        book.book[0].border='2px solid  black'

    }
    
  
}
function handleData(data){
    data.forEach(element => {
        const book = document.createElement('div')
        book.classList.add('book');
        const bookname = document.createElement('h1')
        const img =document.createElement('img') 
        img.classList.add('img') 
        const description = document.createElement('p')
        bookname.textContent = element.title.substring(0,15);
        img.src =element.image
        description.textContent = element.description
        book.append(bookname,img,description)
        mainDiv.appendChild(book)
    });
    


}