package bts.bo;

public class ProjMembersBO {
	private int id;
	private int project_id;
	private int emp_id;
	public ProjMembersBO() {
		super();
	}
	public ProjMembersBO(int id, int project_id, int emp_id) {
		super();
		this.id = id;
		this.project_id = project_id;
		this.emp_id = emp_id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getProject_id() {
		return project_id;
	}
	public void setProject_id(int project_id) {
		this.project_id = project_id;
	}
	public int getEmp_id() {
		return emp_id;
	}
	public void setEmp_id(int emp_id) {
		this.emp_id = emp_id;
	}
	@Override
	public String toString() {
		return "ProjMembers [id=" + id + ", project_id=" + project_id + ", emp_id=" + emp_id + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + emp_id;
		result = prime * result + id;
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
		ProjMembersBO other = (ProjMembersBO) obj;
		if (emp_id != other.emp_id)
			return false;
		if (id != other.id)
			return false;
		if (project_id != other.project_id)
			return false;
		return true;
	}
	
}
