// 'use strict';
var Book = function(isbn, title, author) {
    // 构造函数 constructor
    if (isbn==undefined)
        throw new Error("Book constructor require an isbn");
    if (!this.checkIsbn(isbn)){
        throw new Error("Book invalid Isbn");
    }
    console.log(this);
    this.isbn = isbn;
    this.title = title || 'No title Specified';
    this.author = author || 'No author Specified';
  }
  Book.prototype = {
    checkIsbn: function(isbn){
        if (isbn===undefined|| typeof isbn!=='String')
            return false;
        if (isbn.length != 10 && isbn.length!=13)
            return false;
        if (isbn.indexOf('x')!=6)
            return false;
        return true
    },
    getIsbn: function(){
        return this.isbn;
    },
    setIsbn: function(isbn){
        if (isbn)
        this.isbn = isbn;
    },
    getTitle: function(){
        return this.title;
    },
    setTitle:function(title){
        this.title = title;
    },
    getAuthor: function(){
        return this.author;
    },
    setAuthor:function(author){
        this.author = author;
    }
  }
  // 函数的执行方式，决定this的指向
  // 1。 做为普通函数 this 指向全局,浏览器window node 后端 global
  // 当启用严格模式后， undefined
  // 2. 作为对象的方法被调用时
  let book = new Book("123456x890");