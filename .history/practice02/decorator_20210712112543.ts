console.log("Hello I am here decorator file");
function helper(constructor:Function)
{
console.log("Mera bhai sb ki help krta bina kisi grz k");
console.log("Constructor of Sohaib class is :   ",constructor);
}
@helper
class Sohaib {
  name: string = "Meesna420";
  rollNo: string = "Prrosi of his crush";
  constructor() {
    console.log("By defualt chaalaak loomri");
  }
}
const bhai=new Sohaib();
console.log(bhai);