package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Event;


public interface EventRepository  extends CrudRepository<Event, Integer>{

}