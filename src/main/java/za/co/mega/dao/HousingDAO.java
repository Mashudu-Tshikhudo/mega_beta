package za.co.mega.dao;

public class HousingDAO {
	private String ClientName;
	private String DateOfApproval;
	private String TypeOfLoan;
	private String LocalMunicipality;
	private String Region;
	private String Amount;
	/**
	 * @param clientName
	 * @param dateOfApproval
	 * @param typeOfLoan
	 * @param localMunicipality
	 * @param region
	 * @param amount
	 */
	public HousingDAO(String clientName, String dateOfApproval,
			String typeOfLoan, String localMunicipality, String region,
			String amount) {
		super();
		ClientName = clientName;
		DateOfApproval = dateOfApproval;
		TypeOfLoan = typeOfLoan;
		LocalMunicipality = localMunicipality;
		Region = region;
		Amount = amount;
	}
	/**
	 * @return the clientName
	 */
	public String getClientName() {
		return ClientName;
	}
	/**
	 * @return the dateOfApproval
	 */
	public String getDateOfApproval() {
		return DateOfApproval;
	}
	/**
	 * @return the typeOfLoan
	 */
	public String getTypeOfLoan() {
		return TypeOfLoan;
	}
	/**
	 * @return the localMunicipality
	 */
	public String getLocalMunicipality() {
		return LocalMunicipality;
	}
	/**
	 * @return the region
	 */
	public String getRegion() {
		return Region;
	}
	/**
	 * @return the amount
	 */
	public String getAmount() {
		return Amount;
	}
	/**
	 * @param clientName the clientName to set
	 */
	public void setClientName(String clientName) {
		ClientName = clientName;
	}
	/**
	 * @param dateOfApproval the dateOfApproval to set
	 */
	public void setDateOfApproval(String dateOfApproval) {
		DateOfApproval = dateOfApproval;
	}
	/**
	 * @param typeOfLoan the typeOfLoan to set
	 */
	public void setTypeOfLoan(String typeOfLoan) {
		TypeOfLoan = typeOfLoan;
	}
	/**
	 * @param localMunicipality the localMunicipality to set
	 */
	public void setLocalMunicipality(String localMunicipality) {
		LocalMunicipality = localMunicipality;
	}
	/**
	 * @param region the region to set
	 */
	public void setRegion(String region) {
		Region = region;
	}
	/**
	 * @param amount the amount to set
	 */
	public void setAmount(String amount) {
		Amount = amount;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "FundingDAO [ClientName=" + ClientName + ", DateOfApproval="
				+ DateOfApproval + ", TypeOfLoan=" + TypeOfLoan
				+ ", LocalMunicipality=" + LocalMunicipality + ", Region="
				+ Region + ", Amount=" + Amount + "]";
	}
	
	
}