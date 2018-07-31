package bts.bo;

import java.util.Date;

public class Employee {
private int empId;
private String fname;
private String lname;
private Date dob; 
private String houseNo;
private String streetName;
private String stateName;
private String countryName;
private int pinCode;
private int contactNo;
private String mailId;
private String securityQues;
private String securityQuesId;
private String securityQuesAns;
private Date regDate;
private String password;
private int TypeId;
public Employee() {
	super();
}

public Employee(int empId, String fname, String lname, Date dob, String houseNo, String streetName, String stateName,
		String countryName, int pinCode, int contactNo, String mailId, String securityQues, String securityQuesId,
		String securityQuesAns, Date regDate, String password, int typeId) {
	super();
	this.empId = empId;
	this.fname = fname;
	this.lname = lname;
	this.dob = dob;
	this.houseNo = houseNo;
	this.streetName = streetName;
	this.stateName = stateName;
	this.countryName = countryName;
	this.pinCode = pinCode;
	this.contactNo = contactNo;
	this.mailId = mailId;
	this.securityQues = securityQues;
	this.securityQuesId = securityQuesId;
	this.securityQuesAns = securityQuesAns;
	this.regDate = regDate;
	this.password = password;
	this.TypeId = typeId;
}

public int getEmpId() {
	return empId;
}
public void setEmpId(int empId) {
	this.empId = empId;
}
public String getFname() {
	return fname;
}
public void setFname(String fname) {
	this.fname = fname;
}
public String getLname() {
	return lname;
}
public void setLname(String lname) {
	this.lname = lname;
}
public Date getDob() {
	return dob;
}
public void setDob(Date dob) {
	this.dob = dob;
}
public String getHouseNo() {
	return houseNo;
}
public void setHouseNo(String houseNo) {
	this.houseNo = houseNo;
}
public String getStreetName() {
	return streetName;
}
public void setStreetName(String streetName) {
	this.streetName = streetName;
}
public String getStateName() {
	return stateName;
}
public void setStateName(String stateName) {
	this.stateName = stateName;
}
public String getCountryName() {
	return countryName;
}
public void setCountryName(String countryName) {
	this.countryName = countryName;
}
public int getPinCode() {
	return pinCode;
}
public void setPinCode(int pinCode) {
	this.pinCode = pinCode;
}
public int getContactNo() {
	return contactNo;
}
public void setContactNo(int contactNo) {
	this.contactNo = contactNo;
}
public String getMailId() {
	return mailId;
}
public void setMailId(String mailId) {
	this.mailId = mailId;
}
public String getSecurityQues() {
	return securityQues;
}
public void setSecurityQues(String securityQues) {
	this.securityQues = securityQues;
}

public String getSecurityQuesId() {
	return securityQuesId;
}

public void setSecurityQuesId(String securityQuesId) {
	this.securityQuesId = securityQuesId;
}

public String getSecurityQuesAns() {
	return securityQuesAns;
}
public void setSecurityQuesAns(String securityQuesAns) {
	this.securityQuesAns = securityQuesAns;
}
public Date getRegDate() {
	return regDate;
}
public void setRegDate(Date regDate) {
	this.regDate = regDate;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public int getTypeId() {
	return TypeId;
}
public void setTypeId(int typeId) {
	TypeId = typeId;
}

@Override
public String toString() {
	return "Employee [empId=" + empId + ", fname=" + fname + ", lname=" + lname + ", dob=" + dob + ", houseNo="
			+ houseNo + ", streetName=" + streetName + ", stateName=" + stateName + ", countryName=" + countryName
			+ ", pinCode=" + pinCode + ", contactNo=" + contactNo + ", mailId=" + mailId + ", securityQues="
			+ securityQues + ", securityQuesId=" + securityQuesId + ", securityQuesAns=" + securityQuesAns
			+ ", regDate=" + regDate + ", password=" + password + ", TypeId=" + TypeId + "]";
}

@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + TypeId;
	result = prime * result + contactNo;
	result = prime * result + ((countryName == null) ? 0 : countryName.hashCode());
	result = prime * result + ((dob == null) ? 0 : dob.hashCode());
	result = prime * result + empId;
	result = prime * result + ((fname == null) ? 0 : fname.hashCode());
	result = prime * result + ((houseNo == null) ? 0 : houseNo.hashCode());
	result = prime * result + ((lname == null) ? 0 : lname.hashCode());
	result = prime * result + ((mailId == null) ? 0 : mailId.hashCode());
	result = prime * result + ((password == null) ? 0 : password.hashCode());
	result = prime * result + pinCode;
	result = prime * result + ((regDate == null) ? 0 : regDate.hashCode());
	result = prime * result + ((securityQues == null) ? 0 : securityQues.hashCode());
	result = prime * result + ((securityQuesAns == null) ? 0 : securityQuesAns.hashCode());
	result = prime * result + ((securityQuesId == null) ? 0 : securityQuesId.hashCode());
	result = prime * result + ((stateName == null) ? 0 : stateName.hashCode());
	result = prime * result + ((streetName == null) ? 0 : streetName.hashCode());
	return result;
}

@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Employee other = (Employee) obj;
	if (TypeId != other.TypeId)
		return false;
	if (contactNo != other.contactNo)
		return false;
	if (countryName == null) {
		if (other.countryName != null)
			return false;
	} else if (!countryName.equals(other.countryName))
		return false;
	if (dob == null) {
		if (other.dob != null)
			return false;
	} else if (!dob.equals(other.dob))
		return false;
	if (empId != other.empId)
		return false;
	if (fname == null) {
		if (other.fname != null)
			return false;
	} else if (!fname.equals(other.fname))
		return false;
	if (houseNo == null) {
		if (other.houseNo != null)
			return false;
	} else if (!houseNo.equals(other.houseNo))
		return false;
	if (lname == null) {
		if (other.lname != null)
			return false;
	} else if (!lname.equals(other.lname))
		return false;
	if (mailId == null) {
		if (other.mailId != null)
			return false;
	} else if (!mailId.equals(other.mailId))
		return false;
	if (password == null) {
		if (other.password != null)
			return false;
	} else if (!password.equals(other.password))
		return false;
	if (pinCode != other.pinCode)
		return false;
	if (regDate == null) {
		if (other.regDate != null)
			return false;
	} else if (!regDate.equals(other.regDate))
		return false;
	if (securityQues == null) {
		if (other.securityQues != null)
			return false;
	} else if (!securityQues.equals(other.securityQues))
		return false;
	if (securityQuesAns == null) {
		if (other.securityQuesAns != null)
			return false;
	} else if (!securityQuesAns.equals(other.securityQuesAns))
		return false;
	if (securityQuesId == null) {
		if (other.securityQuesId != null)
			return false;
	} else if (!securityQuesId.equals(other.securityQuesId))
		return false;
	if (stateName == null) {
		if (other.stateName != null)
			return false;
	} else if (!stateName.equals(other.stateName))
		return false;
	if (streetName == null) {
		if (other.streetName != null)
			return false;
	} else if (!streetName.equals(other.streetName))
		return false;
	return true;
}


}
