package ru.timmson.authService.controller

import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.context.annotation.Import
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import ru.timmson.authService.security.TestWebSecurityConfig

@ExtendWith(MockitoExtension::class)
@Import(TestWebSecurityConfig::class)
@WebMvcTest(controllers = [HealthCheckController::class])
class HealthCheckControllerShould {

    @Autowired
    private lateinit var mockMvc: MockMvc


    @Test
    fun healthcheck() {
        val expected = "OK"

        val result = mockMvc.get("/api/v1/private/healthcheck")
        result.andExpect { status { isOk() } }.andExpect { content { string(expected) } }
    }

}
