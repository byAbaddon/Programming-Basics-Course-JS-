function areaOfFigures(arg) {
  a = +arg[1]
  b = +arg[2]
  r = 0
     switch (arg[0]) {
       case 'square': r = Math.pow(a, 2)
        break; 
       case 'rectangle': r = a * b
        break; 
       case 'circle': r = a * a * Math.PI
        break;
       case 'triangle': r = a * b / 2
        break;
      }
     console.log(r.toFixed(3));
}

//areaOfFigures(['triangle', '4.5', '20'])
