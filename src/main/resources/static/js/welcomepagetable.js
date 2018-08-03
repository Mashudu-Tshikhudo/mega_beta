$("#example-table-download").click(function(){
	$("#example-table").tabulator("download", "csv", "combined_perfomance.csv");
});

$("#office_table_download").click(function(){
	$("#office_table").tabulator("download", "csv", "office_table.csv");
});

$("#corporate_table_download").click(function(){
	$("#corporate_table").tabulator("download", "csv", "corporate_table.csv");
});

$("#finance_table_download").click(function(){
	$("#finance_table").tabulator("download", "csv", "finance_table.csv");
});

$("#strategy_table_download").click(function(){
	$("#strategy_table").tabulator("download", "csv", "strategy_table.csv");
});

$("#properties_table_download").click(function(){
	$("#properties_table").tabulator("download", "csv", "properties_table.csv");
});

$("#funding_table_download").click(function(){
	$("#funding_table").tabulator("download", "csv", "funding_table.csv");
});


$(document).ready(function(){    
	    $("#example-table").show();
	    $("#office_table").hide();
	    $("#corporate_table").hide();
		 $("#finance_table").hide();
		 $("#strategy_table").hide();
		 $("#properties_table").hide();
		 $("#funding_table").hide();
		 
		 $("#example-table-download").show();
       	 $("#office_table_download").hide();
       	 $("#corporate_table_download").hide();
       	 $("#finance_table_download").hide();
       	 $("#strategy_table_download").hide();
       	 $("#properties_table_download").hide();
       	 $("#funding_table_download").hide();
   
    
   
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
              title:"Quarter 1 Non-Financial Performance: Numeric Analysis",
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
        	 
        	 $("#example-table-download").hide();
        	 $("#office_table_download").show();
        	 $("#corporate_table_download").hide();
        	 $("#finance_table_download").hide();
        	 $("#strategy_table_download").hide();
        	 $("#properties_table_download").hide();
        	 $("#funding_table_download").hide();
        	 
        }else if(row.getData().id == 2){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").show();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").hide();
	       	 
	       	$("#example-table-download").hide();
	       	 $("#office_table_download").hide();
	       	 $("#corporate_table_download").show();
	       	 $("#finance_table_download").hide();
	       	 $("#strategy_table_download").hide();
	       	 $("#properties_table_download").hide();
	       	 $("#funding_table_download").hide();
	       	 
        }else if(row.getData().id == 3){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").show();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").hide();
	       	 
	       	$("#example-table-download").hide();
       	 $("#office_table_download").hide();
       	 $("#corporate_table_download").hide();
       	 $("#finance_table_download").show();
       	 $("#strategy_table_download").hide();
       	 $("#properties_table_download").hide();
       	 $("#funding_table_download").hide();
	       	 
        }else if(row.getData().id == 4){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").show();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").hide();
	       	 
	       	$("#example-table-download").hide();
       	 $("#office_table_download").hide();
       	 $("#corporate_table_download").hide();
       	 $("#finance_table_download").hide();
       	 $("#strategy_table_download").show();
       	 $("#properties_table_download").hide();
       	 $("#funding_table_download").hide();
	       	 
        }else if(row.getData().id == 5){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").show();
	       	 $("#funding_table").hide();
	       	 
	       	$("#example-table-download").hide();
       	 $("#office_table_download").hide();
       	 $("#corporate_table_download").hide();
       	 $("#finance_table_download").hide();
       	 $("#strategy_table_download").hide();
       	 $("#properties_table_download").show();
       	 $("#funding_table_download").hide();
        }else if(row.getData().id == 6){
        	
        	 $("#example-table").hide();
	       	 $("#office_table").hide();
	       	 $("#corporate_table").hide();
	       	 $("#finance_table").hide();
	       	 $("#strategy_table").hide();
	       	 $("#properties_table").hide();
	       	 $("#funding_table").show();
	       	 
	       	$("#example-table-download").hide();
       	 $("#office_table_download").hide();
       	 $("#corporate_table_download").hide();
       	 $("#finance_table_download").hide();
       	 $("#strategy_table_download").hide();
       	 $("#properties_table_download").hide();
       	 $("#funding_table_download").show();
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
    {id:1, strategicObjectives:"Enhanced organizational sustainability", performanceIndicators:"Rating on Operational Excellence", annualTarget:"1", annualTargetAchieved:"0", plannedTargets:"0", achievedTargets:"0", challenges:"None", intervention:"None"},
    {id:2, strategicObjectives:"Enhanced internal controls, systems and processes to ensure effective governance and risk management", performanceIndicators:"% achieved on Operational Excellence rating", annualTarget:"20%", annualTargetAchieved:"0", plannedTargets:"0", achievedTargets:"0", challenges:"None", intervention:"None"},
    {id:3, strategicObjectives:"Improved functionality of the Board/ Board Committees structures", performanceIndicators:"Optimal functionality of the Board/ Board Committee structures", annualTarget:"100%", annualTargetAchieved:"100%", plannedTargets:"100%", achievedTargets:"100%", challenges:"None", intervention:"None"},
    {id:5, strategicObjectives:"Review and conclude the Shareholders Compact", performanceIndicators:"Shareholders Compact reviewed by target date", annualTarget:"1", annualTargetAchieved:"1", plannedTargets:"1", achievedTargets:"1", challenges:"None", intervention:"None"},
    {id:6, strategicObjectives:"Review Board Charter", performanceIndicators:"Board Charter reviewed by target date", annualTarget:"0", annualTargetAchieved:"0", plannedTargets:"0", achievedTargets:"0", challenges:"None", intervention:"None"}
   
    
    
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
    {id:1, strategicObjectives1:"High Performing Organisation", performanceIndicators1:"% of Organisational Performance", annualTarget1:"70%", annualTargetAchieved1:"59%", plannedTargets1:"40%", achievedTargets1:"77%", challenges1:"None", intervention1:"None"},
    {id:2, strategicObjectives1:"Develop / review Performance Information Management Policy (PIMP)", performanceIndicators1:"PIMP developed / reviewed by target date", annualTarget1:"1", annualTargetAchieved1:"0", plannedTargets1:"1", achievedTargets1:"0", challenges1:"The review of PIMP is pending finalisation of audit by AG to ensure that all issues identified during the audit of performance information are addressed in the Policy ", intervention1:"PIMP to be reviewed after the final management letter has been received from the AG"},
    {id:3, strategicObjectives1:"Submit the approved Organisational Annual Performance Plans to the Shareholder", performanceIndicators1:"Organisational Annual Performance Plans submitted to the Shareholder by target date ", annualTarget1:"1", annualTargetAchieved1:"0", plannedTargets1:"0", achievedTargets1:"0", challenges1:"None", intervention1:"None"},
    {id:5, strategicObjectives1:"Submit the approved Strategic  Plans to the Shareholder", performanceIndicators1:"Strategic Plans submitted to the Shareholder by target date ", annualTarget1:"1", annualTargetAchieved1:"0", plannedTargets1:"0", achievedTargets1:"0", challenges1:"None", intervention1:"None"},
    {id:6, strategicObjectives1:"Facilitate the Development of Organisational Performance Information Reporting", performanceIndicators1:"Quarterly Performance Information Reports submitted to the Shareholder by target date", annualTarget1:"4", annualTargetAchieved1:"1", plannedTargets1:"1", achievedTargets1:"1", challenges1:"None", intervention1:"None"}
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
{id:1, strategicObjectives2:"Review Asset Management Policy", performanceIndicators2:"Asset Management Policy reviewed", annualTarget2:"1", annualTargetAchieved2:"1", plannedTargets2:"1", achievedTargets2:"1", challenges2:"None", intervention2:"None"},
{id:2, strategicObjectives2:"Update FAR with investment properties", performanceIndicators2:"FAR updated with Investment properties", annualTarget2:"1", annualTargetAchieved2:"1", plannedTargets2:"1", achievedTargets2:"1", challenges2:"None", intervention2:"None"},
{id:3, strategicObjectives2:"Update FAR with bulk infrastructure assets", performanceIndicators2:"FAR updated with bulk infrastructure assets", annualTarget2:"1", annualTargetAchieved2:"1", plannedTargets2:"1", achievedTargets2:"1", challenges2:"None", intervention2:"None"},
{id:4, strategicObjectives2:"Develop Standard Operating Procedures", performanceIndicators2:"Standard Operating Procedures developed", annualTarget2:"1", annualTargetAchieved2:"0", plannedTargets2:"1", achievedTargets2:"0", challenges2:"Due to limited capacity, preference was given to the 2016/17 audit processes to improve the audit outcome.", intervention2:"This will be prioritised in the 2nd and 3rd quarter."},
{id:5, strategicObjectives2:"Improved compliance with SCM prescripts", performanceIndicators2:"Rand value reduction in occurrence of Irregular Expenditure", annualTarget2:"R128m", annualTargetAchieved2:"0", plannedTargets2:"0", achievedTargets2:"0", challenges2:"None", intervention2:"None"}
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
    {id:1, strategicObjectives3:"Increased value of  investment  facilitated", performanceIndicators3:"Value of Investments attracted", annualTarget3:"R500m", annualTargetAchieved3:"0", plannedTargets3:"R100m", achievedTargets3:"0", challenges3:"Prolonged negotiations with potential investors resulted in delays to convert investment enquiries into investment projects", intervention3:"Conclude negotiation and sign MOUs with potential investors.  Investments enquiries worth R600m is being facilitated."},
    {id:2, strategicObjectives3:"Increased investment project facilitated", performanceIndicators3:"Number of investment projects facilitated", annualTarget3:"10", annualTargetAchieved3:"0", plannedTargets3:"2", achievedTargets3:"0", challenges3:"Prolonged negotiations with potential investors resulted in delays to convert investment enquiries into investment projects", intervention3:"Conclude negotiation and sign MOUs with potential investors.  Investments enquiries worth R600m is being facilitated."},
    {id:3, strategicObjectives3:"Host high impact Investor Conference", performanceIndicators3:"Number of impact Investor Conference hosted", annualTarget3:"0", annualTargetAchieved3:"1", plannedTargets3:"0", achievedTargets3:"1", challenges3:"None", intervention3:"None"},
    {id:4, strategicObjectives3:"Package investment projects", performanceIndicators3:"Number of packaged investment opportunities taken up by investors", annualTarget3:"4", annualTargetAchieved3:"0", plannedTargets3:"1", achievedTargets3:"0", challenges3:"Low investor appetite", intervention3:"Continuous marketing of packaged projects through inward and outward missions, as well as other platforms."},
    {id:5, strategicObjectives3:"Increased access to export opportunities for MP export companies", performanceIndicators3:"Export opportunities accessed for MP export companies", annualTarget3:"10", annualTargetAchieved3:"5", plannedTargets3:"2", achievedTargets3:"5", challenges3:"None", intervention3:"None"}
   
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
    {id:1, strategicObjectives4:"Increased generation of  investment projects", performanceIndicators4:"Rand value of investment projects approvals", annualTarget4:"R600m", annualTargetAchieved4:"0", plannedTargets4:"0", achievedTargets4:"0", challenges4:"None", intervention4:"None"},
    {id:2, strategicObjectives4:"Increased investment projects on pipeline", performanceIndicators4:"Number of investment projects on pipeline", annualTarget4:"15", annualTargetAchieved4:"0", plannedTargets4:"15", achievedTargets4:"0", challenges4:"Lack of internal capacity to conduct high level feasibility studies.  No budget has been set aside for conducting these feasibility studies", intervention4:"A number of projects have been identified that will be taken through the feasibility studies by internally appointed development managers.  Appointments to be made by end of the second quarter "},
    {id:3, strategicObjectives4:"Complete Project Feasibility studies", performanceIndicators4:"Number of project feasibility studies completed", annualTarget4:"15", annualTargetAchieved4:"0", plannedTargets4:"15", achievedTargets4:"0", challenges4:"Lack of internal capacity to conduct high level feasibility studies.  No budget has been set aside for conducting these feasibility studies", intervention4:"A number of projects have been identified that will be taken through the feasibility studies by internally appointed development managers.  Appointments to be made by end of the second quarter "},
    {id:4, strategicObjectives4:"Conduct high level feasibility studies of identified projects", performanceIndicators4:"Number of high level feasibility studies conducted by the end of each Financial Year.", annualTarget4:"15", annualTargetAchieved4:"0", plannedTargets4:"5", achievedTargets4:"0", challenges4:"Lack of internal capacity to conduct high level feasibility studies.  No budget has been set aside for conducting these feasibility studies", intervention4:"A number of projects have been identified that will be taken through the feasibility studies by internally appointed development managers.  Appointments to be made by end of the second quarter "}
    
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
    {id:1, strategicObjectives5:"Provide financial support to SMMEs using internal funds", performanceIndicators5:"Value of loans approved to SMMEs", annualTarget5:"R30m", annualTargetAchieved5:"0", plannedTargets5:"R7,5m", achievedTargets5:"0", challenges5:"None", intervention5:"None"},
    {id:2, strategicObjectives5:"Provide financial support to Agricultural Businesses using internal funds", performanceIndicators5:"Value of loans approved to Agriculture Businesses", annualTarget5:"R0m", annualTargetAchieved5:"R0m", plannedTargets5:"R0m", achievedTargets5:"R0m", challenges5:"None", intervention5:"None"},
    {id:3, strategicObjectives5:"Provide financial support to Cooperatives using internal funds", performanceIndicators5:"Value of loans approved to Cooperatives", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"0", challenges5:"None", intervention5:"None"},
    {id:4, strategicObjectives5:"Provide financial support to home buyers using internal funds", performanceIndicators5:"Value of home loans approved using internal funds", annualTarget5:"7", annualTargetAchieved5:"1", plannedTargets5:"0", achievedTargets5:"88%", challenges5:"None", intervention5:"None"},
    {id:5, strategicObjectives5:"Support participants (suppliers, producers and cooperatives) within the Government Nutrition and Social Enterprise Programmes", performanceIndicators5:"Value of financial support: Government Nutrition and Social Enterprise Programmes", annualTarget5:"R17m", annualTargetAchieved5:"R37,7", plannedTargets5:"R3m", achievedTargets5:"R13,7m", challenges5:"None", intervention5:"None"}
];

//load sample data into the table
$("#funding_table").tabulator("setData", tabledata);
