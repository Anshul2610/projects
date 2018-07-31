package bts.bo;

import java.sql.Date;

public class Bugs {
	private String bug_id;
	private int project_id;
	private String bug_name;
	private String bug_desc;
	private int bug_priority;
	private Date bugraiseddate;
	private Date bugassigneddate;
	private Date bugsolveddate;
	private String bugsoldetails;
	private int emp_id;
	private String bugstatus;
	
	public Bugs() {
		
	}

	public Bugs(String bug_id, int project_id, String bug_name, String bug_desc, int bug_priority, Date bugraiseddate,
			Date bugassigneddate, Date bugsolveddate, String bugsoldetails, int emp_id, String bugstatus) {
		super();
		this.bug_id = bug_id;
		this.project_id = project_id;
		this.bug_name = bug_name;
		this.bug_desc = bug_desc;
		this.bug_priority = bug_priority;
		this.bugraiseddate = bugraiseddate;
		this.bugassigneddate = bugassigneddate;
		this.bugsolveddate = bugsolveddate;
		this.bugsoldetails = bugsoldetails;
		this.emp_id = emp_id;
		this.bugstatus = bugstatus;
	}

	public String getBug_id() {
		return bug_id;
	}

	public void setBug_id(String bug_id) {
		this.bug_id = bug_id;
	}

	public int getProject_id() {
		return project_id;
	}

	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}

	public String getBug_name() {
		return bug_name;
	}

	public void setBug_name(String bug_name) {
		this.bug_name = bug_name;
	}

	public String getBug_desc() {
		return bug_desc;
	}

	public void setBug_desc(String bug_desc) {
		this.bug_desc = bug_desc;
	}

	public int getBug_priority() {
		return bug_priority;
	}

	public void setBug_priority(int bug_priority) {
		this.bug_priority = bug_priority;
	}

	public Date getBugraiseddate() {
		return bugraiseddate;
	}

	public void setBugraiseddate(Date bugraiseddate) {
		this.bugraiseddate = bugraiseddate;
	}

	public Date getBugassigneddate() {
		return bugassigneddate;
	}

	public void setBugassigneddate(Date bugassigneddate) {
		this.bugassigneddate = bugassigneddate;
	}

	public Date getBugsolveddate() {
		return bugsolveddate;
	}

	public void setBugsolveddate(Date bugsolveddate) {
		this.bugsolveddate = bugsolveddate;
	}

	public String getBugsoldetails() {
		return bugsoldetails;
	}

	public void setBugsoldetails(String bugsoldetails) {
		this.bugsoldetails = bugsoldetails;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}

	public String getBugstatus() {
		return bugstatus;
	}

	public void setBugstatus(String bugstatus) {
		this.bugstatus = bugstatus;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((bug_desc == null) ? 0 : bug_desc.hashCode());
		result = prime * result + ((bug_id == null) ? 0 : bug_id.hashCode());
		result = prime * result + ((bug_name == null) ? 0 : bug_name.hashCode());
		result = prime * result + bug_priority;
		result = prime * result + ((bugassigneddate == null) ? 0 : bugassigneddate.hashCode());
		result = prime * result + ((bugraiseddate == null) ? 0 : bugraiseddate.hashCode());
		result = prime * result + ((bugsoldetails == null) ? 0 : bugsoldetails.hashCode());
		result = prime * result + ((bugsolveddate == null) ? 0 : bugsolveddate.hashCode());
		result = prime * result + ((bugstatus == null) ? 0 : bugstatus.hashCode());
		result = prime * result + emp_id;
		result = prime * result + project_id;
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
		Bugs other = (Bugs) obj;
		if (bug_desc == null) {
			if (other.bug_desc != null)
				return false;
		} else if (!bug_desc.equals(other.bug_desc))
			return false;
		if (bug_id == null) {
			if (other.bug_id != null)
				return false;
		} else if (!bug_id.equals(other.bug_id))
			return false;
		if (bug_name == null) {
			if (other.bug_name != null)
				return false;
		} else if (!bug_name.equals(other.bug_name))
			return false;
		if (bug_priority != other.bug_priority)
			return false;
		if (bugassigneddate == null) {
			if (other.bugassigneddate != null)
				return false;
		} else if (!bugassigneddate.equals(other.bugassigneddate))
			return false;
		if (bugraiseddate == null) {
			if (other.bugraiseddate != null)
				return false;
		} else if (!bugraiseddate.equals(other.bugraiseddate))
			return false;
		if (bugsoldetails == null) {
			if (other.bugsoldetails != null)
				return false;
		} else if (!bugsoldetails.equals(other.bugsoldetails))
			return false;
		if (bugsolveddate == null) {
			if (other.bugsolveddate != null)
				return false;
		} else if (!bugsolveddate.equals(other.bugsolveddate))
			return false;
		if (bugstatus == null) {
			if (other.bugstatus != null)
				return false;
		} else if (!bugstatus.equals(other.bugstatus))
			return false;
		if (emp_id != other.emp_id)
			return false;
		if (project_id != other.project_id)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Bugs [bug_id=" + bug_id + ", project_id=" + project_id + ", bug_name=" + bug_name + ", bug_desc="
				+ bug_desc + ", bug_priority=" + bug_priority + ", bugraiseddate=" + bugraiseddate
				+ ", bugassigneddate=" + bugassigneddate + ", bugsolveddate=" + bugsolveddate + ", bugsoldetails="
				+ bugsoldetails + ", emp_id=" + emp_id + ", bugstatus=" + bugstatus + "]";
	}
	
	
	
}
