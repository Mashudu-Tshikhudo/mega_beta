package za.co.mega.file;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import za.co.mega.controllers.AccountRestController;

public class TestReader {

	public static void main(String[] args) throws IOException, InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		ReaderFile file =  new ReaderFile();
		List<String> contents = file.dataRetrieved("C:\\Users\\s983969\\Documents\\MashuduTesting\\Quarterly1.csv");
		int countFullLines = 0;
		int countEmptyLines = 0;
		int countHeadings = 0;
		
		for(String n: contents){
			
			//count++;
			String[] currentLine = n.split(",(?=([^\"]*\"[^\"]*\")*[^\"]*$)");
			if(currentLine.length == 1){
				countHeadings++;
				System.out.println(currentLine[0]);
			}else if(currentLine.length == 9){
				countFullLines++;
				System.out.println(currentLine[0]+" "+currentLine[1]+" "+currentLine[2]+" "+currentLine[3]+" "+currentLine[4]+" ");
			}else if(currentLine.length == 0){
				countEmptyLines++;
				//System.out.println(currentLine[0]);
			}
		}
		
		System.out.println("Headings lines: "+countHeadings);
		System.out.println("Full lines: "+countFullLines); 
		System.out.println("Empty lines: "+countEmptyLines);
		
		//AccountRestController acc=  new AccountRestController();
		//acc.insertAllFunding();
	}
	
}
