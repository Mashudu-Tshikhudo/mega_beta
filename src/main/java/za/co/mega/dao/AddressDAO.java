package za.co.mega.dao;

public class AddressDAO {
	
	private String street_address;

	/**
	 * @param street_address
	 */
	public AddressDAO(String street_address) {
		super();
		this.street_address = street_address;
	}

	/**
	 * @return the street_address
	 */
	public String getStreet_address() {
		return street_address;
	}

	/**
	 * @param street_address the street_address to set
	 */
	public void setStreet_address(String street_address) {
		this.street_address = street_address;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "AddressDAO [street_address=" + street_address + "]";
	}

	
	
}
