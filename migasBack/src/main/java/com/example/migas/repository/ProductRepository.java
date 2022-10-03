package com.example.migas.repository;

import com.example.migas.models.Product;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;




@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
