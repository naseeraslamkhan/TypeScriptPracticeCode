console.log("Hello I am here mixin file");
var Cheat= {
  Gooli:function()
  {
  return "Me apko unexpected heavy gooli krwaon ga";
  }
}
var Help= {
    Gooli:function()
    {
    return "Me apki help kron ga";
    }
  }
class Thanoos {
  trait: string;
  constructor(title: string) {
    this.trait = title;
  }
}
const x=SohaibSalmanMixin|ThanoosMixin(class
{

});
class MeraBhai extends SohaibSalman,Thanoos
{
helper:string;
constructor(h:tring)
{
super("Meesna");
this.helper=h;
}
}