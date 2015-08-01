/**
 * @author IRA
 */

$(document).ready(function() {
  console.log("begin...");
  var li = jQuery('li');
   $('button.list_sort').click(function(){
   				console.log(li.text());
                li.sort(function(a, b){
                    return $(a).text() > $(b).text() ? 1 : -1;
                });
            });
            
   //name sorting
   $('button.name_sort').click(function(){
   		$('div.group').sort(function(a,b){
   			return $(a).find('#string').text().toLowerCase() > $(b).find('#string').text().toLowerCase() ? 1 : -1;	
   		});
   });  
   //number sorting
    $('button.num_sort').click(function(){
   
   		$('div.group').sort(function(a,b){

   		return parseInt($(a).find('#int').text()) > parseInt($(b).find('#int').text()) ? 1 : -1;
   		
   		});
   	});  
    //date sorting 
   $('button.date_sort').click(function(){
   
   		$('div.group').sort(function(a,b){
   			var dateA = parseDate($(a).find('#date').text(),"M/d/yy");	
   			var dateB = parseDate($(b).find('#date').text(),"M/d/yy");
 		return dateA > dateB ? 1 : -1;
   		
   		});
   });       
  
});