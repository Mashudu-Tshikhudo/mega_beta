package za.co.mega.dao;

public class AccountTypeDAO {

	private String name;

	public AccountTypeDAO(String name) {
		super();
		this.name = name;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "AccountTypeDAO [name=" + name + "]";
	}
	
	
}
