package ru.timmson.authService.security

import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletRequest
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authorization.AuthorizationDecision
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain

@Configuration
open class WebSecurityConfig {

    @Bean
    open fun filterChain(http: HttpSecurity, authenticationService: AuthenticationService): SecurityFilterChain =
        http
            .authorizeHttpRequests().requestMatchers("/api/v1/authenticate/**").permitAll()
            .and()
            .authorizeHttpRequests().requestMatchers("/api/v1/public/**").permitAll()
            .and()
            .authorizeHttpRequests().requestMatchers("/api/v1/private/**")
            .access { _, context -> AuthorizationDecision(isAuth(context.request, authenticationService.token)) }
            .and().csrf().disable().build()


    internal fun isAuth(request: HttpServletRequest, token: String): Boolean =
        (request.cookies ?: emptyArray<Cookie>()).any { it.name == "token" && it.value == token }

}
