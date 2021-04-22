
post = new BlogDraft('Object Literals', 'this is my practice', 'By:Nichols')

function BlogDraft(title, body, author){
    this.title = title
    this.body = body
    this.author = author
    this.views = 0;
    this.comments = [];
    this.isLive = false;
    
    const layout = `${title}
    ${body} 
    ${author}`
    draft = console.log(layout)
    

 }

console.log(post.draft)


//created a construction function to represent data that 
//would pertain to a blog post then used template literals 
//to display those values as if it were formatted like a post