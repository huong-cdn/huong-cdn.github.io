/**
 * Created by huongnx on 24/06/2016.
 */
jQuery(document).ready(function($) {
	 $('#comingSoon').on('show.bs.modal', function(){
	    var myModal = $(this);
	    clearTimeout(myModal.data('hideInterval'));
	    myModal.data('hideInterval', setTimeout(function(){
	        myModal.modal('hide');
	    }, 1500));
	});
});
