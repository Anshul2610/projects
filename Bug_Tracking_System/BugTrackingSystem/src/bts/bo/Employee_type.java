package bts.bo;

public class Employee_type {
	private int typeid;
	private String emp_type;
	
	public Employee_type() {
		
	}

	public Employee_type(int typeid, String emp_type) {
		super();
		this.typeid = typeid;
		this.emp_type = emp_type;
	}

	public int getTypeid() {
		return typeid;
	}

	public void setTypeid(int typeid) {
		this.typeid = typeid;
	}

	public String getEmp_type() {
		return emp_type;
	}

	public void setEmp_type(String emp_type) {
		this.emp_type = emp_type;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((emp_type == null) ? 0 : emp_type.hashCode());
		result = prime * result + typeid;
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
		Employee_type other = (Employee_type) obj;
		if (emp_type == null) {
			if (other.emp_type != null)
				return false;
		} else if (!emp_type.equals(other.emp_type))
			return false;
		if (typeid != other.typeid)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Employee_type [typeid=" + typeid + ", emp_type=" + emp_type + "]";
	}
	
	
	
}
