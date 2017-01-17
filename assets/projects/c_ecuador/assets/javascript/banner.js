var imgArray = new Array (4);
var index = 0;

function cycle()
{
    document.banner.src=imgArray(index).src;
    index++;
    if (index>3)
    {
        index=0;
    }
    setTimeout("cycle()",2000);
    return;
}

function startup()
{
    imgArray[0] = new Image;
    imgArray[0].src = "vacation.swf";
    imgArray[1] = new Image;
    imgArray[1].src = "vacation.swf";
    imgArray[2] = new Image;
    imgArray[2].src = "vacation.swf";
    imgArray[3] = new Image;
    imgArray[3].src = "vacation.swf";
    cycle();
    return;
}