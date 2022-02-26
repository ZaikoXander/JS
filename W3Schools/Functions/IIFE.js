var foo = 'minhaVariavel';

(function(bar) {
    var bla = bar;
    console.log(bla) // "minhaVariavel"
})(foo)


const user = (function() {
    let name = 'anonymous';
    return {
      getName: _ => name,
      setName: newName => name = newName
    };
  })();
  console.log(user.getName()) // anonymous
  user.setName('Amy');
  console.log(user.getName()); // Amy