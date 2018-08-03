//Show All funding on table
$.ajax({
						url: "/funding",
						dataSrc: "",
						dataType: "json",
						success: function(resultList) {
							if(resultList){
								allConcepts(resultList);
							}
						},	
						error: function(jqXHR, textStatus, errorThrown) {
							// Show error message
							
						}
					});
	
	function allConcepts(list){
		
		var t = $("table#results tbody").empty();
		 
		for (var i = 0; i < list.length; i++) {
			 $("<tr id='mytr'><td align='center' class='concept'>" + list[i].clientName + "</td><td>"+ list[i].dateOfApproval + "</td><td>"+ list[i].jobsCreated + "</td><td>"+ list[i].male + "</td><td>"+ list[i].female + "</td><td>"+ list[i].disability + "</td><td>"+ list[i].youth + "</td><td>"+ list[i].total + "</td><td>"+ list[i].businessDescription + "</td><td>"+ list[i].municipality + "</td><td>"+ list[i].region + "</td><td>"+ list[i].amount + "</td><td>"+ list[i].funding + "</td>").appendTo(t);
		        		
			}
	     
	}
					
//Show specific data based on search criteria
function triggerCriteria(){	
	
	var funding =  $('#funding').find('option:selected').text();
	var municipality =  $('#municipality').find('option:selected').text();
	var region =  $('#region').find('option:selected').text();
	var business =  $('#business').find('option:selected').text();
	
	$.ajax({
		url: "/funding/criteria/"+funding+"/"+municipality+"/"+region+"/"+business,
		dataSrc: "",
		dataType: "json",
		success: function(resultList) {
			if(resultList){
				allConcept(resultList);
			}
		},	
		error: function(jqXHR, textStatus, errorThrown) {
			// Show error message
			
		}
	});
	
}

function allConcept(list){

var t = $("table#results tbody").empty();

for (var i = 0; i < list.length; i++) {
$("<tr id='mytr'><td align='center' class='concept'>" + list[i].clientName + "</td><td>"+ list[i].dateOfApproval + "</td><td>"+ list[i].jobsCreated + "</td><td>"+ list[i].male + "</td><td>"+ list[i].female + "</td><td>"+ list[i].disability + "</td><td>"+ list[i].youth + "</td><td>"+ list[i].total + "</td><td>"+ list[i].businessDescription + "</td><td>"+ list[i].municipality + "</td><td>"+ list[i].region + "</td><td>"+ list[i].amount + "</td><td>"+ list[i].funding + "</td>").appendTo(t);
		
}

}
	
// Search function for client name
	
	function searchClient() {
		  // Declare variables 
		  var input, filter, table, tr, td, i;
		  input = document.getElementById("myInput");
		  filter = input.value.toUpperCase();
		  table = document.getElementById("results");
		  tr = table.getElementsByTagName("tr");

		  // Loop through all table rows, and hide those who don't match the search query
		  for (i = 0; i < tr.length; i++) {
		    td = tr[i].getElementsByTagName("td")[0];
		    if (td) {
		      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
		        tr[i].style.display = "";
		      } else {
		        tr[i].style.display = "none";
		      }
		    } 
		  }
		}
	
	
	//Filter anything
	/*$(document).ready(function(){
		  $("#myInput").on("keyup", function() {
		    var value = $(this).val().toLowerCase();
		    $("#mytr *").filter(function() {
		      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		    });
		  });
		});*/
	
	// Funding
	$.ajax({
		url: "/funding/new",
		dataSrc: "",
		dataType: "json",
		success: function(resultList) {
			if(resultList){
				
				//Render concept dropdown options from the database table define_concept
				renderOptions("#funding", resultList);
				
				//Calling form create method base on what selected initially on the concept drop down.
				//changeForm();
			}
		},	
		error: function(jqXHR, textStatus, errorThrown) {
			// Show error message
			
		}
	});
	
	function renderOptions(id, list){
		//clear select
		$(id).html("");
	
		//populate select with option
		$.each(list, function(idx, obj) {   
			 $(id).append($("<option></option>")
							.attr("value", obj.id)
							.text(obj)); 
		});
	}
	
	
	//Municipality
	$.ajax({
		url: "/municipality/new",
		dataSrc: "",
		dataType: "json",
		success: function(resultList) {
			if(resultList){
				
				//Render concept dropdown options from the database table define_concept
				renderOptions("#municipality", resultList);
				
				//Calling form create method base on what selected initially on the concept drop down.
				//changeForm();
			}
		},	
		error: function(jqXHR, textStatus, errorThrown) {
			// Show error message
			
		}
	});
	
	function renderOptions(id, list){
		//clear select
		$(id).html("");
	
		//populate select with option
		$.each(list, function(idx, obj) {   
			 $(id).append($("<option></option>")
							.attr("value", obj.id)
							.text(obj)); 
		});
	}
	
	//Region
	
	$.ajax({
		url: "/region/new",
		dataSrc: "",
		dataType: "json",
		success: function(resultList) {
			if(resultList){
				
				//Render concept dropdown options from the database table define_concept
				renderOptions("#region", resultList);
				
				//Calling form create method base on what selected initially on the concept drop down.
				//changeForm();
			}
		},	
		error: function(jqXHR, textStatus, errorThrown) {
			// Show error message
			
		}
	});
	
	function renderOptions(id, list){
		//clear select
		$(id).html("");
	
		//populate select with option
		$.each(list, function(idx, obj) {   
			 $(id).append($("<option></option>")
							.attr("value", obj.id)
							.text(obj)); 
		});
	}
	
	//Business
	
	$.ajax({
		url: "/business/new",
		dataSrc: "",
		dataType: "json",
		success: function(resultList) {
			if(resultList){
				
				//Render concept dropdown options from the database table define_concept
				renderOptions("#business", resultList);
				
				//Calling form create method base on what selected initially on the concept drop down.
				//changeForm();
			}
		},	
		error: function(jqXHR, textStatus, errorThrown) {
			// Show error message
			
		}
	});
	
	function renderOptions(id, list){
		//clear select
		$(id).html("");
	
		//populate select with option
		$.each(list, function(idx, obj) {   
			 $(id).append($("<option></option>")
							.attr("value", obj.id)
							.text(obj)); 
		});
	}
	
	
	$('#searchbutton').on('click',function() {
		   $('.modal').modal('hide');
		});