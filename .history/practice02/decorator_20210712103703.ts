console.log('Hello I am here decorator file' );
function component(target)
{
console.log('@',target);
}

@component