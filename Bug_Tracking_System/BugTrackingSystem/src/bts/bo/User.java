package bts.bo;

public class User {
 private String uname;
private String pass;
public User() {
	super();
}
public User(String uname, String pass) {
	super();
	this.uname = uname;
	this.pass = pass;
}
public String getUname() {
	return uname;
}
public void setUname(String uname) {
	this.uname = uname;
}
public String getPass() {
	return pass;
}
public void setPass(String pass) {
	this.pass = pass;
}
@Override
public String toString() {
	return "User [uname=" + uname + ", pass=" + pass + "]";
}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((pass == null) ? 0 : pass.hashCode());
	result = prime * result + ((uname == null) ? 0 : uname.hashCode());
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
	User other = (User) obj;
	if (pass == null) {
		if (other.pass != null)
			return false;
	} else if (!pass.equals(other.pass))
		return false;
	if (uname == null) {
		if (other.uname != null)
			return false;
	} else if (!uname.equals(other.uname))
		return false;
	return true;
}

}
