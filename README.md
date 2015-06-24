Entypo+
=======
This project is a fork of the original experimental script to automate the Entypo font building.
It replaces the original Makefile using font-builder with a Grunt configuration and fontforge. It also includes tags and a valid bower.json file, making it possible to use this library with build tools like Bower.

This project comes with two iconsets, the original Entypo-iconset that has been available for a while at the original Entypo Github project and the new Entypo+ iconset, containing a wide range of new icons (more than 400 to be exactly).
The reason why I'm keeping both iconsets is that the Entypo+ set does not contain all original icons, so to be completely compatible, I chose to support both sets.

Installation
------------
Installation is quite simple, you either download a release, or otherwise you can use Bower to install the package using:
```
bower install entypo-css-only
```

After downloading the package you can add the CSS files, either the unminified files:
```
<link rel="stylesheet" href="bower_components/entypo-css-only/dist/css/Entypo.css" />
<link rel="stylesheet" href="bower_components/entypo-css-only/dist/css/EntypoPlus.css" />
```

or the minified files:
```
<link rel="stylesheet" href="bower_components/entypo-css-only/dist/css/Entypo.min.css" />
<link rel="stylesheet" href="bower_components/entypo-css-only/dist/css/EntypoPlus.min.css" />
```

Usage
-----
Use the iconbrowser and find the icon you need. The class name is right next to it, and after obtaining the class name, all you need to do is to apply it to an element, for example:
```
<span class="icon-rocket"></span>
```

You can use it in all kind of elements, for example:
```
<button class="btn btn-primary">
    <span class="icon-launch"></span> Launch
</button>
```

or:
```
<p>
    This is some text with an icon. <span class="icon-launch"></span>
</p>
```
