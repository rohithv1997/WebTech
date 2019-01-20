
var SelectionColor="rgb(254, 254, 254)";

function Loaded()
{
    HomeClick();
}

function openInNewTab(url) 
{
  var win = window.open(url, '_blank');
  win.focus();
}

function OpenNavBar()
{
    var sideBar=document.getElementById("Nav_Bar");    
    if(sideBar.style.left=="-15%" || sideBar.style.left=="")
    {
        sideBar.style.left=0;
    }
    else
    {
        sideBar.style.left="-15%";
    }
}

function ResetNavButtons()
{
    for(var x=1;x<=4;x++)
    {
        var btn=document.getElementById("Nav_Button_"+x);
        if(btn.style.color==SelectionColor)
            continue;
        btn.style.backgroundColor="rgba(25, 25, 25, 0)";
    }
}

function ResetButtons()
{
    for(var x=1;x<=4;x++)
    {
        var btn=document.getElementById("Menu_Button_"+x);
        btn.style.borderBottomWidth="0px";
        btn.style.color="#ffffff";
        btn=document.getElementById("Nav_Button_"+x);
        btn.style.color="#ffffff";
    }
    ResetNavButtons();
}

function HomeClick()
{
    var btn=document.getElementById("Menu_Button_1")
    if(btn.style.color==SelectionColor)
        return;
    ResetButtons();;
    btn.style.borderBottomWidth="3px";
    btn.style.color=SelectionColor;
    btn=document.getElementById("Nav_Button_1");
    btn.style.color=SelectionColor;
    btn.style.backgroundColor="rgba(25, 25, 25, 0.5)";
    document.getElementById('Main_Content').src="Home.html"; 
}

function GalleryClick()
{
    var btn=document.getElementById("Menu_Button_2")
    if(btn.style.color==SelectionColor)
        return;
    ResetButtons();
    btn.style.borderBottomWidth="3px";
    btn.style.color=SelectionColor;
    btn=document.getElementById("Nav_Button_2");
    btn.style.color=SelectionColor;
    btn.style.backgroundColor="rgba(25, 25, 25, 0.5)";
    document.getElementById('Main_Content').src="Gallery.html";
}

function AboutClick()
{
    var btn=document.getElementById("Menu_Button_3")
    if(btn.style.color==SelectionColor)
        return;
    document
    ResetButtons();
    btn.style.borderBottomWidth="3px";
    btn.style.color=SelectionColor;
    btn=document.getElementById("Nav_Button_3");
    btn.style.color=SelectionColor;
    btn.style.backgroundColor="rgba(25, 25, 25, 0.5)";
    document.getElementById('Main_Content').src="About.html";
}

function FeedbackClick()
{
    var btn=document.getElementById("Menu_Button_4")
    if(btn.style.color==SelectionColor)
        return;
    ResetButtons();
    btn.style.borderBottomWidth="3px";
    btn.style.color=SelectionColor;
    btn=document.getElementById("Nav_Button_4");
    btn.style.color=SelectionColor;
    btn.style.backgroundColor="rgba(25, 25, 25, 0.5)";
    document.getElementById('Main_Content').src="Feedback.html";
}
 function NavMouseOver(x)
 {
    ResetNavButtons();
    if(x=='null')
        return;
    document.getElementById(x).style.backgroundColor="rgba(25, 25, 25, 0.4)";
 }