
function allGraphs(){
	
}

function smmes(){
	 
	 
}

function housing(){
	
}

function agriculture(){
	 
	 
}

function cooperatives(){
	
}

var chart = new CanvasJS.Chart("chartContainer1",
		{
    animationEnabled: true,
    title: {
        text: "SMME Funding"
    },
    axisX: {
    	title: "Period (Yearly)"
    },
	axisY: {
		title: "Amount",
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
        name: "Loan Target",
        showInLegend: true,      
		yValueFormatString: "#,##0.# Rands",
		dataPoints: [
				{ label: "2014/15",  y: 1100000 },
				{ label: "2015/16", y: 3500000 },
				{ label: "2016/17", y: 40900000 },
				{ label: "2017/18",  y: 38000000 }
				
			]
		},
		{
			type: "column",
			name: "Loan Approved",
			showInLegend: true,
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
				{ label: "2014/15",  y: 1100000 },
				{ label: "2015/16", y: 3200000 },
				{ label: "2016/17", y: 45900000 },
				{ label: "2017/18",  y: 30000000 }
				
			]
		},
		{
			type: "column",
			name: "Loan Disbursed",
			showInLegend: true,
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
				{ label: "2014/15", y: 1100000 },
				{ label: "2015/16", y: 1800000 },
				{ label: "2016/17", y: 20800000 },
				{ label: "2017/18", y: 21000000 }
				
			]
		}]
});
	chart.render();

	var chart = new CanvasJS.Chart("chartContainer2",
			{
	    animationEnabled: true,
	    title: {
	        text: "Housing Funding"
	    },
	    axisX: {
	    	title: "Period (Yearly)"
	    },
		axisY: {
			title: "Amount",
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
	        name: "Loan Target",
	        showInLegend: true,      
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3500000 },
					{ label: "2016/17", y: 40900000 },
					{ label: "2017/18",  y: 38000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Approved",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3200000 },
					{ label: "2016/17", y: 45900000 },
					{ label: "2017/18",  y: 30000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Disbursed",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15", y: 1100000 },
					{ label: "2015/16", y: 1800000 },
					{ label: "2016/17", y: 20800000 },
					{ label: "2017/18", y: 21000000 }
					
				]
			}]
	});
	chart.render();

	var chart = new CanvasJS.Chart("chartContainer3",
			{
	    animationEnabled: true,
	    title: {
	        text: "Agriculture Funding"
	    },
	    axisX: {
	    	title: "Period (Yearly)"
	    },
		axisY: {
			title: "Amount",
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
	        name: "Loan Target",
	        showInLegend: true,      
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3500000 },
					{ label: "2016/17", y: 40900000 },
					{ label: "2017/18",  y: 38000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Approved",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3200000 },
					{ label: "2016/17", y: 45900000 },
					{ label: "2017/18",  y: 30000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Disbursed",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15", y: 1100000 },
					{ label: "2015/16", y: 1800000 },
					{ label: "2016/17", y: 20800000 },
					{ label: "2017/18", y: 21000000 }
					
				]
			}]
	});
	chart.render();

	var chart = new CanvasJS.Chart("chartContainer4",
	    {
	        animationEnabled: true,
	        title: {
	            text: "Cooperatives Funding"
	        },
	        axisX: {
	        	title: "Period (Yearly)"
	        },
			axisY: {
				title: "Amount",
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
	            name: "Loan Target",
	            showInLegend: true,      
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
	    				{ label: "2014/15",  y: 1100000 },
	    				{ label: "2015/16", y: 3500000 },
	    				{ label: "2016/17", y: 40900000 },
	    				{ label: "2017/18",  y: 38000000 }
	    				
	    			]
	    		},
	    		{
	    			type: "column",
	    			name: "Loan Approved",
	    			showInLegend: true,
	    			yValueFormatString: "#,##0.# Rands",
	    			dataPoints: [
	    				{ label: "2014/15",  y: 1100000 },
	    				{ label: "2015/16", y: 3200000 },
	    				{ label: "2016/17", y: 45900000 },
	    				{ label: "2017/18",  y: 30000000 }
	    				
	    			]
	    		},
	    		{
	    			type: "column",
	    			name: "Loan Disbursed",
	    			showInLegend: true,
	    			yValueFormatString: "#,##0.# Rands",
	    			dataPoints: [
	    				{ label: "2014/15", y: 1100000 },
	    				{ label: "2015/16", y: 1800000 },
	    				{ label: "2016/17", y: 20800000 },
	    				{ label: "2017/18", y: 21000000 }
	    				
	    			]
	    		}]
	    });
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainer1zoom",
			{
	    animationEnabled: true,
	    title: {
	        text: "SMME Funding"
	    },
	    axisX: {
	    	title: "Period (Yearly)"
	    },
		axisY: {
			title: "Amount",
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
	        name: "Loan Target",
	        showInLegend: true,      
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3500000 },
					{ label: "2016/17", y: 40900000 },
					{ label: "2017/18",  y: 38000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Approved",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3200000 },
					{ label: "2016/17", y: 45900000 },
					{ label: "2017/18",  y: 30000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Disbursed",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15", y: 1100000 },
					{ label: "2015/16", y: 1800000 },
					{ label: "2016/17", y: 20800000 },
					{ label: "2017/18", y: 21000000 }
					
				]
			}]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainer2zoom",
			{
	    animationEnabled: true,
	    title: {
	        text: "Housing Funding"
	    },
	    axisX: {
	    	title: "Period (Yearly)"
	    },
		axisY: {
			title: "Amount",
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
	        name: "Loan Target",
	        showInLegend: true,      
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3500000 },
					{ label: "2016/17", y: 40900000 },
					{ label: "2017/18",  y: 38000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Approved",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3200000 },
					{ label: "2016/17", y: 45900000 },
					{ label: "2017/18",  y: 30000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Disbursed",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15", y: 1100000 },
					{ label: "2015/16", y: 1800000 },
					{ label: "2016/17", y: 20800000 },
					{ label: "2017/18", y: 21000000 }
					
				]
			}]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainer3zoom",
			{
	    animationEnabled: true,
	    title: {
	        text: "Agriculture Funding"
	    },
	    axisX: {
	    	title: "Period (Yearly)"
	    },
		axisY: {
			title: "Amount",
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
	        name: "Loan Target",
	        showInLegend: true,      
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3500000 },
					{ label: "2016/17", y: 40900000 },
					{ label: "2017/18",  y: 38000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Approved",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3200000 },
					{ label: "2016/17", y: 45900000 },
					{ label: "2017/18",  y: 30000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Disbursed",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15", y: 1100000 },
					{ label: "2015/16", y: 1800000 },
					{ label: "2016/17", y: 20800000 },
					{ label: "2017/18", y: 21000000 }
					
				]
			}]
	});
	chart.render();
	
	var chart = new CanvasJS.Chart("chartContainer4zoom",
			{
	    animationEnabled: true,
	    title: {
	        text: "Coorperatives Funding"
	    },
	    axisX: {
	    	title: "Period (Yearly)"
	    },
		axisY: {
			title: "Amount",
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
	        name: "Loan Target",
	        showInLegend: true,      
			yValueFormatString: "#,##0.# Rands",
			dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3500000 },
					{ label: "2016/17", y: 40900000 },
					{ label: "2017/18",  y: 38000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Approved",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15",  y: 1100000 },
					{ label: "2015/16", y: 3200000 },
					{ label: "2016/17", y: 45900000 },
					{ label: "2017/18",  y: 30000000 }
					
				]
			},
			{
				type: "column",
				name: "Loan Disbursed",
				showInLegend: true,
				yValueFormatString: "#,##0.# Rands",
				dataPoints: [
					{ label: "2014/15", y: 1100000 },
					{ label: "2015/16", y: 1800000 },
					{ label: "2016/17", y: 20800000 },
					{ label: "2017/18", y: 21000000 }
					
				]
			}]
	});
	chart.render();


	$("#chartContainer1").click(function(){
        $("#chartContainer1").hide();
        $("#chartContainer2").hide();
        $("#chartContainer3").hide();
        $("#chartContainer4").hide();
        $("#chartContainer1zoom").fadeIn(2000);
       
        
      
        
    });
    
    $("#chartContainer2").click(function(){
        $("#chartContainer1").hide();
        $("#chartContainer2").hide();
        $("#chartContainer3").hide();
        $("#chartContainer4").hide();
        $("#chartContainer2zoom").fadeIn(2000);
       
        
        
    });
    
    $("#chartContainer3").click(function(){
        $("#chartContainer1").hide();
        $("#chartContainer2").hide();
        $("#chartContainer3").hide();
        $("#chartContainer4").hide();
        $("#chartContainer3zoom").fadeIn(2000);
        
        
    });
    
    $("#chartContainer4").click(function(){
        $("#chartContainer1").hide();
        $("#chartContainer2").hide();
        $("#chartContainer3").hide();
        $("#chartContainer4").hide();
        $("#chartContainer4zoom").fadeIn(2000);
       
        
    });
    
$(document).ready(function(){    
    $("#chartContainer1").show();
    $("#chartContainer2").show();
    $("#chartContainer3").show();
    $("#chartContainer4").show();
    $("#chartContainer1zoom").hide();
    $("#chartContainer2zoom").hide();
    $("#chartContainer3zoom").hide();
    $("#chartContainer4zoom").hide();
    
   
});
	
	
	
	