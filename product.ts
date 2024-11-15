/* Start task 4 */

interface Product {
    name : string;
    price : number;
}
function fun1(products : Product[]) : number {
    return products.reduce( (prev, Product) => prev + Product.price ,0)

}

/* end task 4 */ 


/* Start task 5 */

function check (email : string) : boolean {
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(email);
  }
//Example 
console.log(check("username@domain.com"));
console.log(check("username1-1@domain3.com")) ;
 /* End task 5 */

 /* necessary instructions on how to run it:
 write on terminal : tsc product.ts
 node product.js
 */