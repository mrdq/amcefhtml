	var interval = setInterval(function() {
	  var imgs = $('.obrazokprezentacie');
	  var i, z;
	  for (const img of imgs) {
	    z = Number(img.getAttribute('z-index'));
	    console.log(z);
	    if (z == imgs.length) {
	      img.setAttribute("z-index", "1");
	      img.setAttribute("style", "z-index: 1");
	    } else {
	      img.setAttribute("z-index", (z + 1));
	      img.setAttribute("style", "z-index: " + (z + 1));
	    }
	  }
	}, 3000);
