package ru.timmson.authService.controller

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mockito.`when`
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.boot.test.mock.mockito.MockBean
import org.springframework.context.annotation.Import
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import org.springframework.test.web.servlet.post
import ru.timmson.authService.security.AuthenticationService
import ru.timmson.authService.security.TestWebSecurityConfig

@ExtendWith(MockitoExtension::class)
@Import(TestWebSecurityConfig::class)
@WebMvcTest(controllers = [AuthenticationController::class])
class AuthenticationControllerShould {

    @MockBean
    private lateinit var authenticationService: AuthenticationService

    @Autowired
    private lateinit var mockMvc: MockMvc


    @Test
    fun loginSuccessfully() {
        val expected = "key"

        `when`(authenticationService.authenticate()).thenReturn(Pair(true, expected))
        val result = mockMvc.post("/api/v1/authenticate/login")

        result.andExpect { status { isOk()  } }.andExpect {
            cookie {
                value("token", expected)
                maxAge("token", 86400)
                httpOnly("token", true)
                secure("token", true)
                //same site
            }
        }

    }

    @Test
    fun loginUnsuccessfully() {
        `when`(authenticationService.authenticate()).thenReturn(Pair(false, ""))
        val result = mockMvc.post("/api/v1/authenticate/login")

        result.andExpect { status { isForbidden()} }.andExpect {
            cookie {
                value("token", "")
                maxAge("token", 0)
            }
        }
    }

    @Test
    fun logout() {
        `when`(authenticationService.authenticate()).thenReturn(Pair(false, ""))
        val result = mockMvc.post("/api/v1/authenticate/logout")

        result.andExpect { status { isOk() } }.andExpect {
            cookie {
                value("token", "")
                maxAge("token", 0)
            }
        }
    }
}
