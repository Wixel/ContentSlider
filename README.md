A simple jQuery based content slider that doesn't require you to add cryptic css structures or javascript to your projects. If all you want it a content slider that can slide any html content, then this is a perfect fit. 

#  Usage Examples:

1) Include jQuery & the plugin in your source code

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/js/jquery.wixel.content_slider.min.js"></script>
```

2) Set up your scrolling HTML content:

```html
<section>
	<a href="#" class="previous-slide" title="Previous Slide">Previous Slide</a>

	<div class="slide-container">
		<!-- Slides -->
		<div class="slide-item">
			<h1>
				Qui ratione voluptatem sequi nesciunt. Neque porro quisquam 1
			</h1>
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
			</p>
		</div>

		<div class="slide-item">
			<h1>
				Qui ratione voluptatem sequi nesciunt. Neque porro quisquam 2
			</h1>
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
			</p>
		</div>			

		<div class="slide-item">
			<h1>
				Qui ratione voluptatem sequi nesciunt. Neque porro quisquam 3
			</h1>
			<p>
				At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
			</p>
		</div>			
		<!-- Slides -->	
	</div>		

	<a href="#" class="next-slide" title="Next Slide">Next Slide</a>			
</section>
```

The only thing you need to keep in mind is that you need to add the `slide-item` class to anything that you want to included in the slide. These should usually all be the same width and height as well as be block elements (like divs).
