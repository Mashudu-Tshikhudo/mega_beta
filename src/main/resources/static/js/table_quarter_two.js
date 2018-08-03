$(document).ready(function(){    
	    $("#example-table").show();
	    $("#office_table").hide();
	    $("#corporate_table").hide();
		 $("#finance_table").hide();
		 $("#strategy_table").hide();
		 $("#properties_table").hide();
		 $("#funding_table").hide();
   
    
   
});
	


//create Tabulator on DOM element with id "example-table"
$("#example-table").tabulator({
    //height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"programme", dir:"asc"},
	],
	columns:[ //Define Table Columns
              {
              title:"Quarter 2 Non-Financial Performance: Numeric Analysis",
              columns:[
			        {title:"Programme", field:"programme", width:150},
			        {title:"Planned Outputs", field:"planned", align:"center"},
			        {title:"Fully Archieved Outpouts", field:"fullyArchieved", align:"center"},
			        {title:"Not Achieved Outputs", field:"notAchieved", align:"center"},
			        {title:"Partly Achieved", field:"partlyAchieved", align:"center"},
			        {title:"% Achieved", field:"achievedPercentage", align:"center"},
			        {title:"Notes : Achieved but not planned", field:"achievedNotes", align:"left"}
			        ],
              },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        //alert("Row " + row.getData().id + " Clicked!!!!");
        if(row.getData().id == 1){
        
        	 
        	 $("#example-table").hide();
        	 $("#office_table").show();
        	 $("#corporate_table").hide();
        	 $("#finance_table").hide();
        	 $("#strategy_table").hide();
        	 $("#properties_table").hide();
        	 $("#funding_table").hide();
        }else if(row.getData().id == 2){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").show();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").hide();
        }else if(row.getData().id == 3){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").show();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").hide();
        }else if(row.getData().id == 4){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").show();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").hide();
        }else if(row.getData().id == 5){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").show();
	       	 $("#funding_table").hide();
        }else if(row.getData().id == 6){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").show();
        }
        
    },
});

//define some sample data
var tabledata = [
    {id:1, programme:"Office of the CEO", planned:"8", fullyArchieved:"7", notAchieved:"1", partlyAchieved:"0", achievedPercentage:"88%", achievedNotes:""},
    {id:2, programme:"Corporate Services", planned:"10", fullyArchieved:"8", notAchieved:"2", partlyAchieved:"0", achievedPercentage:"80%", achievedNotes:""},
    {id:3, programme:"Finance", planned:"5", fullyArchieved:"3", notAchieved:"2", partlyAchieved:"0", achievedPercentage:"60%", achievedNotes:""},
    {id:4, programme:"Strategy & Communications", planned:"24", fullyArchieved:"12", notAchieved:"12", partlyAchieved:"0", achievedPercentage:"50%", achievedNotes:""},
    {id:5, programme:"Properties & Infrastructure", planned:"9", fullyArchieved:"6", notAchieved:"3", partlyAchieved:"0", achievedPercentage:"67%", achievedNotes:""},
    {id:6, programme:"Funding", planned:"30", fullyArchieved:"11", notAchieved:"19", partlyAchieved:"0", achievedPercentage:"37%", achievedNotes:""},
    {id:7, programme:"TOTAL", planned:"106", fullyArchieved:"55", notAchieved:"47", partlyAchieved:"0", achievedPercentage:"62%", achievedNotes:""}
    
];

//load sample data into the table
$("#example-table").tabulator("setData", tabledata);



//office_table

