package za.co.mega.dao;

public class GraphDAO {

	private String clientName;
	private double amount;
	/**
	 * @param clientName
	 * @param amount
	 */
	/**
	 * @param clientName
	 * @param amount
	 */
	public GraphDAO(String clientName, double amount) {
		super();
		this.clientName = clientName;
		this.amount = amount;
	}
	/**
	 * @return the clientName
	 */
	public String getClientName() {
		return clientName;
	}
	/**
	 * @return the amount
	 */
	public double getAmount() {
		return amount;
	}
	/**
	 * @param clientName the clientName to set
	 */
	public void setClientName(String clientName) {
		this.clientName = clientName;
	}
	/**
	 * @param amount the amount to set
	 */
	public void setAmount(double amount) {
		this.amount = amount;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "GraphDAO [clientName=" + clientName + ", amount=" + amount
				+ "]";
	}
	
	
}