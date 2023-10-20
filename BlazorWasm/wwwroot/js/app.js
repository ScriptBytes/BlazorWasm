var dotnet;

var InitDotnet = (dotnetRef) => {
    dotnet = dotnetRef;
}

var HelloWorld = () => {
    console.log('Hello from Javascript!');
}

var HelloName = (name) => {
    console.log('Hello ' + name + ' from Javascript!');
}

var CallDotnet = () => {
    dotnet.invokeMethodAsync('DotnetFromJs');
}

var CallDotnetName = () => {
    dotnet.invokeMethodAsync('DotnetFromJsParams', 'Billy');
}