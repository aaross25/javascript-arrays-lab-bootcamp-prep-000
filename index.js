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
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  return [...kittens, name]
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  return [name, ...kittens]
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.slice(1)
}