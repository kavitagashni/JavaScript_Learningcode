// Create a function which takes string as a argument and return
//1. replaces spaces and underscores with hypons and result will be in lowercase; 
//2. All camelcase letter seprated from -

//examples (input as argument->output)
//1. Hello World -> hello-world 
//2. Hello_world -> hello-world
//3. Hello-world -> hello-world
//4. thisIsGoodAssignment -> this-is-good-assignment
//5. helloWorld-How_are you? I am veryGood -> hello-world-how-are-you?-i-am-very-good

function myCustom(str) {
const includeSpace = (/([_ -])/g);

 if(includeSpace){
    let abc = str.replace( /[_ -]/g, "-");
    let xyz = abc.replace(/([A-Z])/g, "-$1").toLowerCase();
    return( xyz+"abc")
  }

 
}
console.log(myCustom("helloWorld-How_are you? I am veryGood"))