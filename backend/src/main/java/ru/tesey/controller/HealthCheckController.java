package ru.tesey.controller;

import static org.springframework.http.ResponseEntity.ok;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * HealthCheck.
 *
 * @author Sergey_Pushkin
 */
@RestController
@Slf4j
public class HealthCheckController {

    @GetMapping("/health-check")
    public ResponseEntity<Void> healthCheck() {
        log.debug("Get health check");
        return ok().build();
    }
}
