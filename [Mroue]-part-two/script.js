var eventType = window.prompt("Enter the type of event:")
var tempFahr = window.prompt("Enter the current Temperature:")

if(eventType === "casual")
{
    if(tempFahr < 54)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a coat."
        document.write(result)
        console.log(result)
    }
    else if(tempFahr >= 54 && tempFahr <= 70)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and a jacket."
        document.write(result)
        console.log(result)
    }
    else if(tempFahr > 70)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear something comfy and no jacket."
        document.write(result)
        console.log(result)
    }
        
}
else if(eventType === "semi-formal")
{
    if(tempFahr < 54)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a coat."
        document.write(result)
        console.log(result)
    }
    else if(tempFahr >= 54 && tempFahr <= 70)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and a jacket."
        document.write(result)
        console.log(result)
    }
    else if(tempFahr > 70)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a polo and no jacket."
        document.write(result)
        console.log(result)
    }
}
else if(eventType === "formal")
{
    if(tempFahr < 54)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a coat."
        document.write(result)
        console.log(result)
    }
    else if(tempFahr >= 54 && tempFahr <= 70)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and a jacket."
        document.write(result)
        console.log(result)
    }
    else if(tempFahr > 70)
    {
        var result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear a suit and no jacket."
        document.write(result)
        console.log(result)
    }
}