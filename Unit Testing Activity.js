function Greet(name = ""){
    if (name == "") {
        return ("Hello There!");
        
    }
    else if (typeof(name) != "string"){
        let result= "Hello ";
        for ( let i = 0; i < name.length; i++){
            result += name[i] + ", ";

        }
        return result;
    }
    else{
            return "Hello "  + name;
        }
}
console.log(Greet(["Joe", "Jose"]));