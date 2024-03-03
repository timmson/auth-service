package ru.timmson.authService.security

import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletRequest
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authorization.AuthorizationDecision
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain


@Configuration
class WebSecurityConfig {

    @Bean
    fun filterChain(http: HttpSecurity, authenticationService: AuthenticationService): SecurityFilterChain =
        http
            .authorizeHttpRequests {
                it.requestMatchers("/api/v1/private/**").access { _, context ->
                        AuthorizationDecision(isAuth(context.request, authenticationService.token))
                    }.anyRequest().permitAll()
            }.csrf { it.disable() }
            .build()

    internal fun isAuth(request: HttpServletRequest, token: String): Boolean =
        (request.cookies ?: emptyArray<Cookie>()).any { it.name == "token" && it.value == token }

}
