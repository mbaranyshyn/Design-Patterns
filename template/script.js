
let templateString = 'Hello, {{city}} {{age}}! #{{name}}';

let user1 = {id:1, name:'john', age:123, city:'kyiv'};
let user2 = {id:2, name:'alex', age:55, city:'lviv'};

let box = document.getElementById('box');

let compile  = function (template) {
    return function (obj) {
       const addUser = document.createElement('h2');
        addUser.innerHTML += template

            .replace( /{{name}}/g, obj.name ).replace( /{{age}}/g, obj.age ).replace( /{{city}}/g, obj.city )
        
        box.appendChild(addUser);
    };
};

let template = compile(templateString);


template(user1);
template(user2);

