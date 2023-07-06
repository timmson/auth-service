package ru.timmson.authService.controller

import com.fasterxml.jackson.databind.ObjectMapper
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.junit.jupiter.MockitoExtension
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.context.annotation.Import
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.get
import ru.timmson.authService.model.MyUser
import ru.timmson.authService.security.TestWebSecurityConfig

@ExtendWith(MockitoExtension::class)
@Import(TestWebSecurityConfig::class)
@WebMvcTest(controllers = [HealthCheckController::class])
class HealthCheckControllerShould {

    @Autowired
    private lateinit var mockMvc: MockMvc

    @Autowired
    private lateinit var objectMapper: ObjectMapper

    @Test
    fun healthcheck() {
        val expected = objectMapper.writeValueAsString(MyUser(1,"Harry", "Potter"))

        val result = mockMvc.get("/api/v1/private/healthcheck")
        result.andExpect { status { isOk() } }.andExpect { content { json(expected) } }
    }

}
