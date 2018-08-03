package za.co.mega.controllers;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



import za.co.mega.dao.AccountTypeDAO;
import za.co.mega.dao.AddressDAO;


@Controller
public class AccountController {
	
	@RequestMapping("/")
    public String redirToLogin(){
        return "account/login";
    }

	@RequestMapping("/epr_table")
    public String redirToTable(){
        return "tables/epr_table";
    }
	
	@RequestMapping("/epr_tablecurrent")
    public String redirToTableCurrent(){
        return "tables/epr_tablecurrent";
    }
	
	@RequestMapping("/epr_tablebasic")
    public String redirToTableBasic(){
        return "tables/epr_tablebasic";
    }
	
	@RequestMapping("/epr_graph")
    public String redirToGraph(){
        return "graphs/epr_graph";
    }
	
	@RequestMapping("/epr_graphcurrent")
    public String redirToGraphCurrent(){
        return "graphs/epr_graphcurrent";
    }
	
	@RequestMapping("/epr_maps")
    public String redirToMap(){
        return "maps/epr_map";
    }
	
	@RequestMapping("/epr_impact")
    public String redirToImpact(){
        return "impact/epr_impact";
    }
	
	@RequestMapping("/welcome")
    public String redirToWelcomePage(){
        return "welcome/welcomepage";
    }
	
	@RequestMapping("/landingpage")
    public String redirToLandingPage(){
        return "welcome/landingpage";
    }
	
	@RequestMapping("/welcomecurrent")
    public String redirToWelcomeCurrent(){
        return "welcome/welcomepagecurrent";
    }

	@RequestMapping("/table_quarter_one")
    public String redirToWelcomeBasic(){
        return "welcome/welcomepagetable";
    }
	
	@RequestMapping("/table_quarter_two")
    public String redirToTable_quarter_two(){
        return "tables/table_quarter_two";
    }
	
	@RequestMapping("/table_quarter_three")
    public String redirToTable_quarter_three(){
        return "tables/table_quarter_three";
    }
	
	@RequestMapping("/table_quarter_four")
    public String redirToTable_quarter_four(){
        return "tables/table_quarter_four";
    }
	
	@RequestMapping("/officetable")
	public String redirToofficetable(){
        return "current/officetable";
    }
	
	@RequestMapping("/tables_quarters")
	public String redirToTables_quarters(){
		return "welcome/welcomepagecurrent_tables_quarters";
	}
	
	@RequestMapping("/graphs_quarters")
	public String redirToGraphs_quarters(){
		return "welcome/welcomepagecurrent_graphs_quarters";
	}
	 
}
