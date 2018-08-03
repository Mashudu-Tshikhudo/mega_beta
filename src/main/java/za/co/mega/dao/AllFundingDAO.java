package za.co.mega.dao;

public class AllFundingDAO {

	private String ClientName,DateOfApproval,JobsCreated,Male,Female,Disability,Youth,Total,BusinessDescription,Municipality,Region,Amount,Funding;

	/**
	 * @param clientName
	 * @param dateOfApproval
	 * @param jobsCreated
	 * @param male
	 * @param female
	 * @param disability
	 * @param youth
	 * @param total
	 * @param businessDescription
	 * @param municipality
	 * @param region
	 * @param amount
	 * @param funding
	 */
	public AllFundingDAO(String clientName, String dateOfApproval,
			String jobsCreated, String male, String female, String disability,
			String youth, String total, String businessDescription,
			String municipality, String region, String amount, String funding) {
		super();
		ClientName = clientName;
		DateOfApproval = dateOfApproval;
		JobsCreated = jobsCreated;
		Male = male;
		Female = female;
		Disability = disability;
		Youth = youth;
		Total = total;
		BusinessDescription = businessDescription;
		Municipality = municipality;
		Region = region;
		Amount = amount;
		Funding = funding;
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
	 * @return the jobsCreated
	 */
	public String getJobsCreated() {
		return JobsCreated;
	}

	/**
	 * @return the male
	 */
	public String getMale() {
		return Male;
	}

	/**
	 * @return the female
	 */
	public String getFemale() {
		return Female;
	}

	/**
	 * @return the disability
	 */
	public String getDisability() {
		return Disability;
	}

	/**
	 * @return the youth
	 */
	public String getYouth() {
		return Youth;
	}

	/**
	 * @return the total
	 */
	public String getTotal() {
		return Total;
	}

	/**
	 * @return the businessDescription
	 */
	public String getBusinessDescription() {
		return BusinessDescription;
	}

	/**
	 * @return the municipality
	 */
	public String getMunicipality() {
		return Municipality;
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
	 * @return the funding
	 */
	public String getFunding() {
		return Funding;
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
	 * @param jobsCreated the jobsCreated to set
	 */
	public void setJobsCreated(String jobsCreated) {
		JobsCreated = jobsCreated;
	}

	/**
	 * @param male the male to set
	 */
	public void setMale(String male) {
		Male = male;
	}

	/**
	 * @param female the female to set
	 */
	public void setFemale(String female) {
		Female = female;
	}

	/**
	 * @param disability the disability to set
	 */
	public void setDisability(String disability) {
		Disability = disability;
	}

	/**
	 * @param youth the youth to set
	 */
	public void setYouth(String youth) {
		Youth = youth;
	}

	/**
	 * @param total the total to set
	 */
	public void setTotal(String total) {
		Total = total;
	}

	/**
	 * @param businessDescription the businessDescription to set
	 */
	public void setBusinessDescription(String businessDescription) {
		BusinessDescription = businessDescription;
	}

	/**
	 * @param municipality the municipality to set
	 */
	public void setMunicipality(String municipality) {
		Municipality = municipality;
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

	/**
	 * @param funding the funding to set
	 */
	public void setFunding(String funding) {
		Funding = funding;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "AllFundingDAO [ClientName=" + ClientName + ", DateOfApproval="
				+ DateOfApproval + ", JobsCreated=" + JobsCreated + ", Male="
				+ Male + ", Female=" + Female + ", Disability=" + Disability
				+ ", Youth=" + Youth + ", Total=" + Total
				+ ", BusinessDescription=" + BusinessDescription
				+ ", Municipality=" + Municipality + ", Region=" + Region
				+ ", Amount=" + Amount + ", Funding=" + Funding + "]";
	}
	
	
}
