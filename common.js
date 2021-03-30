var DataSource = {"media": [
	{"Source": "DateTiele",
	"title":"Morbi fringilla eros at quam pretium, a posuere enim dignissim.",
	"date":"01 April, 2021",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-post-gdpr-world/"},
	{"Source": "Nullam",
	"title":"Nulla vel lorem eleifend, porttitor sem in, hendrerit ipsum.",
	"date":"29 November, 2020",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-post-gdpr-world/"},
	{"Source": "Acrtiots",
	"title":"Suspendisse condimentum metus rhoncus orci dignissim vestibulum.",
	"date":"17 June, 2021",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-pos"},
	{"Source": "accumsan",
	"title":"Suspendisse condimentum metus condimentum metus rhoncus.",
	"date":"21 February, 2018",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-pos"},
	{"Source": "Nullam",
	"title":"enean quis purus commodo, congue erat id, congue dolor.",
	"date":"23 May, 2021",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-pos"},	
	{"Source": "Acrtiots",
	"title":"Sed facilisis purus ut dolor volutpat, et luctus sapien tempor.",
	"date":"02 January, 2020",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-post-gdpr-world/"},
	{"Source": "accumsan",
	"title":"Suspendisse condime lorem eleifend, porttitor se.",
	"date":"15 February, 2018",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-pos"},
	{"Source": "Task",
	"title":"My task dynamically generated.",
	"date":"15 December, 2006",
	"link":"https://www.fintechfutures.com/2020/03/cloud-security-in-a-pos"}
  ]};
  $(document).ready(function(){
    var date_filter = {};
	$.each(DataSource.media, function(d_key,d_fvalue) {
	    var dt = new Date(d_fvalue.date);
	     $("#source_list").append('<fieldset class="card col-sm-12 common_cls_for_blog yr_cls_'+dt.getFullYear()+'"><legend class="datevalue">'+d_fvalue.date+'</legend><div class="card-body pt-2"><label><p class="cardname mb-0">'+d_fvalue.Source+'</p></label><h3>'+d_fvalue.title+'</h3><a href="'+d_fvalue.link+'">Read more</a></div></fieldset>');
		 
		 if(date_filter.hasOwnProperty('_'+dt.getFullYear())){
			date_filter['_'+String(dt.getFullYear())] += 1;
		 }
		 else{
			date_filter['_'+String(dt.getFullYear())] = 1;
		 }
	});
	$("#filter").append('<option value="all">View All</option>');
	
	$.each(date_filter, function(f_key,f_value) {
		$("#filter").append('<option value="'+f_key.substr(1)+'">'+f_key.substr(1)+' ['+f_value+']</option>');
	});
	
	
	
	
	$("#filter").on("change",function(){
	
		var crnt_url = window.location.href.split("?");
		
		crnt_url = crnt_url[0];
		
		console.log($(this).val());
	    $(".common_cls_for_blog").hide();
		if($(this).val() == "all"){
		   $(".common_cls_for_blog").show();
		   window.history.pushState({href: crnt_url}, "", crnt_url);
		}
		else{
		   $(".yr_cls_"+$(this).val()).show();
		   window.history.pushState({href: crnt_url+"?year="+$(this).val()}, "", crnt_url+"?year="+$(this).val());
		}
		
	});
	var current_gets = getUrlVars();
	if(current_gets.hasOwnProperty('year')){
		$('#filter').val(current_gets['year']);
		$('#filter').trigger("change");
	}
	
  });
  // Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
