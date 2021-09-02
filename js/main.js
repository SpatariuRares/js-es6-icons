const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];
const iconsContainer = document.getElementById('icons');
const select = document.getElementById('type');
let types=[];
let l=0;
types=getype(icons);

select.onchange = function(element){
    const filtered = FilterValues(icons,element.target.value);
    console.log(element.target.value)
    if(filtered.length!=0){
        print(filtered);
    }
    else{
        print(icons)
    }
}

colortype(icons);
print(icons);

function FilterValues(array,t) {
    let f=array.filter((element) => {
        if (element.type == t)
            return true;
        return false;
    });
    return f;
}

function print(array) {
    iconsContainer.innerHTML="";
    array.forEach((element) => {
        const {name,prefix,family} = element;
        iconsContainer.innerHTML+=`
                <div class="flex justify-center f-column align-center element ">
                    <i class="${family} ${prefix + name}" style="color:${element.color}"></i>
                    <p>${name.toUpperCase()}</p>
                </div>
                `
    });

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getype(array) {
    let typeicon=[];
    array.forEach((element) => {
         const {type} = element;
        if (!(typeicon.includes(type))) {
            typeicon.push(type)
    }
    })
    return typeicon;
}

function colortype(array){
    array.forEach((element) => {
        const {type} = element;
        let flag = true;
        for(let i = 0; i < types.length; i++) {
            if(types[i].type==type) {
                flag = false;
            }
        }
        if (flag) {
            types[l]={type,color:getRandomColor()}
            l++;
        }
        types.forEach((t) => {
            if(t.type==element.type){
                element.color = t.color;
            }
        });
    });
}