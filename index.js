class Formatter {
  //add static methods here
  static capitalize(string){
    
    return (string[0].toUpperCase() + string.substr(1))
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result =  string.split(" ").map(word =>{
        if(exceptions.includes(word)){
          return word
        }
        return this.capitalize(word)
    }).join(" ")

    return this.capitalize(result)
  }
}