$("#office_table").tabulator({
    //height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"name", dir:"asc"},
	],
    columns:[ //Define Table Columns
        {title:"Strategic Objectives", field:"strategicObjectives", width:150},
        {title:"Performance Indicators", field:"performanceIndicators", align:"center"},
        {//create column group
            title:"ANNUAL PERFORMANCE",
            columns:[
		        {title:"Annual Target 2017/18", field:"annualTarget", align:"center"},
		        {title:"Annual Target Achieved-to-date", field:"annualTargetAchieved", align:"center"},
		    ],
        },
        {//create column group
            title:"QUARTERLY PERFORMANCE",
            columns:[
		        {title:"Q1 Planned Targets", field:"plannedTargets", align:"center"},
		        {title:"Q1 Achieved Targets", field:"achievedTargets", align:"center"},
		        {title:"Challenges", field:"challenges", align:"left"},
		        {title:"Intervention", field:"intervention", align:"left"}
		        
		        ],
        },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
    {id:1, strategicObjectives:"Office of the CEO", performanceIndicators:"8", annualTarget:"7", annualTargetAchieved:"1", plannedTargets:"0", achievedTargets:"88%", challenges:"", intervention:""},
    {id:2, strategicObjectives:"Office of the CEO", performanceIndicators:"8", annualTarget:"7", annualTargetAchieved:"1", plannedTargets:"0", achievedTargets:"88%", challenges:"", intervention:""},
    {id:3, strategicObjectives:"Office of the CEO", performanceIndicators:"8", annualTarget:"7", annualTargetAchieved:"1", plannedTargets:"0", achievedTargets:"88%", challenges:"", intervention:""},
    {id:5, strategicObjectives:"Office of the CEO", performanceIndicators:"8", annualTarget:"7", annualTargetAchieved:"1", plannedTargets:"0", achievedTargets:"88%", challenges:"", intervention:""},
    {id:6, strategicObjectives:"Office of the CEO", performanceIndicators:"8", annualTarget:"7", annualTargetAchieved:"1", plannedTargets:"0", achievedTargets:"88%", challenges:"", intervention:""}
   
    
    
];

//load sample data into the table
$("#office_table").tabulator("setData", tabledata);


//corporate_table

$("#corporate_table").tabulator({
	//height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"name", dir:"asc"},
	],
    columns:[ //Define Table Columns
        {title:"Strategic Objectives", field:"strategicObjectives1", width:150},
        {title:"Performance Indicators", field:"performanceIndicators1", align:"center"},
        {//create column group
            title:"ANNUAL PERFORMANCE",
            columns:[
		        {title:"Annual Target 2017/18", field:"annualTarget1", align:"center"},
		        {title:"Annual Target Achieved-to-date", field:"annualTargetAchieved1", align:"center"},
		    ],
        },
        {//create column group
            title:"QUARTERLY PERFORMANCE",
            columns:[
		        {title:"Q1 Planned Targets", field:"plannedTargets1", align:"center"},
		        {title:"Q1 Achieved Targets", field:"achievedTargets1", align:"center"},
		        {title:"Challenges", field:"challenges1", align:"left"},
		        {title:"Intervention", field:"intervention1", align:"left"}
		        
		        ],
        },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
    {id:1, strategicObjectives1:"Office of the CEO", performanceIndicators1:"8", annualTarget1:"7", annualTargetAchieved1:"1", plannedTargets1:"0", achievedTargets1:"88%", challenges1:"", intervention1:""},
    {id:2, strategicObjectives1:"Office of the CEO", performanceIndicators1:"8", annualTarget1:"7", annualTargetAchieved1:"1", plannedTargets1:"0", achievedTargets1:"88%", challenges1:"", intervention1:""},
    {id:3, strategicObjectives1:"Office of the CEO", performanceIndicators1:"8", annualTarget1:"7", annualTargetAchieved1:"1", plannedTargets1:"0", achievedTargets1:"88%", challenges1:"", intervention1:""},
    {id:5, strategicObjectives1:"Office of the CEO", performanceIndicators1:"8", annualTarget1:"7", annualTargetAchieved1:"1", plannedTargets1:"0", achievedTargets1:"88%", challenges1:"", intervention1:""},
    {id:6, strategicObjectives1:"Office of the CEO", performanceIndicators1:"8", annualTarget1:"7", annualTargetAchieved1:"1", plannedTargets1:"0", achievedTargets1:"88%", challenges1:"", intervention1:""}
];

//load sample data into the table
$("#corporate_table").tabulator("setData", tabledata);


//finance_table

$("#finance_table").tabulator({
	//height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"name", dir:"asc"},
	],
    columns:[ //Define Table Columns
        {title:"Strategic Objectives", field:"strategicObjectives2", width:150},
        {title:"Performance Indicators", field:"performanceIndicators2", align:"center"},
        {//create column group
            title:"ANNUAL PERFORMANCE",
            columns:[
		        {title:"Annual Target 2017/18", field:"annualTarget2", align:"center"},
		        {title:"Annual Target Achieved-to-date", field:"annualTargetAchieved2", align:"center"},
		    ],
        },
        {//create column group
            title:"QUARTERLY PERFORMANCE",
            columns:[
		        {title:"Q1 Planned Targets", field:"plannedTargets2", align:"center"},
		        {title:"Q1 Achieved Targets", field:"achievedTargets2", align:"center"},
		        {title:"Challenges", field:"challenges2", align:"left"},
		        {title:"Intervention", field:"intervention2", align:"left"}
		        
		        ],
        },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
{id:1, strategicObjectives2:"Office of the CEO", performanceIndicators2:"8", annualTarget2:"7", annualTargetAchieved2:"1", plannedTargets2:"0", achievedTargets2:"88%", challenges2:"", intervention2:""},
{id:2, strategicObjectives2:"Office of the CEO", performanceIndicators2:"8", annualTarget2:"7", annualTargetAchieved2:"1", plannedTargets2:"0", achievedTargets2:"88%", challenges2:"", intervention2:""},
{id:3, strategicObjectives2:"Office of the CEO", performanceIndicators2:"8", annualTarget2:"7", annualTargetAchieved2:"1", plannedTargets2:"0", achievedTargets2:"88%", challenges2:"", intervention2:""},
{id:4, strategicObjectives2:"Office of the CEO", performanceIndicators2:"8", annualTarget2:"7", annualTargetAchieved2:"1", plannedTargets2:"0", achievedTargets2:"88%", challenges2:"", intervention2:""},
{id:5, strategicObjectives2:"Office of the CEO", performanceIndicators2:"8", annualTarget2:"7", annualTargetAchieved2:"1", plannedTargets2:"0", achievedTargets2:"88%", challenges2:"", intervention2:""}
];

//load sample data into the table
$("#finance_table").tabulator("setData", tabledata);





//strategy_table

$("#strategy_table").tabulator({
	//height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"name", dir:"asc"},
	],
    columns:[ //Define Table Columns
        {title:"Strategic Objectives", field:"strategicObjectives3", width:150},
        {title:"Performance Indicators", field:"performanceIndicators3", align:"center"},
        {//create column group
            title:"ANNUAL PERFORMANCE",
            columns:[
		        {title:"Annual Target 2017/18", field:"annualTarget3", align:"center"},
		        {title:"Annual Target Achieved-to-date", field:"annualTargetAchieved3", align:"center"},
		    ],
        },
        {//create column group
            title:"QUARTERLY PERFORMANCE",
            columns:[
		        {title:"Q1 Planned Targets", field:"plannedTargets3", align:"center"},
		        {title:"Q1 Achieved Targets", field:"achievedTargets3", align:"center"},
		        {title:"Challenges", field:"challenges3", align:"left"},
		        {title:"Intervention", field:"intervention3", align:"left"}
		        
		        ],
        },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
    {id:1, strategicObjectives3:"Office of the CEO", performanceIndicators3:"8", annualTarget3:"7", annualTargetAchieved3:"1", plannedTargets3:"0", achievedTargets3:"88%", challenges3:"", intervention3:""},
    {id:2, strategicObjectives3:"Office of the CEO", performanceIndicators3:"8", annualTarget3:"7", annualTargetAchieved3:"1", plannedTargets3:"0", achievedTargets3:"88%", challenges3:"", intervention3:""},
    {id:3, strategicObjectives3:"Office of the CEO", performanceIndicators3:"8", annualTarget3:"7", annualTargetAchieved3:"1", plannedTargets3:"0", achievedTargets3:"88%", challenges3:"", intervention3:""},
    {id:4, strategicObjectives3:"Office of the CEO", performanceIndicators3:"8", annualTarget3:"7", annualTargetAchieved3:"1", plannedTargets3:"0", achievedTargets3:"88%", challenges3:"", intervention3:""},
    {id:5, strategicObjectives3:"Office of the CEO", performanceIndicators3:"8", annualTarget3:"7", annualTargetAchieved3:"1", plannedTargets3:"0", achievedTargets3:"88%", challenges3:"", intervention3:""}
   
];

//load sample data into the table
$("#strategy_table").tabulator("setData", tabledata);



//properties_table

$("#properties_table").tabulator({
	//height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"name", dir:"asc"},
	],
    columns:[ //Define Table Columns
        {title:"Strategic Objectives", field:"strategicObjectives4", width:150},
        {title:"Performance Indicators", field:"performanceIndicators4", align:"center"},
        {//create column group
            title:"ANNUAL PERFORMANCE",
            columns:[
		        {title:"Annual Target 2017/18", field:"annualTarget4", align:"center"},
		        {title:"Annual Target Achieved-to-date", field:"annualTargetAchieved4", align:"center"},
		    ],
        },
        {//create column group
            title:"QUARTERLY PERFORMANCE",
            columns:[
		        {title:"Q1 Planned Targets", field:"plannedTargets4", align:"center"},
		        {title:"Q1 Achieved Targets", field:"achievedTargets4", align:"center"},
		        {title:"Challenges", field:"challenges4", align:"left"},
		        {title:"Intervention", field:"intervention4", align:"left"}
		        
		        ],
        },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
    {id:1, strategicObjectives4:"Office of the CEO", performanceIndicators4:"8", annualTarget4:"7", annualTargetAchieved4:"1", plannedTargets4:"0", achievedTargets4:"88%", challenges4:"", intervention4:""},
    {id:2, strategicObjectives4:"Office of the CEO", performanceIndicators4:"8", annualTarget4:"7", annualTargetAchieved4:"1", plannedTargets4:"0", achievedTargets4:"88%", challenges4:"", intervention4:""},
    {id:3, strategicObjectives4:"Office of the CEO", performanceIndicators4:"8", annualTarget4:"7", annualTargetAchieved4:"1", plannedTargets4:"0", achievedTargets4:"88%", challenges4:"", intervention4:""},
    {id:4, strategicObjectives4:"Office of the CEO", performanceIndicators4:"8", annualTarget4:"7", annualTargetAchieved4:"1", plannedTargets4:"0", achievedTargets4:"88%", challenges4:"", intervention4:""},
    {id:5, strategicObjectives4:"Office of the CEO", performanceIndicators4:"8", annualTarget4:"7", annualTargetAchieved4:"1", plannedTargets4:"0", achievedTargets4:"88%", challenges4:"", intervention4:""}
];

//load sample data into the table
$("#properties_table").tabulator("setData", tabledata);




//funding_table

$("#funding_table").tabulator({
	//height:205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    layout:"fitColumns",//fit columns to width of table (optional)
    tooltips:true,
	addRowPos:"top",
	history:true,
	pagination:"local",
	paginationSize:7,
	movableColumns:true,
	resizableRows:true,
	initialSort:[
		{column:"name", dir:"asc"},
	],
    columns:[ //Define Table Columns
        {title:"Strategic Objectives", field:"strategicObjectives5", width:150},
        {title:"Performance Indicators", field:"performanceIndicators5", align:"center"},
        {//create column group
            title:"ANNUAL PERFORMANCE",
            columns:[
		        {title:"Annual Target 2017/18", field:"annualTarget5", align:"center"},
		        {title:"Annual Target Achieved-to-date", field:"annualTargetAchieved5", align:"center"},
		    ],
        },
        {//create column group
            title:"QUARTERLY PERFORMANCE",
            columns:[
		        {title:"Q1 Planned Targets", field:"plannedTargets5", align:"center"},
		        {title:"Q1 Achieved Targets", field:"achievedTargets5", align:"center"},
		        {title:"Challenges", field:"challenges5", align:"left"},
		        {title:"Intervention", field:"intervention5", align:"left"}
		        
		        ],
        },
    ],
    rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
    },
});

//define some sample data
var tabledata = [
    {id:1, strategicObjectives5:"Office of the CEO", performanceIndicators5:"8", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"88%", challenges5:"", intervention5:""},
    {id:2, strategicObjectives5:"Office of the CEO", performanceIndicators5:"8", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"88%", challenges5:"", intervention5:""},
    {id:3, strategicObjectives5:"Office of the CEO", performanceIndicators5:"8", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"88%", challenges5:"", intervention5:""},
    {id:4, strategicObjectives5:"Office of the CEO", performanceIndicators5:"8", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"88%", challenges5:"", intervention5:""},
    {id:5, strategicObjectives5:"Office of the CEO", performanceIndicators5:"8", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"88%", challenges5:"", intervention5:""}
];

//load sample data into the table
$("#funding_table").tabulator("setData", tabledata);
