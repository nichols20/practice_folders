
function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)throw new Error('Stopwatch already Started')

       running = true

       startTime = new Date();
    };

    this.stop = function (){
        if(!running)throw new Error(`Stopwatch hasn't started`)

        running = false

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) /1000

        duration += seconds
    }

    this.reset = function(){
        startTime = null
        endTime = null
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {return duration}
    })
}

const sw = new Stopwatch




/* In this exercise I created a stopwatch function, In this exercise I had Learned a 
lot about the Date() function. 1-how it tracks time and what it references too and two
how I would be able to display the current amount of seconds that have passed since
the stopwatch started */

