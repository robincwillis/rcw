---
layout: post
title: "Social Icons"
tags: social icons css3
published: true
description: The bit of markup and css I always reuse for social icons.
---

Social icons are pretty much a ubiquitous component on any site or even post. This is how I like to do them. I use anchors with overlapping elements with alternate states on the same svg sprite and then transition the opacity property between them. This is a neat trick for getting a css3 transitions working for image backgrounds.

You don't have to use svg, you could use a png with 2x fallback for retina, but come on lets all get down with vector everything and kiss support for IE8 goodbye. Another way would be to package these into a font-face and then just transition the color. I haven't gotten around to that yet. Click Read More to checkout the code and demo.

<!--more-->

the HTML

~~~~~html

<ul class="list-social">
	<li class="social-item">
		<a class="social-hover facebook-hover" href=""></a>
		<a class="social facebook" href="" target="_blank"></a>
	</li>
	<li class="social-item">
		<a class="social-hover twitter-hover" href="" target="_blank"></a>
		<a class="social twitter" href="" target="_blank"></a>
	</li>
	<li class="social-item">
		<a class="social-hover pinterest-hover" href="" target="_blank"></a>
		<a class="social pinterest" href="" target="_blank"></a>
	</li>
	<li class="social-item">
		<a class="social-hover instagram-hover" href="" target="_blank"></a>
		<a class="social instagram" href="" target="_blank"></a>
	</li>
</ul>

~~~~~

the CSS

~~~~~css

	.list-social{
		list-style: none;
		padding:0;

	}

	li.social-item{
		display: inline-block;
		width: 30px;
		height:30px;
		margin-right:8px;
		position:relative;
	}

	li.social-item:hover a.social{
		opacity: 0;
	}

	li.social-item:hover a.social-hover{
		opacity: 1;
	}

	a.social, a.social-hover{
		position: absolute;
		top:0;
		left:0;
		display: block;
		width:30px;
		height:30px;
		-webkit-transition: opacity 200ms ease-in-out;
    -moz-transition: opacity 200ms ease-in-out;
    -o-transition: opacity 200ms ease-in-out;
    transition: opacity 200ms ease-in-out;
	}

	a.social-hover{
		opacity:0;
	}

	.instagram{
		background:url('instagram.svg') center top no-repeat;
	}
	.facebook{
		background:url('facebook.svg') center top no-repeat;
	}
	.twitter{
		background:url('twitter.svg') center top no-repeat;
	}
	.pinterest{
		background:url('pinterest.svg') center top no-repeat;
	}
	.instagram-hover{
		background:url('instagram.svg') center bottom no-repeat;
	}
	.facebook-hover{
		background:url('facebook.svg') center bottom no-repeat;
	}
	.twitter-hover{
		background:url('twitter.svg') center bottom no-repeat;
	}
	.pinterest-hover{
		background:url('pinterest.svg') center bottom no-repeat;
	}

~~~~~

See it in [Action]({{site.data.s3.demo}}social-icons/).