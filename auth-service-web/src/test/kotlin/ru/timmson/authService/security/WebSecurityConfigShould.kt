package ru.timmson.authService.security

import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletRequest
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.junit.jupiter.MockitoExtension

@ExtendWith(MockitoExtension::class)
class WebSecurityConfigShould {

    private lateinit var webSecurityConfig: WebSecurityConfig

    @Mock
    private lateinit var request: HttpServletRequest

    @Mock
    private lateinit var cookie: Cookie

    @BeforeEach
    fun setUp() {
        webSecurityConfig = WebSecurityConfig()
    }

    @Test
    fun auth_whenTokensAreEqual() {
        `when`(cookie.name).thenReturn("token")
        `when`(cookie.value).thenReturn("Y")
        `when`(request.cookies).thenReturn(arrayOf(cookie))

        val actual = webSecurityConfig.isAuth(request, "Y")

        assertTrue(actual)
    }
}
