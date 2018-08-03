package za.co.mega.file;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

public class ReaderFile {
	

	
	  
public List<String> dataRetrieved(String fileName) throws IOException{
	     
		  List<String> brokerlist = new ArrayList<String>();
	          
		  File file =new File(fileName);
	    	if(file.exists()){
	      
	    	FileReader fileReader=new FileReader(file);
	      
	         BufferedReader bufferedReader = new BufferedReader(fileReader);
	      	      String readData  =null;
			      do{
			      readData =bufferedReader.readLine();
			     
			      if(readData!=null){
			       
			      brokerlist.add(readData);
			      }
		     }while(readData!=null);{
		    	 
		     }
	    
	  }
	      return brokerlist;
	  }
	  
	  
}