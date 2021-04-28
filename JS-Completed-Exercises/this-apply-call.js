
const video = {
    title: 'a',
    tags: ['a' ,'b','c','d'],
    showTags(){
        this.tags.forEach(function(tags){
          console.log( this.title, tags)
        }.bind(this))
    }
}

video.showTags()



function playVideo(a, b){
    console.log(this)
}

playVideo.call({name: 'mosh'}, 1, 2);

playVideo.apply({name: 'mosh'}, [1,2]);


/* in this lessoned i practiced and learned three solutions to changing the value 
of this (const self = this), .bind(this), =>. I learned that arrow functions automatically 
inherit the this property therefor you don't have to use the .bind or const = method
making the code easier to read and simpler to write. I also learned briefly about 
calls and apply and how they allow you to define properties into an object. */
