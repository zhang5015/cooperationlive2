<!DOCTYPE html> 
<head> 
<meta charset="UTF-8" /> 
<title>jQuery下拉收缩特效</title> 
<script type="text/javascript" src="/js/jquery-1.4.2.min.js"></script> 
<script type="text/javascript"> 
$(document).ready(function(){ 
$(".btn-slide").click(function(){ 
$("#panel").slideUp(); //slideToggle("slow"); 
$(this).toggleClass("active"); return false; 
}); 
}); 
</script> 
<style type="text/css"> 
body { margin: 0 auto; padding: 0; width: 570px; font: 75%/120% Arial, Helvetica, sans-serif; } 
a:focus { outline: none; } 
#panel { background: #69C7F7; height: 200px; display: none; } 
.slide { margin: 0; padding: 0; border-top: solid 4px #F27613; } 
.btn-slide { background: #F27613 url(http://files.jb51.net/file_images/article/201212/20121225165932118.gif) no-repeat right -50px;; text-align: center; width: 144px; height: 31px; padding: 10px 10px 0 0; margin: 0 auto; display: block; font: bold 120%/100% Arial, Helvetica, sans-serif; color: #fff; text-decoration: none; } 
.active { background-position: right 12px; } 
</style> 
<link rel="stylesheet" type="text/css" media="screen" href="/css/font-awesome.min.css" />
</head> 
<body> 
<h1>演示不了 请刷新下</h1> 
<div style="display: block;" id="panel"> 
<!-- you can put content here --> 
</div> 
<p class="slide"><a href="javascript:;" class="btn-slide active">点击试试</a></p> 



<div class="webTopBox" id="webTopBox">
<div class="webTop mobiTipsStyle" id="webTop">

<div class="navbar navBaseIcon" id="navbar">
<div class="navbarList" id="navbarList">
<div class="itemSep" id="itemSep_3"></div>
<div class="navItem navItem_3 itemSelected icon-navItem" id="navItem_3">
<a id="navbar_3" href="http://m.cooperationlive.com" _colid="3"><span
	class="fa fa-home before"></span><span class="navItemName">首页</span></a>
</div>
<div class="itemSep" id="itemSep_106"></div>
<div class="navItem navItem_106	icon-navItem" id="navItem_106"><a
	id="navbar_106" href="http://planning.cooperationlive.com" _colid="106"><span
	class="fa fa-pencil before"></span><span class="navItemName">品牌策划</span></a>
</div>
<div class="itemSep" id="itemSep_107"></div>
<div class="navItem navItem_107	icon-navItem" id="navItem_107"><a
	id="navbar_107" href="http://media.cooperationlive.com" _colid="107"><span
	class="fa fa-cloud before"></span><span class="navItemName">媒体资源</span></a>
</div>
<div class="itemSep" id="itemSep_108"1=""></div>
<div class="navItem navItem_108	icon-navItem" id="navItem_108"><a
	id="navbar_108" href="http://m.cooperationlive.com/about.php"
	_colid="108"><span class="fa fa-user before"></span><span
	class="navItemName">关于我们</span></a></div>

<div class="itemSep" id="itemSep_109"></div>
<div class="navItem navItem_109	icon-navItem" id="navItem_109"><a
	id="navbar_109" href="http://m.cooperationlive.com/notices"
	_colid="109"><span class="fa fa-newspaper-o before"></span><span
	class="navItemName">新闻动态</span></a></div>
<div class="itemSep" id="itemSep_110"></div>
<div class="navItem navItem_110	icon-navItem" id="navItem_110"><a
	id="navbar_110" href="http://m.cooperationlive.com/contract.php"
	_colid="110"><span class="fa fa-phone before"></span><span
	class="navItemName">联系我们</span></a></div>
<div class="itemSep" id="itemSep_9"></div>
<div class="navItem navItem_9	icon-navItem" id="navItem_9"><a
	id="navbar_9" href="http://m.cooperationlive.com/message.php"
	_colid="9"><span class="fa fa-commenting before"></span><span
	class="navItemName">留言板</span></a></div>
</div>
<div class="navLeft icon-navLeft"></div>
<div class="navRight icon-navRight"></div>
</div>
</div>
</div>

<div class="webHeaderBox mobiTipsStyle" id="webHeaderBox">
<div class="navButton" id="navButton">
<div class="navButtonPanel"></div>
<div class="menuNav">
<a href="javascript:;" class= "fa fa-bars before fa-2x" id= "menu"></a>
</div>
</div>
<div class="headerSiteMaskWhiteBg" id="headerWhiteBg"></div>
<div class="headerSiteMaskBg" id="headerBg"></div>
<div class="webHeader webHeaderBg " id="webHeader">
<div class="header-forLogo header " id="header" style="padding: 0px;">
<span class="pageLogo" id="pageLogo" style="display: none; visibility: hidden;" ph="160" pw="160" sid="0">
<a href="http://m.cooperationlive.com/">
<div class="logoImg " id="pageLogoImg" style="background-position: center; background-image: url(&quot;images/no-pic.jpg&quot;); background-repeat: no-repeat; background-size: contain;"></div>
</a>
</span>
<span class="pageTitle" id="pageTitle">
<h1 style="font-size: inherit; font-weight: normal; display: inline-block;">Cooperation Live</h1>

</span></div>
</div>
</div>
</body> 
</html> 