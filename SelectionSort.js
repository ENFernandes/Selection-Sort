var array = [9, 4, 2, 5, 7, 4, 12, 21, 11, 42, 57, 31];
var aux, x,y;
var cont=0;
//console.log(array);
function ordenar(x, y) {
    if (cont < array.length && y < array.length) {
        if (array[x] < array[y] && y <= array.length) {
            y = y + 1;
            console.log(array);
            cont++;
            ordenar(x, y);
        }
        else {
            aux = array[x];
            array[x] = array[y];
            array[y] = aux;
            y = y + 1;
            console.log(array);
            cont++;
            ordenar(x, y);
        }
    }
    else
    {
        if(x<=array.length)
        {
        cont=0;
        x=x+1;
        y=x;
        ordenar(x, y);
        }
        else console.log(`boa jovem o Array organizado é ${array}`);
    }
}
ordenar(0, 0);