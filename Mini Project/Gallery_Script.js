function LoadGallery()
{
    var ImageCount=35;
    var content="";
    for(var x=1;x<=ImageCount;x++)
    {
        content+='<img class="Item" onclick="Clicked(this)" src="Gallery/Img ('+x+').jpg"/>';
    }
    document.getElementById('Gallery').innerHTML=content;
    document.getElementById('Preview_Image_View').style.display="none";
}

function Clicked(x)
{
    document.getElementById('Gallery').style.display="none";
    document.getElementById('Preview_Image_View').style.display="block";
    document.getElementById('Preview_Image').src=x.src;
}

function ClosePreview()
{
    document.getElementById('Preview_Image_View').style.display="none";
    document.getElementById('Gallery').style.display="block";
}