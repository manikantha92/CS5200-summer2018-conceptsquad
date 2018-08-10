package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.EventBooking;

public interface EventBookingRepository extends CrudRepository<EventBooking, Integer>{

}

