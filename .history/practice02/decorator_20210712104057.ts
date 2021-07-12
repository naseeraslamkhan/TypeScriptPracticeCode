console.log('Hello I am here decorator file' );
function component(target)
{
return (target: any) => {console.log("@:",target);}
}

@component