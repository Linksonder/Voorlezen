import Component from './lib/component.js';

class BookListComponent extends Component {

    constructor(){
        super();
    }

    init(){

        //title
        let title = document.createElement('h1');
        title.innerText = "Book list";
        this.appendChild(title);

        //books-list
        this.bookscontainer = document.createElement('div');
        this.bookscontainer.className = "book-list";
        this.appendChild(this.bookscontainer);

        //add button
        let add = document.createElement('button');
        add.innerText = '+';
        add.addEventListener('click', () => { this.addBook()});
        this.appendChild(add);

        //books
        this.books = JSON.parse(localStorage.getItem('books')) || [];
        this.renderBooks();
    }


    addBook(){
        let name = prompt("Enter the name of the book"); 
        this.books.push({ name: name});
        localStorage.setItem('books', JSON.stringify(this.books));
        this.renderBooks();
    }

    renderBooks(){
        this.bookscontainer.innerHTML = "";

        this.books.forEach(b => { 
            let book = document.createElement('div');
            book.className = 'book';
            book.innerText = b.name;
            book.addEventListener('click', () => this.navigateToBook(b.name));
            this.bookscontainer.appendChild(book);
        })
    }

    navigateToBook(name){
        super.navigateTo('/book-details/' + name);
    }

}

//<book-list></book-list>
customElements.define('book-list', BookListComponent);
export default BookListComponent;