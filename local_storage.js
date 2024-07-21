
let btn = document.querySelector('button');

btn.addEventListener('click' , login);


let nameList = ['ali' , 'sara', 'taghi', 'naghi', 'naser'];

let passList = ['12445' , '85419', '77756', '63549', '12589'];


localStorage.setItem('username' , JSON.stringify(nameList));
localStorage.setItem('password' , JSON.stringify(passList));



function login () {
    // let users = JSON.parse(localStorage.getItem('username'));
    
    // users.forEach(item => {
    //     let name = document.createElement('p');
    //     name.innerHTML = item;
    //     document.body.appendChild(name);
    // });



    let passwords = JSON.parse(localStorage.getItem('password'));

    let myul = document.createElement('ul'); 

    passwords.forEach(item => {
        //we can define one ul before foreach to optimize the code and prevent to repeat ul every time for each otem in the array
        // let myul = document.createElement('ul'); 
        let myli = document.createElement('li');
        myli.innerHTML = item;
        myul.appendChild(myli);
    });
    document.body.appendChild(myul); // it is like creating ul

}
