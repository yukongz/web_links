window.onload=function()
{
  $fotos = $('#photos');

  $.getJSON('photos.json')
  .done( function(data){	  // SERVER RETURNS DATA
  //console.log(data);
    $.each(data, function(key, val) {                    // Add each rate
	console.log(val.expected);
	console.log(val.fname);
      $fig = $('<div>');
	  $fig.addClass('card');
	  $fig.css({'width':'300px', 'display':'inline-block'});
	  
      $fotos.append($fig);
	  
      $img = $('<img>');
      $img.attr('src', 'thumbs/sm_' + val.file);
	  $img.addClass('card-img-top');
	  $img.css("width", "100%");
	  
	  $cbody = $('<div>');
	  $cbody.addClass('card-body');
	  $fig.append($cbody);
		
      $fcap = $('<h4>');
	  $fcap.addClass('card-title');
      $fcap.text(val.fname + " " + val.lname);
	  $cbody.append($fcap);

	  $ctext = $('<p>');
	  $ctext.addClass('card-text');
	  $ctext.text("Class of " + val.expected);
	  $cbody.append($ctext);
	  
      $link = $('<a>');
	  $link.addClass('btn btn-info');
      $link.attr('href', val.url);
	  $link.text( 'Web Page');
	  $cbody.append($link);
	  	  
      $fig.append($img);
      $fig.append($cbody);
    });
  })
  .fail( function() {                                  // THERE IS AN ERROR
    $('#photos').text('Sorry, there are no photos at this time. Check back later.');   // Show error message
  })
}

