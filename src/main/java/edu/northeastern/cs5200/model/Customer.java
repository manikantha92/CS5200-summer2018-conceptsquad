package edu.northeastern.cs5200.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

@Entity
public class Customer extends Person {

	private int booking;
	private Boolean registered;
	
	@OneToMany(mappedBy = "customer")
	private List<Booking> bookings = new ArrayList<>();
	
	public int getBooking() {
		return booking;
	}
	public void setBooking(int booking) {
		this.booking = booking;
	}
	public Boolean getRegistered() {
		return registered;
	}
	public void setRegistered(Boolean registered) {
		this.registered = registered;
	}

}
