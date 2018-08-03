package za.co.mega.controllers;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import za.co.mega.dao.AccountTypeDAO;
import za.co.mega.dao.AddressDAO;
import za.co.mega.dao.AllFundingDAO;
import za.co.mega.dao.GraphDAO;
import za.co.mega.dao.HousingDAO;
import za.co.mega.dao.FundingDetailedDAO;
import za.co.mega.file.ReaderFile;



@RestController("/")
public class AccountRestController {

	 @RequestMapping("/housing")
	    public List<HousingDAO> funding() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<HousingDAO> funding = new ArrayList<HousingDAO>();
			String Query = "select ClientName,DateOfApproval,TypeOfLoan,LocalMunicipality,Region,Amount from westbank.housing";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add(new HousingDAO(rs.getString("ClientName"),rs.getString("DateOfApproval"),rs.getString("TypeOfLoan"),rs.getString("LocalMunicipality"),rs.getString("Region"),rs.getString("Amount")
							  ));
				   }
				
		return 	funding;
		}
	 @RequestMapping("/funding")
	    public List<AllFundingDAO> retriveAllFunding() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<AllFundingDAO> funding = new ArrayList<AllFundingDAO>();
			String Query = "select ClientName,DateOfApproval,JobsCreated,Male,Female,Disability,Youth,Total,BusinessDescription,Municipality,Region,Amount,Funding from westbank.allfunding";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add(new AllFundingDAO(rs.getString("ClientName"),rs.getString("DateOfApproval"),rs.getString("JobsCreated"),rs.getString("Male"),rs.getString("Female"),rs.getString("Disability"),
						rs.getString("Youth"),rs.getString("Total"),rs.getString("BusinessDescription"),rs.getString("Municipality"),rs.getString("Region"),rs.getString("Amount"),rs.getString("Funding")
							  ));
				   }
				
		return 	funding;
		}
	    
	 @RequestMapping("/funding/detailed/{name}")
	    public List<FundingDetailedDAO> fundingDetailed(@PathVariable String name) throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<FundingDetailedDAO> fundings = new ArrayList<FundingDetailedDAO>();
			String Query = "select funding,loan_status,quarter1,quarter2,quarter3,quarter4 from westbank.`epr_table-detailed` WHERE funding='"+name+"'";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				fundings.add(new FundingDetailedDAO(rs.getString("funding"),rs.getString("loan_status"),rs.getInt("quarter1"),rs.getInt("quarter2"),rs.getInt("quarter3"),rs.getInt("quarter4")
							  ));
				   }
				
		return 	fundings;
		}
	 
	 @RequestMapping("/insert/housing")
	    public void insertHousing() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException, IOException{
			String driverName = "org.mariadb.jdbc.Driver";
			
			ReaderFile file =  new ReaderFile();
			List<String> contents = file.dataRetrieved("C:\\Users\\s983969\\Documents\\Aubrey\\Housing.csv");
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/projectx","root","root");
	        String queryString = "INSERT INTO westbank.housing(Number,ClientName,DateOfApproval,TypeOfLoan,LocalMunicipality,Region,Amount) VALUES(?,?,?,?,?,?,?)";
	        PreparedStatement ptmt ;
	        for(String current: contents){
	        	
	        String currentArray[] =current.split(",");
	        
	        ptmt = conn.prepareStatement(queryString);
	        ptmt.setString(1, currentArray[0]);
	        ptmt.setString(2, currentArray[1]);
	        ptmt.setString(3, currentArray[2]);
	        ptmt.setString(4, currentArray[3]);
	        ptmt.setString(5, currentArray[4]);
	        ptmt.setString(6, currentArray[5]);
	        ptmt.setString(7, currentArray[6]);
	        ptmt.executeUpdate();
	        
	        }
	        System.out.println("Data Added Successfully");

	        
		}
	 
	 @RequestMapping("/insert/Funding")
	    public void insertAllFunding() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException, IOException{
			String driverName = "org.mariadb.jdbc.Driver";
			
			ReaderFile file =  new ReaderFile();
			List<String> contents = file.dataRetrieved("C:\\Users\\s983969\\Documents\\Aubrey\\Book1_arranged.csv");
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/projectx","root","root");
	        String queryString = "INSERT INTO westbank.allfunding(ClientName,DateOfApproval,JobsCreated,Male,Female,Disability,Youth,Total,BusinessDescription,Municipality,Region,Amount,Funding) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
	        PreparedStatement ptmt ;
	        for(String current: contents){
	        	
	        String currentArray[] =current.split(",");
	        
	        ptmt = conn.prepareStatement(queryString);
	        ptmt.setString(1, currentArray[0]);
	        ptmt.setString(2, currentArray[1]);
	        ptmt.setString(3, currentArray[2]);
	        ptmt.setString(4, currentArray[3]);
	        ptmt.setString(5, currentArray[4]);
	        ptmt.setString(6, currentArray[5]);
	        ptmt.setString(7, currentArray[6]);
	        ptmt.setString(8, currentArray[7]);
	        ptmt.setString(9, currentArray[12]);
	        ptmt.setString(10, currentArray[13]);
	        ptmt.setString(11, currentArray[14]);
	        ptmt.setString(12, currentArray[15]);
	        ptmt.setString(13, currentArray[16]);
	        

	        ptmt.executeUpdate();
	        
	        }
	        System.out.println("Data Added Successfully");

	        
		}
	 
	 @RequestMapping("/funding/criteria/{fundings}/{municipality}/{region}/{business}")
	    public List<AllFundingDAO> searchCriteria(@PathVariable String fundings,String municipality,String region,String business) throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
		 List<AllFundingDAO> funding = new ArrayList<AllFundingDAO>();
			String Query = "select ClientName,DateOfApproval,JobsCreated,Male,Female,Disability,Youth,Total,BusinessDescription,Municipality,Region,Amount,Funding from westbank.`allfunding` WHERE Funding='"+fundings+"' OR Municipality='"+municipality+"' OR Region='"+region+"' OR BusinessDescription='"+business+"'";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add(new AllFundingDAO(rs.getString("ClientName"),rs.getString("DateOfApproval"),rs.getString("JobsCreated"),rs.getString("Male"),rs.getString("Female"),rs.getString("Disability"),
						rs.getString("Youth"),rs.getString("Total"),rs.getString("BusinessDescription"),rs.getString("Municipality"),rs.getString("Region"),rs.getString("Amount"),rs.getString("Funding")
							  ));
				   }
				
		return 	funding;
		}
	 
	 //Funding
	 
	 @RequestMapping("/funding/new")
	    public List<String> fundingDropDown() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<String> funding = new ArrayList<String>();
			String Query = "select distinct Funding from westbank.allfunding";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add((rs.getString("Funding")
							  ));
				   }
				
		return 	funding;
		}
	 
	 //Municipality
	 
	 @RequestMapping("/municipality/new")
	    public List<String> municipalityDropDown() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<String> funding = new ArrayList<String>();
			String Query = "select distinct Municipality from westbank.allfunding";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add((rs.getString("Municipality")
							  ));
				   }
				
		return 	funding;
		}
	 
	 //Region
	 
	 @RequestMapping("/region/new")
	    public List<String> regionDropDown() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<String> funding = new ArrayList<String>();
			String Query = "select distinct Region from westbank.allfunding";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add((rs.getString("Region")
							  ));
				   }
				
		return 	funding;
		}
	 
	 //Business
	 
	 @RequestMapping("/business/new")
	    public List<String> businessDropDown() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<String> funding = new ArrayList<String>();
			String Query = "select distinct BusinessDescription from westbank.allfunding";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add((rs.getString("BusinessDescription")
							  ));
				   }
				
		return 	funding;
		}
	 
	 
	 @RequestMapping("/smme/new")
	    public List<GraphDAO> smmeGraph() throws SQLException, InstantiationException, IllegalAccessException, ClassNotFoundException{
			List<GraphDAO> funding = new ArrayList<GraphDAO>();
			String Query = "select ClientName, Amount  from  westbank.allfunding where DateOfApproval LIKE '%2016' && Funding Like 'SMME'";
			String driverName = "org.mariadb.jdbc.Driver";
			Class.forName(driverName).newInstance();
			Connection conn = DriverManager.getConnection("jdbc:mariadb://localhost:3307/westbank","root","root");
			Statement stm = conn.createStatement();
			ResultSet rs =stm.executeQuery(Query);
			ResultSetMetaData rsmd = rs.getMetaData(); 
			int columnCount = rsmd.getColumnCount();

			while (rs.next()) {              
				funding.add(new GraphDAO(rs.getString("ClientName"),rs.getDouble("Amount")
							  ));
				   }
				
		return 	funding;
		}
}
