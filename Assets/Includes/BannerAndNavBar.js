
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
	document.write('<li><a href="about.html" class ="current">About</a></li>');
else
	document.write('<li><a href="about.html" class ="">About</a></li>');

document.write('<li><a href="Holloway-Currie,_James_Resume.pdf" class ="">Resume</a></li>');

document.write('<li><a href="http://www.linkedin.com/pub/james-holloway-currie/89/7b9/760?domainCountryName=&csrfToken=ajax%3A4999612905356199504" class ="" style="margin: 0; padding: 4px 16px;"><img src="Assets/Media/Images/in.png" alt="LinkedIn" title="LinkedIn" style="width: 30px; height: 30px; vertical-align: top; padding-top: 2px;"/></a></li>');
document.write('</ul>');