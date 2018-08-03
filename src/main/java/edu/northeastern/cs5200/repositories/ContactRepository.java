package edu.northeastern.cs5200.repositories;

import org.springframework.data.repository.CrudRepository;

import edu.northeastern.cs5200.model.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}
