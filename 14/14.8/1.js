let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(function(a, b) {
  return collator.compare(a, b);
});

console.log( collator ); // АИСТ,ёж,енот,ехидна,тигр,ЯК