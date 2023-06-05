package ru.timmson.authService.security

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test

class AuthenticationServiceShould {

    private lateinit var authenticationService: AuthenticationService

    @BeforeEach
    fun setUp() {
        authenticationService = AuthenticationService()
    }

    @Test
    fun getToken() {
        val token1 = authenticationService.token
        val token2 = authenticationService.token

        assertEquals(token1, token2)
    }
}
