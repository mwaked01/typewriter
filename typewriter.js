const sentence = "hello there from lighthouse labs";

let timer = 0; //keep track of the incremented time delay
let speed = 50; //control the increment of how long the time delay is going to be


for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += speed;
}

setTimeout(() =>{
  console.log();
},sentence.length * speed); //add a new line after the final delayed output.

