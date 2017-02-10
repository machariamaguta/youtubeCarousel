		// Only editable line
		// Enter video IDs separated by commas ,
		var video=['VtZ--CpppG0','q_7fy-UiHfM','_NX7FNdWz0E'];
		//Don't edit anyline below this
		var x=0;
		var prefix='https://www.youtube.com/embed/';
		var suffix='?autoplay=1&rel=0&amp;showinfo=0';
		
		var count=video.length-1;
		

		function page()
		{
			var windowHeight=window.innerHeight;
			var width=window.innerWidth;
			var height=(9/16)*width;
			document.getElementById('frame').style.height=height+"px";
			document.getElementById('frame').style.width=width+"px";
			document.getElementById('frame').style.marginTop=((windowHeight-height)/2)+"px";
		}
		function prev()
		{
			if(x==0)
			{
				x=count;
			}
			else
			{
				x=x-1;
			}
			frame();
		}
		function next()
		{
			if(x==count)
			{
				x=0;
			}
			else
			{
				x=x+1;
			}
			frame();
		}
		function frame()
		{
			document.getElementById('frame').src=prefix+video[x]+suffix;
		}
		function show()
		{
			document.getElementById('prev').style.visibility="visible";
			document.getElementById('next').style.visibility="visible";
		}
		function hide()
		{
			document.getElementById('next').style.visibility='hidden';
			document.getElementById('prev').style.visibility='hidden';
		}
		
		window.onload=function(){frame();page();}
		window.onresize=function(){page();}