package za.co.mega.dao;

public class FundingDetailedDAO {
	private String funding;
	private String loan_status;
	private int quarter1;
	private int quarter2;
	private int quarter3;
	private int quarter4;
	/**
	 * @param funding
	 * @param loan_status
	 * @param quarter1
	 * @param quarter2
	 * @param quarter3
	 * @param quarter4
	 */
	public FundingDetailedDAO(String funding, String loan_status, int quarter1,
			int quarter2, int quarter3, int quarter4) {
		super();
		this.funding = funding;
		this.loan_status = loan_status;
		this.quarter1 = quarter1;
		this.quarter2 = quarter2;
		this.quarter3 = quarter3;
		this.quarter4 = quarter4;
	}
	/**
	 * @return the funding
	 */
	public String getFunding() {
		return funding;
	}
	/**
	 * @return the loan_status
	 */
	public String getLoan_status() {
		return loan_status;
	}
	/**
	 * @return the quarter1
	 */
	public int getQuarter1() {
		return quarter1;
	}
	/**
	 * @return the quarter2
	 */
	public int getQuarter2() {
		return quarter2;
	}
	/**
	 * @return the quarter3
	 */
	public int getQuarter3() {
		return quarter3;
	}
	/**
	 * @return the quarter4
	 */
	public int getQuarter4() {
		return quarter4;
	}
	/**
	 * @param funding the funding to set
	 */
	public void setFunding(String funding) {
		this.funding = funding;
	}
	/**
	 * @param loan_status the loan_status to set
	 */
	public void setLoan_status(String loan_status) {
		this.loan_status = loan_status;
	}
	/**
	 * @param quarter1 the quarter1 to set
	 */
	public void setQuarter1(int quarter1) {
		this.quarter1 = quarter1;
	}
	/**
	 * @param quarter2 the quarter2 to set
	 */
	public void setQuarter2(int quarter2) {
		this.quarter2 = quarter2;
	}
	/**
	 * @param quarter3 the quarter3 to set
	 */
	public void setQuarter3(int quarter3) {
		this.quarter3 = quarter3;
	}
	/**
	 * @param quarter4 the quarter4 to set
	 */
	public void setQuarter4(int quarter4) {
		this.quarter4 = quarter4;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "FundingDetailedDAO [funding=" + funding + ", loan_status="
				+ loan_status + ", quarter1=" + quarter1 + ", quarter2="
				+ quarter2 + ", quarter3=" + quarter3 + ", quarter4="
				+ quarter4 + "]";
	}
	
	
}
