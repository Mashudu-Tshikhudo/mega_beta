var chart = new CanvasJS.Chart("chartContainerOffice",
			{
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Office of the CEO (Quarter 1)"
	},
	axisY: {
		title: "Rands"
	},
	data: [{        
		type: "column",  
		showInLegend: true, 
		legendMarkerColor: "grey",
		dataPoints: [      
			{ y: 24715, label: "Annual Target" },
			{ y: 5048,  label: "Achieved To Date" },
			{ y: 6048,  label: "Quarter 1 Planned" },
			{ y: 5048,  label: "Quarter 1 Achieved" }
			
		]
	}]
});
chart.render();

		var chart = new CanvasJS.Chart("chartContainerCorporate",
				{
				animationEnabled: true,
				theme: "light2", // "light1", "light2", "dark1", "dark2"
				title:{
					text: "Corporate Services (Quarter 1)"
				},
				axisY: {
					title: "Rands"
				},
				data: [{        
					type: "column",  
					showInLegend: true, 
					legendMarkerColor: "grey",
					dataPoints: [      
						{ y: 39366, label: "Annual Target" },
						{ y: 6416,  label: "Achieved To Date" },
						{ y: 13869,  label: "Quarter 1 Planned" },
						{ y: 6416,  label: "Quarter 1 Achieved" }
						
					]
				}]
			});
			chart.render();

			var chart = new CanvasJS.Chart("chartContainerFinance",
				    {
					animationEnabled: true,
					theme: "light2", // "light1", "light2", "dark1", "dark2"
					title:{
						text: "Finance (Quarter 1)"
					},
					axisY: {
						title: "Rands"
					},
					data: [{        
						type: "column",  
						showInLegend: true, 
						legendMarkerColor: "grey",
						dataPoints: [      
							{ y: 44192, label: "Annual Target" },
							{ y: 9095,  label: "Achieved To Date" },
							{ y: 11047,  label: "Quarter 1 Planned" },
							{ y: 9095,  label: "Quarter 1 Achieved" }
							
						]
					}]
				});
				chart.render();
		var chart = new CanvasJS.Chart("chartContainerStrategy",
		    {
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Strategy & Communications (Quarter 1)"
			},
			axisY: {
				title: "Rands"
			},
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 26140, label: "Annual Target" },
					{ y: 5194,  label: "Achieved To Date" },
					{ y: 10334,  label: "Quarter 1 Planned" },
					{ y: 5194,  label: "Quarter 1 Achieved" }
					
				]
			}]
		});
		chart.render();
		
		var chart = new CanvasJS.Chart("chartContainerProperties",
				{
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Properties & Infrastructure (Quarter 1)"
			},
			axisY: {
				title: "Rands"
			},
				data: [{        
					type: "column",  
					showInLegend: true, 
					legendMarkerColor: "grey",
					dataPoints: [      
						{ y: 489684, label: "Annual Target" },
						{ y: 134423,  label: "Achieved To Date" },
						{ y: 126040,  label: "Quarter 1 Planned" },
						{ y: 134423,  label: "Quarter 1 Achieved" }
						
					]
				}]
		});
		chart.render();
		
		var chart = new CanvasJS.Chart("chartContainerFunding",
				{
			animationEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Funding (Quarter 1)"
			},
			axisY: {
				title: "Rands"
			},
			
				data: [{        
					type: "column",  
					showInLegend: true, 
					legendMarkerColor: "grey",
					dataPoints: [      
						{ y: 150910, label: "Annual Target" },
						{ y: 30099,  label: "Achieved To Date" },
						{ y: 21961,  label: "Quarter 1 Planned" },
						{ y: 30099,  label: "Quarter 1 Achieved" }
						
					]
				}]
		});
		chart.render();
		
		
		$("#chartContainerOffice").click(function(){
			$("#chartContainerOffice1").show();
	        $("#chartContainerOffice2").show();
	        $("#chartContainerOffice3").show();
	        $("#chartContainerOffice4").show();
	        $("#buttonreload").show();
	        
	        
	        $("#chartContainerOffice").hide();
	        $("#chartContainerCorporate").hide();
	        $("#chartContainerFinance").hide();
	        $("#chartContainerStrategy").hide();
	        $("#chartContainerProperties").hide();
	        $("#chartContainerFunding").hide();
	        $("#chartContainerCorporate1").hide();
	        $("#chartContainerCorporate2").hide();
	        $("#chartContainerCorporate3").hide();
	        $("#chartContainerCorporate4").hide();
	      
	        
	    });
	    
	    $("#chartContainerCorporate").click(function(){
	    	$("#chartContainerCorporate1").show();
	        $("#chartContainerCorporate2").show();
	        $("#chartContainerCorporate3").show();
	        $("#chartContainerCorporate4").show();
	        $("#buttonreload").show();
	        
	        
	        $("#chartContainerOffice").hide();
	        $("#chartContainerCorporate").hide();
	        $("#chartContainerFinance").hide();
	        $("#chartContainerStrategy").hide();
	        $("#chartContainerProperties").hide();
	        $("#chartContainerFunding").hide();
	        $("#chartContainerOffice1").hide();
	        $("#chartContainerOffice2").hide();
	        $("#chartContainerOffice3").hide();
	        $("#chartContainerOffice4").hide();
	        
	        
	        
	    });
	    
	  
	$(document).ready(function(){    
	    $("#chartContainerOffice").show();
        $("#chartContainerCorporate").show();
        $("#chartContainerFinance").show();
        $("#chartContainerStrategy").show();
        $("#chartContainerProperties").show();
        $("#chartContainerFunding").show();
        
        
        $("#buttonreload").hide();
        $("#chartContainerOffice1").hide();
        $("#chartContainerOffice2").hide();
        $("#chartContainerOffice3").hide();
        $("#chartContainerOffice4").hide();
        $("#chartContainerCorporate1").hide();
        $("#chartContainerCorporate2").hide();
        $("#chartContainerCorporate3").hide();
        $("#chartContainerCorporate4").hide();
        
       
    });
	
	
	
	
	var chart = new CanvasJS.Chart("chartContainerOffice1",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Company Secretary (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 2570, label: "Annual Target" },
					{ y: 560,  label: "Achieved To Date" },
					{ y: 643,  label: "Quarter 1 Planned" },
					{ y: 560,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	
	
	var chart = new CanvasJS.Chart("chartContainerOffice2",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Legal Services (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 9060 , label: "Annual Target" },
					{ y: 1535,  label: "Achieved To Date" },
					{ y: 2257,  label: "Quarter 1 Planned" },
					{ y: 1535,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	
	var chart = new CanvasJS.Chart("chartContainerOffice3",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Internal Audit (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 4147, label: "Annual Target" },
					{ y: 1481,  label: "Achieved To Date" },
					{ y: 1022,  label: "Quarter 1 Planned" },
					{ y: 1481,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainerOffice4",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Administration (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 8938, label: "Annual Target" },
					{ y: 1535,  label: "Achieved To Date" },
					{ y: 2257,  label: "Quarter 1 Planned" },
					{ y: 1535,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	
	
	var chart = new CanvasJS.Chart("chartContainerCorporate1",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Administration (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 8464, label: "Annual Target" },
					{ y: 1734,  label: "Achieved To Date" },
					{ y: 1955,  label: "Quarter 1 Planned" },
					{ y: 1734,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	
	var chart = new CanvasJS.Chart("chartContainerCorporate2",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Human Resources (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 18647, label: "Annual Target" },
					{ y: 2657,  label: "Achieved To Date" },
					{ y: 6341,  label: "Quarter 1 Planned" },
					{ y: 2657,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	
	var chart = new CanvasJS.Chart("chartContainerCorporate3",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Information Technology (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 11282, label: "Annual Target" },
					{ y: 2011,  label: "Achieved To Date" },
					{ y: 5163,  label: "Quarter 1 Planned" },
					{ y: 2011,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainerCorporate4",
			{
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title:{
			text: "Risk Management (Quarter 1)"
		},
		axisY: {
			title: "Rands"
		},
		
			data: [{        
				type: "column",  
				showInLegend: true, 
				legendMarkerColor: "grey",
				dataPoints: [      
					{ y: 973, label: "Annual Target" },
					{ y: 14,  label: "Achieved To Date" },
					{ y: 410,  label: "Quarter 1 Planned" },
					{ y: 14,  label: "Quarter 1 Achieved" }
					
				]
			}]
	});
	chart.render();