// Calculate how many ../ needed for relative file paths
var pos = window.location.href.lastIndexOf("github.io")
var str = window.location.href.slice(pos+10);
var countOfSlash = 0;
for (i=0;i<str.length;i++){if (str.slice(i,i+1) == "/"){countOfSlash++}}
var prefix = "../".repeat(countOfSlash)
var parent = document.getElementById("wrapper");

// Top bar
var topbar = document.createElement("div");
topbar.id = "topbar";
topbar.classList.add("bg-blue2");

// Words "Delta Line Project"
var title = document.createElement("p");
title.id = "topbar-title";
title.innerHTML = "Delta Line Project";
topbar.appendChild(title);

// Top bar buttons
var data = [["develop.html","Development"],["network","Network"],["train.html","Trains"],["index.html","Home"]]
data.forEach(function(value){
    var link = document.createElement("a");
    link.innerHTML = value[1];
    link.href = prefix + value[0];
    topbar.appendChild(link);
})
parent.appendChild(topbar);

// Meta tag
var meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0";
document.head.appendChild(meta);

// Default stylesheet
var style = document.createElement("link");
style.href = prefix + "style.css";
style.rel = "stylesheet";
document.head.appendChild(style);

// Footer
var footer = document.createElement("div");
footer.id = "footer";
footer.classList.add("bg-blue1");
document.body.appendChild(footer);

// Footer decoration lines
var lineList = [["80%","bg-green2"],["60%","bg-orange"],["40%","bg-blue2"],["20%","bg-grey"],["0","bg-black"]];
lineList.forEach(function(value){
    var line = document.createElement("div");
    line.style.left = value[0];
    line.classList.add("line",value[1]);
    footer.appendChild(line);
})

// Footer text
var text = document.createElement("p");
text.id = "footer-text";
text.classList.add("white");
text.innerHTML = 'All rights reserved<br><span style="font-size:15px">Last updated on 25 Aug 2021</span>';
footer.appendChild(text);

// Footer links
var footerLinks = document.createElement("div");
footerLinks.id = "footer-links";
footer.appendChild(footerLinks);
var footerLinkList = [
    ["https://www.roblox.com/games/4765954059","Play the game now"],
    ["https://www.roblox.com/groups/4401434","Our Roblox group"],
    ["https://www.facebook.com/groups/142570077449734","Our Facebook page"],
    ["https://discord.gg/AxJtf2d","Our Discord server"],
    ["https://delta-line-project.fandom.com","Our wiki in Fandom"],
    ["https://roblox.fandom.com/zh/wiki/Delta_Line_Project","Game page in the Chinese Roblox Wiki"],
]
footerLinkList.forEach(function(value){
    var link = document.createElement("a");
    link.target = "_blank";
    link.href = value[0];
    link.innerHTML = value[1];
    footerLinks.appendChild(link);
})