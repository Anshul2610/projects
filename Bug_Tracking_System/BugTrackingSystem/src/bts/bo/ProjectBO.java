package bts.bo;

import java.util.Date;

public class ProjectBO {
private int project_id;
private String project_name;
private Date start_date;
private Date end_date;
private String project_status;
private int manager_id;
public ProjectBO() {
	super();
}
public ProjectBO(int project_id, String project_name, Date start_date, Date end_date, String project_status,
		int manager_id) {
	super();
	this.project_id = project_id;
	this.project_name = project_name;
	this.start_date = start_date;
	this.end_date = end_date;
	this.project_status = project_status;
	this.manager_id = manager_id;
}
public int getProject_id() {
	return project_id;
}
public void setProject_id(int project_id) {
	this.project_id = project_id;
}
public String getProject_name() {
	return project_name;
}
public void setProject_name(String project_name) {
	this.project_name = project_name;
}
public Date getStart_date() {
	return start_date;
}
public void setStart_date(Date start_date) {
	this.start_date = start_date;
}
public Date getEnd_date() {
	return end_date;
}
public void setEnd_date(Date end_date) {
	this.end_date = end_date;
}
public String getProject_status() {
	return project_status;
}
public void setProject_status(String project_status) {
	this.project_status = project_status;
}
public int getManager_id() {
	return manager_id;
}
public void setManager_id(int manager_id) {
	this.manager_id = manager_id;
}
@Override
public String toString() {
	return "ProjectBO [project_id=" + project_id + ", project_name=" + project_name + ", start_date=" + start_date
			+ ", end_date=" + end_date + ", project_status=" + project_status + ", manager_id=" + manager_id + "]";
}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((end_date == null) ? 0 : end_date.hashCode());
	result = prime * result + manager_id;
	result = prime * result + project_id;
	result = prime * result + ((project_name == null) ? 0 : project_name.hashCode());
	result = prime * result + ((project_status == null) ? 0 : project_status.hashCode());
	result = prime * result + ((start_date == null) ? 0 : start_date.hashCode());
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
	ProjectBO other = (ProjectBO) obj;
	if (end_date == null) {
		if (other.end_date != null)
			return false;
	} else if (!end_date.equals(other.end_date))
		return false;
	if (manager_id != other.manager_id)
		return false;
	if (project_id != other.project_id)
		return false;
	if (project_name == null) {
		if (other.project_name != null)
			return false;
	} else if (!project_name.equals(other.project_name))
		return false;
	if (project_status == null) {
		if (other.project_status != null)
			return false;
	} else if (!project_status.equals(other.project_status))
		return false;
	if (start_date == null) {
		if (other.start_date != null)
			return false;
	} else if (!start_date.equals(other.start_date))
		return false;
	return true;
}


}
