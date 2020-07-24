//***********************task1*********************

// function testThrow(exception){
   
//    try{
//             throw exception
//    }catch(error){
//             console.log("Caught " + error)
//    }
// }

// testThrow(5);

//***********************task2*********************

// function calcRectangleArea(a,b){
//     let area = a*b; 
// 
//     if(isNaN(a) || isNaN(b)){
//         try{
//             throw 'Wrong input';
//         }catch(exception){
//             console.error(exception);
//         }
//     }else{
//         console.log(area)
//     }
// }

// calcRectangleArea(2, "q");

//***********************task3*********************

// function checkAge() {
//         let userAge = prompt("Enter your age:");
//         if (userAge.charAt()===' ') {
//             throw new Error("The field is empty! Please enter your age");
//         }else if(isNaN(userAge)){
//             throw new Error("Value is not a number");
//         }else if(userAge<14){
//             throw new Error("you are too young...");
//         }else if(userAge>=14){
//             console.log("Welcome!!!!!");
//         }     
//     }

// try {
//     let result = checkAge();
//     console.log(result);
// } catch (exception) {
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
// }



//***********************task4*********************

// class MountException{
//     constructor(message){
//         this.message = message;
//         this.name = 'MonthException';
//     }

// };
// function showMonthName(month){
    
//     if(month>=1 && month<=12){
//         switch(month){
//             case 1: console.log("January");
//             break;
//             case 2: console.log("February");
//             break;
//             case 3: console.log("March");
//             break;
//             case 4: console.log("April");
//             break;
//             case 5: console.log("May");
//             break;
//             case 6: console.log("June");
//             break;
//             case 7: console.log("July");
//             break;
//             case 8: console.log("August");
//             break;
//             case 9: console.log("September");
//             break;
//             case 10: console.log("October");
//             break;
//             case 11: console.log("November");
//             break;
//             case 12: console.log("December");
//             break;
//         } 
//     }else if (month>12 || month<1){
//         try{
//             throw new MountException("Incorrect month number");
//         }catch(exception){
//             console.log(exception)
//         }   
//     }else if (isNaN(month)){
//         try{
//             throw new MountException("Value is not a number");   
//         }catch(exception){
//             console.log(exception)
//         }    
//     }
// }

// showMonthName(0);    
// showMonthName(1);    
// showMonthName(2);    
// showMonthName("q");    

// ***********************task5*********************

// function showUser(id){
//     let user = {id};

//     if(id<0){
//         try {
//             throw "Id can't be negative!!! " + id;
//         } catch (exception) {
//             console.log(exception);
//         }
//     }else{
//         return user;
//     }
// }

// function showUsers(ids){
//     let users = [];
//     for (let i = 0; i < ids.length; i++) {
//         let chacked = showUser(ids[i]);
//         if(ids[i]>=0){
//             users.push(chacked); 
//         }      
//     }
//     console.log(users);
// }
// console.log(showUsers([7, -12, 44, 22, -1, -2]));

