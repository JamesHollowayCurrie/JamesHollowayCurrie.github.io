
var lightProfile;

function toggleLightDark()
{
	var items = document.getElementsByClassName("portfolio");
	var headings = document.getElementsByClassName("plainHeading");
	//alert(lightProfile + " " + items.length);
	if(lightProfile)
	{
		for(var i = 0; i < items.length; i++)
		{
			items[i].style.color = "#000";
			if(items[i].nodeName == "IMG" || items[i].nodeName == "VIDEO")
				items[i].style.boxShadow = "0 0 10px grey";
		}
		for(var i = 0; i < headings.length; i++)
			headings[i].style.color = "black";
		document.getElementById("content").style.background = "white";
		document.getElementById("toggle").style.boxShadow = "0 0 4px 8px black";
	}
	else
	{
		for(var i = 0; i < items.length; i++)
		{
			items[i].style.color = "#ccc";
			if(items[i].nodeName == "IMG" || items[i].nodeName == "VIDEO")
				items[i].style.boxShadow = "0 0 0 grey";
		}
		for(var i = 0; i < headings.length; i++)
			headings[i].style.color = "#ccc";
		document.getElementById("content").style.background = "#222";
		document.getElementById("toggle").style.boxShadow = "0 0 4px 8px #0f0";
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

document.write('<li><a onclick="lightProfile = !lightProfile; toggleLightDark();"><img id="toggle"  src="Assets/Media/Images/thunderbowl-icon.png" alt="Toggle Light/Dark view" title="Toggle Light/Dark View" style="width: 14px; height 14px; vertical-align: top; margin-top: 11px; border-radius: 32px; box-shadow: 0 0 4px 8px #0f0;"/></a></li>');

document.write('</ul>');