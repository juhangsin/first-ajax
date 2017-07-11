document.addEventListener("DOMContentLoaded", function() {

	var ajaxRequest = document.getElementById( 'ajax_request' );
	var toPingPong  = document.getElementById( 'to_ping_pong');
	var toCount     = document.getElementById( 'to_count' );
	var toTime      = document.getElementById( 'to_time' );
	var toACar      = document.getElementById( 'to_a_car' );


	ajaxRequest.addEventListener( 'click', function() {
		console.log( 'CLICKED AJAX REQUEST BUTTON');

	$.ajax( {
		url: 'http://first-ajax-api.herokuapp.com/',
		method: 'GET',
		data: {},
		dataType: 'text',
	});
	})


	toPingPong.addEventListener( 'click', function () {
		console.log( 'CLICKED AJAX REQUEST TO PING/PONG');

		$.ajax( {
			url: 'http://first-ajax-api.herokuapp.com/ping',
			method: 'GET',
			dataType: 'text',
		}).done( function(responseData) {
			console.log('PINGPONG RESONPSE DATA');
			console.log(responseData);
			var element = document.createElement('div');
			element.innerHTML = responseData;
			document.querySelector( '#step3456' ).append( element );
		}).fail( function( jqXHR, textStatus, errorThrown ) {
			console.log( 'DIDN\'T WORK ');
			console.log( textStatus, errorThrown );
			var fail = document.createElement('div');
			fail.innerHTML = "WE COULDN'T MAKE IT WORK, COME BACK LATER";
			document.querySelector( '#step3456' ).append( fail);
		}).always( function() {
			console.log( 'alvvayssss' );
			var always = document.createElement('div');
			always.innerHTML = "Hey the request finished!";
			document.querySelector( '#step3456' ).append(always);
		});
	});


	toCount.addEventListener( 'click', function () {
		console.log( 'Run AJAX Request to Count');

		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/count',
			method: 'GET',
			dataType: 'text',
		}).done ( function(responseData) {
			console.log('Count responseData');
			console.log(responseData);
			var element = document.createElement('div');
			element.innerHTML = responseData;
			document.querySelector( '#step7' ).append( element );
		})
	});


	toTime.addEventListener( 'click', function () {
		console.log( 'Running AJAX Request to Time' );

		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/time',
			method: 'GET',
			dataType: 'text',
			data: {
				timezone: 'America/Mexico_City',
			}
			 }).done (function(responseData) {
			console.log('Count responseData');
			console.log(responseData);
			var element = document.createElement('div');
			element.innerHTML = responseData;
			document.querySelector( '#step8' ).append( element );
		})
	})

	toACar.addEventListener( 'click', function () {
		console.log( 'Run AJAX Request to A Car' );

		$.ajax({
			url: 'http://first-ajax-api.herokuapp.com/a_car',
			method: 'GET',
			dataType: 'html',
		}).done (function(responseData) {
			console.log( 'Count responseData' );
			console.log( responseData );
			var unorderedList = document.createElement( 'ul' );
			unorderedList.innerHTML = responseData;
			document.querySelector( '#step9' ).append( unorderedList );
		})
	})

});
