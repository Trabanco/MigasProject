package com.example.migas.api;

import com.example.migas.models.Product;
import com.example.migas.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/v1/product" )

public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;

    }

    @GetMapping("")
    public List<Product> index() {

        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable Long id){
        return productRepository.findById(id).get();

    }
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody Product product){
        return ResponseEntity.ok().body(productRepository.save(product));

    }
    @DeleteMapping ("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        if (productRepository.findById(id).isPresent()){
            productRepository.deleteById(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
        return ResponseEntity.badRequest().body("no se pudo eliminar");
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Product product, Long id){
        return ResponseEntity.ok().body(productRepository.save(product));
    }
}
