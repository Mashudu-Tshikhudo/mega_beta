var chart = new CanvasJS.Chart("chartContainer1",
		{
    animationEnabled: true,
    title: {
        text: "Impact Analysis(District Municipality)"
    },
    axisX: {
    	title: "Municipality"
    },
	axisY: {
		title: "Number",
		titleFontColor: "#4F81BC",
		lineColor: "#4F81BC",
		labelFontColor: "#4F81BC",
		tickColor: "#4F81BC"
	},
	
	toolTip: {
		shared: true
	},
    data: [{
        type: "column",
        click: ehlanzeniOnclick,
        name: "Jobs Created",
        showInLegend: true,      
		yValueFormatString: "#,##0.#",
		dataPoints: [
				{ label: "Ehlanzeni District Municipality",  y: 100 },
				{ label: "Gert Sibande District Municipality", y: 70 },
				{ label: "Nkangala District Municipality",  y: 90 }
				
				
			]
		},
		{
			type: "column",
			name: "Male",
			click: gertOnclick,
			showInLegend: true,
			yValueFormatString: "#,##0.#",
			dataPoints: [
				{ label: "Ehlanzeni District Municipality",  y: 30 },
				{ label: "Gert Sibande District Municipality", y: 40 },
				{ label: "Nkangala District Municipality", y: 60 }
				
				
			]
		},
		{
			type: "column",
			name: "Female",
			click: nkangalaOnclick,
			showInLegend: true,
			yValueFormatString: "#,##0.#",
			dataPoints: [
				{ label: "Ehlanzeni District Municipality",  y: 70 },
				{ label: "Gert Sibande District Municipality", y: 30 },
				{ label: "Nkangala District Municipality", y: 30 }
				
			]
		},
		{
			type: "column",
			name: "Youth",
			showInLegend: true,
			yValueFormatString: "#,##0.#",
			dataPoints: [
				{ label: "Ehlanzeni District Municipality",  y: 48 },
				{ label: "Gert Sibande District Municipality", y: 16 },
				{ label: "Nkangala District Municipality", y: 20 }
				
			]
		},
		{
			type: "column",
			name: "Disabled",
			showInLegend: true,
			yValueFormatString: "#,##0.#",
			dataPoints: [
				{ label: "Ehlanzeni District Municipality",  y: 50 },
				{ label: "Gert Sibande District Municipality", y: 20 },
				{ label: "Nkangala District Municipality", y: 15 }
				
			]
		}]
});
	chart.render();
	
	
	var chart = new CanvasJS.Chart("chartContainerNkangala",
			{
	    animationEnabled: true,
	    title: {
	        text: "Impact Analysis Nkangala Municipality"
	    },
	    axisX: {
	    	title: "Municipality"
	    },
		axisY: {
			title: "Number",
			titleFontColor: "#4F81BC",
			lineColor: "#4F81BC",
			labelFontColor: "#4F81BC",
			tickColor: "#4F81BC"
		},
		
		toolTip: {
			shared: true
		},
	    data: [{
	        type: "column",
	        click: ehlanzeniOnclick,
	        name: "Jobs Created",
	        showInLegend: true,      
			yValueFormatString: "#,##0.#",
			dataPoints: [
					{ label: "Dr JS Moroka Local Municipality",  y: 14 },
					{ label: "Emakhazeni Local Municipality", y: 12 },
					{ label: "Emalahleni Local Municipality",  y: 10 },
					{ label: "Steve Tshwete Local Municipality",  y: 14 },
					{ label: "Thembisile Hani Local Municipality",  y: 16 },
					{ label: "Victor Khanye Local Municipality",  y: 8 }
					
					
				]
			},
			{
				type: "column",
				name: "Male",
				click: ehlanzeniOnclick,
				showInLegend: true,
				yValueFormatString: "#,##0.#",
				dataPoints: [
					{ label: "Dr JS Moroka Local Municipality",  y: 9 },
					{ label: "Emakhazeni Local Municipality", y: 8 },
					{ label: "Emalahleni Local Municipality",  y: 6 },
					{ label: "Steve Tshwete Local Municipality",  y: 10 },
					{ label: "Thembisile Hani Local Municipality",  y: 12 },
					{ label: "Victor Khanye Local Municipality",  y: 6 }
					
					
				]
			},
			{
				type: "column",
				name: "Female",
				click: ehlanzeniOnclick,
				showInLegend: true,
				yValueFormatString: "#,##0.#",
				dataPoints: [
					{ label: "Dr JS Moroka Local Municipality",  y: 5 },
					{ label: "Emakhazeni Local Municipality", y: 4 },
					{ label: "Emalahleni Local Municipality",  y: 5 },
					{ label: "Steve Tshwete Local Municipality",  y: 3 },
					{ label: "Thembisile Hani Local Municipality",  y: 6 },
					{ label: "Victor Khanye Local Municipality",  y: 2 }
					
				]
			},
			{
				type: "column",
				name: "Youth",
				showInLegend: true,
				yValueFormatString: "#,##0.#",
				dataPoints: [
					{ label: "Dr JS Moroka Local Municipality",  y: 4 },
					{ label: "Emakhazeni Local Municipality", y: 3 },
					{ label: "Emalahleni Local Municipality",  y: 5 },
					{ label: "Steve Tshwete Local Municipality",  y: 2 },
					{ label: "Thembisile Hani Local Municipality",  y: 1 },
					{ label: "Victor Khanye Local Municipality",  y: 3 }
				]
			},
			{
				type: "column",
				name: "Disabled",
				showInLegend: true,
				yValueFormatString: "#,##0.#",
				dataPoints: [
					{ label: "Dr JS Moroka Local Municipality",  y: 3 },
					{ label: "Emakhazeni Local Municipality", y: 2 },
					{ label: "Emalahleni Local Municipality",  y: 2 },
					{ label: "Steve Tshwete Local Municipality",  y: 4 },
					{ label: "Thembisile Hani Local Municipality",  y: 1 },
					{ label: "Victor Khanye Local Municipality",  y: 2 }
					
				]
			}]
	});
		chart.render();
		
		var chart = new CanvasJS.Chart("chartContainerGert",
				{
		    animationEnabled: true,
		    title: {
		        text: "Impact Analysis Gert Sibande District Municipality"
		    },
		    axisX: {
		    	title: "Municipality"
		    },
			axisY: {
				title: "Number",
				titleFontColor: "#4F81BC",
				lineColor: "#4F81BC",
				labelFontColor: "#4F81BC",
				tickColor: "#4F81BC"
			},
			
			toolTip: {
				shared: true
			},
		    data: [{
		        type: "column",
		        click: nkangalaOnclick,
		        name: "Jobs Created",
		        showInLegend: true,      
				yValueFormatString: "#,##0.#",
				dataPoints: [
						{ label: "Chief Albert Luthuli Local Municipality",  y: 10 },
						{ label: "Dipaleseng Local Municipality", y: 12 },
						{ label: "Dr Pixley Ka Isaka Seme Local Municipality",  y: 8 },
						{ label: "Govan Mbeki Local Municipality",  y: 14 },
						{ label: "Lekwa Local Municipality",  y: 6 },
						{ label: "Mkhondo Local Municipality",  y: 8 },
						{ label: "Msukaligwa Local Municipality",  y: 12 }
						
						
					]
				},
				{
					type: "column",
					name: "Male",
					click: nkangalaOnclick,
					showInLegend: true,
					yValueFormatString: "#,##0.#",
					dataPoints: [
						{ label: "Chief Albert Luthuli Local Municipality",  y: 6 },
						{ label: "Dipaleseng Local Municipality", y: 4 },
						{ label: "Dr Pixley Ka Isaka Seme Local Municipality",  y: 5 },
						{ label: "Govan Mbeki Local Municipality",  y: 2 },
						{ label: "Lekwa Local Municipality",  y: 7 },
						{ label: "Mkhondo Local Municipality",  y: 5 },
						{ label: "Msukaligwa Local Municipality",  y: 6 }
						
						
					]
				},
				{
					type: "column",
					name: "Female",
					click: nkangalaOnclick,
					showInLegend: true,
					yValueFormatString: "#,##0.#",
					dataPoints: [
						{ label: "Chief Albert Luthuli Local Municipality",  y: 6 },
						{ label: "Dipaleseng Local Municipality", y: 4 },
						{ label: "Dr Pixley Ka Isaka Seme Local Municipality",  y: 2 },
						{ label: "Govan Mbeki Local Municipality",  y: 2 },
						{ label: "Lekwa Local Municipality",  y: 3 },
						{ label: "Mkhondo Local Municipality",  y: 1 },
						{ label: "Msukaligwa Local Municipality",  y: 3 }
						
					]
				},
				{
					type: "column",
					name: "Youth",
					showInLegend: true,
					yValueFormatString: "#,##0.#",
					dataPoints: [
						{ label: "Chief Albert Luthuli Local Municipality",  y: 1 },
						{ label: "Dipaleseng Local Municipality", y: 2 },
						{ label: "Dr Pixley Ka Isaka Seme Local Municipality",  y: 1 },
						{ label: "Govan Mbeki Local Municipality",  y: 4 },
						{ label: "Lekwa Local Municipality",  y: 1 },
						{ label: "Mkhondo Local Municipality",  y: 2 },
						{ label: "Msukaligwa Local Municipality",  y: 1 }
						
					]
				},
				{
					type: "column",
					name: "Disabled",
					showInLegend: true,
					yValueFormatString: "#,##0.#",
					dataPoints: [
						{ label: "Chief Albert Luthuli Local Municipality",  y: 3 },
						{ label: "Dipaleseng Local Municipality", y: 2 },
						{ label: "Dr Pixley Ka Isaka Seme Local Municipality",  y: 4 },
						{ label: "Govan Mbeki Local Municipality",  y: 1 },
						{ label: "Lekwa Local Municipality",  y: 2 },
						{ label: "Mkhondo Local Municipality",  y: 4 },
						{ label: "Msukaligwa Local Municipality",  y: 3 }
						
					]
				}]
		});
			chart.render();
		
			var chart = new CanvasJS.Chart("chartContainerEhlanzeni",
					{
			    animationEnabled: true,
			    title: {
			        text: "Impact Analysis Ehlanzeni District Municipality"
			    },
			    axisX: {
			    	title: "Municipality"
			    },
				axisY: {
					title: "Number",
					titleFontColor: "#4F81BC",
					lineColor: "#4F81BC",
					labelFontColor: "#4F81BC",
					tickColor: "#4F81BC"
				},
				
				toolTip: {
					shared: true
				},
			    data: [{
			        type: "column",
			        click: ehlanzeniOnclick,
			        name: "Jobs Created",
			        showInLegend: true,      
					yValueFormatString: "#,##0.#",
					dataPoints: [
							{ label: "Bushbuckridge Local Municipality",  y: 20 },
							{ label: "City of Mbombela Local Municipality", y: 20 },
							{ label: "Mbombela Local Municipality",  y: 20 },
							{ label: "Nkomazi Local Municipality",  y: 20 },
							{ label: "Thaba Chweu Local Municipality",  y: 20 }
							
							
						]
					},
					{
						type: "column",
						name: "Male",
						click: ehlanzeniOnclick,
						showInLegend: true,
						yValueFormatString: "#,##0.#",
						dataPoints: [
							{ label: "Bushbuckridge Local Municipality",  y: 6 },
							{ label: "City of Mbombela Local Municipality", y: 5 },
							{ label: "Mbombela Local Municipality",  y: 7 },
							{ label: "Nkomazi Local Municipality",  y: 4 },
							{ label: "Thaba Chweu Local Municipality",  y: 8 }
							
							
						]
					},
					{
						type: "column",
						name: "Female",
						click: ehlanzeniOnclick,
						showInLegend: true,
						yValueFormatString: "#,##0.#",
						dataPoints: [
							{ label: "Bushbuckridge Local Municipality",  y: 14 },
							{ label: "City of Mbombela Local Municipality", y: 15 },
							{ label: "Mbombela Local Municipality",  y: 13 },
							{ label: "Nkomazi Local Municipality",  y: 18 },
							{ label: "Thaba Chweu Local Municipality",  y: 10 }
							
						]
					},
					{
						type: "column",
						name: "Youth",
						showInLegend: true,
						yValueFormatString: "#,##0.#",
						dataPoints: [
							{ label: "Bushbuckridge Local Municipality",  y: 10 },
							{ label: "City of Mbombela Local Municipality", y: 8 },
							{ label: "Mbombela Local Municipality",  y: 10 },
							{ label: "Nkomazi Local Municipality",  y: 6 },
							{ label: "Thaba Chweu Local Municipality",  y: 12 }
							
						]
					},
					{
						type: "column",
						name: "Disabled",
						showInLegend: true,
						yValueFormatString: "#,##0.#",
						dataPoints: [
							{ label: "Bushbuckridge Local Municipality",  y: 10 },
							{ label: "City of Mbombela Local Municipality", y: 12 },
							{ label: "Mbombela Local Municipality",  y: 6 },
							{ label: "Nkomazi Local Municipality",  y: 8 },
							{ label: "Thaba Chweu Local Municipality",  y: 14 }
							
						]
					}]
			});
				chart.render();
			
				$(document).ready(function(){
					$("#chartContainerGert").hide();
				    $("#chartContainerEhlanzeni").hide();
				    $("#chartContainerNkangala").hide();
					
				});
function nkangalaOnclick(){
	$("#chartContainer1").hide();
    $("#chartContainerGert").hide();
    $("#chartContainerEhlanzeni").hide();
    $("#chartContainerNkangala").fadeIn(2000);
	}
function gertOnclick(){
	$("#chartContainer1").hide();
    $("#chartContainerNkangala").hide();
    $("#chartContainerEhlanzeni").hide();
    $("#chartContainerGert").fadeIn(2000);
	}
function ehlanzeniOnclick(){
	$("#chartContainer1").hide();
    $("#chartContainerGert").hide();
    $("#chartContainerNkangala").hide();
    $("#chartContainerEhlanzeni").fadeIn(2000);
}
	
	
