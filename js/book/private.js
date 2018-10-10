var Book = (function () {
    //闭包 闭合空间 closure
    var numOfBooks = 0;
    return function (newIsbn, newTitle, newAuthor) {
        //constructor

        var isbn, title, author;
        //公有属性
        var checkisbn = function(isbn){
            if(!isbn){
                throw new Error("invalid isbn")
            }
        }
        this.setTltle = function (newTitle) {
            title = newTitle || 'no title specified';
        }
        this.getTitle = function () {
            return title;
        }
        this.setIsbn = function(newisbn){
            if (checkisbn(isbn)){
                isbn= newisbn
            }
        }
        this.getIsbn = function () {
            return isbn;
        }
        this.getAuthor = function () {
            return author;
        }
        this.setTltle(newTitle);
        numOfBooks++;
        console.log(newIsbn, newTitle, newAuthor, numOfBooks);
    }
})();

Book.convertToTitleCase = function (){

}
console.log(typeof Book);
var book = new Book("123", "书", 'tiger');
book.setTitle("21313")