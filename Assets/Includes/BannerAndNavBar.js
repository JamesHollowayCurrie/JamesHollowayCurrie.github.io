
var lightProfile;

function toggleLightDark()
{
	var items = document.getElementsByClassName("portfolio");
	var headings = document.getElementsByClassName("plainHeading");
	//alert(lightProfile + " " + items.length);
	var shortTrans = "0.5s ease all";
	var longTrans = "2.0s ease all";
	if(lightProfile)
	{
		for(var i = 0; i < items.length; i++)
		{
			items[i].style.color = "#000";
			items[i].style.transition = longTrans;
			if(items[i].nodeName == "IMG" || items[i].nodeName == "VIDEO")
				items[i].style.boxShadow = "0 0 10px grey";
		}
		for(var i = 0; i < headings.length; i++)
		{
			headings[i].style.color = "black";
			headings[i].style.transition = longTrans;
		}
		document.getElementById("content").style.background = "white";
		document.getElementById("content").style.transition = longTrans;
		document.getElementById("toggle").style.boxShadow = "0 0 6px 12px black";
		document.getElementById("toggle").style.transition = shortTrans;
	}
	else
	{
		for(var i = 0; i < items.length; i++)
		{
			items[i].style.color = "#ccc";
			items[i].style.transition = longTrans;
			if(items[i].nodeName == "IMG" || items[i].nodeName == "VIDEO")
				items[i].style.boxShadow = "0 0 0 grey";
		}
		for(var i = 0; i < headings.length; i++)
		{
			headings[i].style.color = "#ccc";
			headings[i].style.transition = longTrans;
		}
		document.getElementById("content").style.background = "#222";
		document.getElementById("content").style.transition = longTrans;
		document.getElementById("toggle").style.boxShadow = "0 0 6px 12px #0f0";
		document.getElementById("toggle").style.transition = shortTrans;
	}
	//alert(document.getElementById("content").nodeName);
}

document.write('<div id="banner">');
document.write('<h1>');
document.write('<a id="logo" href="index.html"><img src="Assets/Media/Images/logo.png" alt="JHC Media" title="JHC Media" style="width: 328px; height: 69px;"/></a></h1>');
document.write('<h2 id="tagline"><img src="Assets/Media/Images/tagline.png" alt="C# C++ Game - Engine - Graphics Programmer" title="C# C++ Game - Engine - Graphics Programmer" style="width: 195px; height: 80px;"/></h2>');
document.write('</div>');

document.write('<ul id="navBar">');
if(document.title == "JHC Media - Games")
	document.write('<li id="Home"><a href="index.html" class ="current">Games</a></li>');
else
	document.write('<li id="Home"><a href="index.html" class ="">Games</a></li>');

if(document.title == "JHC Media - About")
	document.write('<li><a href="about.html" class="current">About</a></li>');
else
	document.write('<li><a href="about.html" class ="">About</a></li>');

document.write('<li><a href="Holloway-Currie,_James_Resume.pdf" class ="">Resume</a></li>');

document.write('<li><a href="http://www.linkedin.com/pub/james-holloway-currie/89/7b9/760?domainCountryName=&csrfToken=ajax%3A4999612905356199504" class ="" style="margin: 0; padding: 4px 12px;"><img src="Assets/Media/Images/in.png" alt="LinkedIn" title="LinkedIn" style="width: 30px; height: 30px; vertical-align: top; padding-top: 2px;"/></a></li>');

document.write('<li><a href="https://twitter.com/MediaJhc" class ="" style="margin: 0; padding: 4px 12px;"><img src="Assets/Media/Images/twitter.png" alt="Twitter@MediaJHC" title="Twitter@MediaJHC" style="width: 28px; height: 28px; vertical-align: top; padding-top: 3px;"/></a></li>');

document.write('<li title="Toggle Light/Dark View"><a onclick="lightProfile = !lightProfile; toggleLightDark();"><img id="toggle"  src="Assets/Media/Images/lightToggle.png" style="width: 1px; height 1px; vertical-align: top; margin: 0 5px; margin-top: 17px; border-radius: 32px; box-shadow: 0 0 6px 12px #0f0;"/></a></li>');

document.write('</ul>');