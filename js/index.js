var words = [
    'It is certain.',
'It is decidedly so.',
'Without a doubt.',
'Yes definitely.',
'You may rely on it.',
'As I see it, yes.',
'Most likely.',
'Outlook good.',
'Yes.',
'Signs point to yes.',
'Reply hazy try again.',
'Ask again later.',
'Better not tell you now.',
'Cannot predict now.',
'Concentrate and ask again.',
'Do not count on it.',
'My reply is no.',
'My sources say no.',
'Outlook not so good.',
'Very doubtful.',
'Yeah, and I\'m the pope.',
'You wish lol.',
'I don\'t know and I don\'t care.'
    ];

    var getRandomWord = function () {
      return words[Math.floor(Math.random() * words.length)];
    };
$(function() {$('.eball').mouseenter(function(){
    $('.textbox').html(getRandomWord());
    });

});
function myFunction(event) {
  var x = event.key;

  if (x == "c") { 
    alert ("Changelog:\n        Magic 8 Ball [1.0.0]\n                CREATED-- 20 answers\n        Magic 8 Ball [1.0.1]\n                ADDED-- 3 new answers");
  }
  if (x == "C") {
	alert("Credits:\n        Developer: HUNTER McCABE")  
  }
}
