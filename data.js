/* data.js — Shared data for Learn4Kids modules */
(function (global) {
  global.LEARN4KIDS_DATA = {
    digits: (function() {
      var EN  = ['zero','one','two','three','four','five','six','seven','eight','nine'];
      var BEL = ['нуль','адзін','два','тры','чатыры','пяць','шэсць','сем','восем','дзевяць'];
      return EN.map(function(en, i) {
        return { type:'text', display:String(i), label:en, bel:BEL[i], audio:en };
      });
    }()),

    alphabet: (function() {
      var BEL = {A:'эй',B:'бі',C:'сі',D:'дзі',E:'і',F:'эф',G:'джы',H:'эйч',
                I:'ай',J:'джэй',K:'кей',L:'эл',M:'эм',N:'эн',O:'оў',P:'пі',
                Q:'к\'ю',R:'ар',S:'эс',T:'ці',U:'ю',V:'ві',W:'дабл-ю',
                X:'экс',Y:'вай',Z:'зэд'};
      return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function(L) {
        return { type:'text', display:L, label:L, bel:BEL[L], audio:L.toLowerCase() };
      });
    }()),

    colors: [
      {type:'color',display:'#e74c3c',label:'red',    bel:'чырвоны',  audio:'red'    },
      {type:'color',display:'#e67e22',label:'orange', bel:'аранжавы', audio:'orange' },
      {type:'color',display:'#d4ac0d',label:'yellow', bel:'жоўты',    audio:'yellow' },
      {type:'color',display:'#2ecc71',label:'green',  bel:'зялёны',   audio:'green'  },
      {type:'color',display:'#3498db',label:'blue',   bel:'сіні',     audio:'blue'   },
      {type:'color',display:'#9b59b6',label:'purple', bel:'фіялетавы',audio:'purple' },
      {type:'color',display:'#e91e63',label:'pink',   bel:'ружовы',   audio:'pink'   },
      {type:'color',display:'#8b5e3c',label:'brown',  bel:'карычневы',audio:'brown'  },
      {type:'color',display:'#2c3e50',label:'black',  bel:'чорны',    audio:'black'  },
      {type:'color',display:'#bdc3c7',label:'white',  bel:'белы',     audio:'white'  },
      {type:'color',display:'#7f8c8d',label:'gray',   bel:'шэры',     audio:'gray'   },
      {type:'color',display:'#f0b429',label:'gold',   bel:'залаты',   audio:'gold'   },
    ],

    animals: [
      {type:'emoji',display:'🐱',label:'cat',       bel:'кот',        audio:'cat'      },
      {type:'emoji',display:'🐶',label:'dog',       bel:'сабака',     audio:'dog'      },
      {type:'emoji',display:'🐦',label:'bird',      bel:'птушка',     audio:'bird'     },
      {type:'emoji',display:'🐟',label:'fish',      bel:'рыба',       audio:'fish'     },
      {type:'emoji',display:'🐰',label:'rabbit',    bel:'трус',       audio:'rabbit'   },
      {type:'emoji',display:'🐻',label:'bear',      bel:'мядзведзь',  audio:'bear'     },
      {type:'emoji',display:'🦁',label:'lion',      bel:'леў',        audio:'lion'     },
      {type:'emoji',display:'🐯',label:'tiger',     bel:'тыгр',       audio:'tiger'    },
      {type:'emoji',display:'🐘',label:'elephant',  bel:'слон',       audio:'elephant' },
      {type:'emoji',display:'🐒',label:'monkey',    bel:'малпа',      audio:'monkey'   },
      {type:'emoji',display:'🐴',label:'horse',     bel:'конь',       audio:'horse'    },
      {type:'emoji',display:'🐮',label:'cow',       bel:'карова',     audio:'cow'      },
      {type:'emoji',display:'🐷',label:'pig',       bel:'свіння',     audio:'pig'      },
      {type:'emoji',display:'🐑',label:'sheep',     bel:'авечка',     audio:'sheep'    },
      {type:'emoji',display:'🐔',label:'chicken',   bel:'курыца',     audio:'chicken'  },
      {type:'emoji',display:'🦆',label:'duck',      bel:'качка',      audio:'duck'     },
      {type:'emoji',display:'🐸',label:'frog',      bel:'жаба',       audio:'frog'     },
      {type:'emoji',display:'🐍',label:'snake',     bel:'змяя',       audio:'snake'    },
      {type:'emoji',display:'🐢',label:'turtle',    bel:'чарапаха',   audio:'turtle'   },
      {type:'emoji',display:'🐧',label:'penguin',   bel:'пінгвін',    audio:'penguin'  },
      {type:'emoji',display:'🦉',label:'owl',       bel:'сава',       audio:'owl'      },
      {type:'emoji',display:'🦊',label:'fox',       bel:'ліса',       audio:'fox'      },
      {type:'emoji',display:'🐺',label:'wolf',      bel:'воўк',       audio:'wolf'     },
      {type:'emoji',display:'🦌',label:'deer',      bel:'алень',      audio:'deer'     },
      {type:'emoji',display:'🦒',label:'giraffe',   bel:'жырафа',     audio:'giraffe'  },
      {type:'emoji',display:'🦓',label:'zebra',     bel:'зебра',      audio:'zebra'    },
      {type:'emoji',display:'🐊',label:'crocodile', bel:'кракадзіл',  audio:'crocodile'},
      {type:'emoji',display:'🐬',label:'dolphin',   bel:'дэльфін',    audio:'dolphin'  },
      {type:'emoji',display:'🐝',label:'bee',       bel:'пчала',      audio:'bee'      },
      {type:'emoji',display:'🦋',label:'butterfly', bel:'матыль',     audio:'butterfly'},
    ],

    // Numbers data
    numbersEN: {
      10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14:'fourteen', 15:'fifteen',
      16:'sixteen', 17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty',
      21:'twenty one', 22:'twenty two', 23:'twenty three', 24:'twenty four', 25:'twenty five',
      26:'twenty six', 27:'twenty seven', 28:'twenty eight', 29:'twenty nine', 30:'thirty',
      31:'thirty one', 32:'thirty two', 33:'thirty three', 34:'thirty four', 35:'thirty five',
      36:'thirty six', 37:'thirty seven', 38:'thirty eight', 39:'thirty nine', 40:'forty',
      41:'forty one', 42:'forty two', 43:'forty three', 44:'forty four', 45:'forty five',
      46:'forty six', 47:'forty seven', 48:'forty eight', 49:'forty nine', 50:'fifty',
      51:'fifty one', 52:'fifty two', 53:'fifty three', 54:'fifty four', 55:'fifty five',
      56:'fifty six', 57:'fifty seven', 58:'fifty eight', 59:'fifty nine', 60:'sixty',
      61:'sixty one', 62:'sixty two', 63:'sixty three', 64:'sixty four', 65:'sixty five',
      66:'sixty six', 67:'sixty seven', 68:'sixty eight', 69:'sixty nine', 70:'seventy',
      71:'seventy one', 72:'seventy two', 73:'seventy three', 74:'seventy four', 75:'seventy five',
      76:'seventy six', 77:'seventy seven', 78:'seventy eight', 79:'seventy nine', 80:'eighty',
      81:'eighty one', 82:'eighty two', 83:'eighty three', 84:'eighty four', 85:'eighty five',
      86:'eighty six', 87:'eighty seven', 88:'eighty eight', 89:'eighty nine', 90:'ninety',
      91:'ninety one', 92:'ninety two', 93:'ninety three', 94:'ninety four', 95:'ninety five',
      96:'ninety six', 97:'ninety seven', 98:'ninety eight', 99:'ninety nine', 100:'one hundred'
    },

    numbersBEL: {
      10:'дзесяць', 11:'адзінаццаць', 12:'дванаццаць', 13:'трынаццаць', 14:'чатырнаццаць',
      15:'пятнаццаць', 16:'шаснаццаць', 17:'сямнаццаць', 18:'васямнаццаць', 19:'дзевятнаццаць',
      20:'дваццаць', 21:'дваццаць адзін', 22:'дваццаць два', 23:'дваццаць тры',
      24:'дваццаць чатыры', 25:'дваццаць пяць', 26:'дваццаць шэсць', 27:'дваццаць сем',
      28:'дваццаць восем', 29:'дваццаць дзевяць', 30:'трыццаць', 31:'трыццаць адзін',
      32:'трыццаць два', 33:'трыццаць тры', 34:'трыццаць чатыры', 35:'трыццаць пяць',
      36:'трыццаць шэсць', 37:'трыццаць сем', 38:'трыццаць восем', 39:'трыццаць дзевяць',
      40:'сорак', 41:'сорак адзін', 42:'сорак два', 43:'сорак тры', 44:'сорак чатыры',
      45:'сорак пяць', 46:'сорак шэсць', 47:'сорак сем', 48:'сорак восем', 49:'сорак дзевяць',
      50:'пяцьдзясят', 51:'пяцьдзясят адзін', 52:'пяцьдзясят два', 53:'пяцьдзясят тры',
      54:'пяцьдзясят чатыры', 55:'пяцьдзясят пяць', 56:'пяцьдзясят шэсць', 57:'пяцьдзясят сем',
      58:'пяцьдзясят восем', 59:'пяцьдзясят дзевяць', 60:'шэсцьдзясят', 61:'шэсцьдзясят адзін',
      62:'шэсцьдзясят два', 63:'шэсцьдзясят тры', 64:'шэсцьдзясят чатыры', 65:'шэсцьдзясят пяць',
      66:'шэсцьдзясят шэсць', 67:'шэсцьдзясят сем', 68:'шэсцьдзясят восем', 69:'шэсцьдзясят дзевяць',
      70:'семдзесят', 71:'семдзесят адзін', 72:'семдзесят два', 73:'семдзесят тры',
      74:'семдзесят чатыры', 75:'семдзесят пяць', 76:'семдзесят шэсць', 77:'семдзесят сем',
      78:'семдзесят восем', 79:'семдзесят дзевяць', 80:'васямдзесят', 81:'васямдзесят адзін',
      82:'васямдзесят два', 83:'васямдзесят тры', 84:'васямдзесят чатыры', 85:'васямдзесят пяць',
      86:'васямдзесят шэсць', 87:'васямдзесят сем', 88:'васямдзесят восем', 89:'васямдзесят дзевяць',
      90:'дзевяноста', 91:'дзевяноста адзін', 92:'дзевяноста два', 93:'дзевяноста тры',
      94:'дзевяноста чатыры', 95:'дзевяноста пяць', 96:'дзевяноста шэсць', 97:'дзевяноста сем',
      98:'дзевяноста восем', 99:'дзевяноста дзевяць', 100:'сто'
    },

    shapes: [
      {type:'emoji',display:'🔵',label:'circle',bel:'круг',audio:'circle'},
      {type:'emoji',display:'🔺',label:'triangle',bel:'трыкутнік',audio:'triangle'},
      {type:'emoji',display:'⬜',label:'square',bel:'квадрат',audio:'square'},
      {type:'emoji',display:'⭐',label:'star',bel:'зорка',audio:'star'},
      {type:'emoji',display:'❤️',label:'heart',bel:'сэрца',audio:'heart'},
      {type:'emoji',display:'🔸',label:'diamond',bel:'дыямент',audio:'diamond'},
      {type:'emoji',display:'🔴',label:'oval',bel:'авал',audio:'oval'}
    ]
  };
}(typeof window !== 'undefined' ? window : this));