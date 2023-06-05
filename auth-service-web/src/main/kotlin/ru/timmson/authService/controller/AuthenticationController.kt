package ru.timmson.authService.controller

import org.springframework.http.HttpHeaders
import org.springframework.http.ResponseCookie
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ru.timmson.authService.security.AuthenticationService

@RestController
@RequestMapping("/api/v1/authenticate/")
class AuthenticationController(
    private val authenticationService: AuthenticationService
) {

    @PostMapping("login")
    fun login(): ResponseEntity<String> =
        authenticationService.authenticate().let {
            when {
                it.first -> ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, setCookie(it.second))
                else -> ResponseEntity.status(403).header(HttpHeaders.SET_COOKIE, unsetCookie())
            }.body("")
        }

    @PostMapping("logout")
    fun logout(): ResponseEntity<String> =
        ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, unsetCookie()).body("")

    private fun setCookie(value: String): String =
        ResponseCookie
            .from("token", value)
            .path("/")
            .maxAge(86400)
            .httpOnly(true)
            .secure(true)
            .sameSite("Strict")
            .build().toString()

    private fun unsetCookie(): String =
        ResponseCookie
            .from("token")
            .path("/")
            .maxAge(0)
            .httpOnly(true)
            .secure(true)
            .sameSite("Strict")
            .build().toString()


}
