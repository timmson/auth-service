package ru.timmson.authService.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.timmson.authService.model.MyUser

@RestController
@RequestMapping("/api/v1/private")
class HealthCheckController {

    @GetMapping("healthcheck")
    fun healthCheck(): ResponseEntity<MyUser> = ResponseEntity.ok(MyUser().apply {
        id = 1
        firstName = "Harry"
        lastName = "Potter"
    })

}
