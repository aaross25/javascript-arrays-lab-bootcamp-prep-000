const app = "I don't do much."

var kittens =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name)
{
 kittens.push(name)
 return kittens
}

function destructivelyPrependKitten(name)
{
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  
}