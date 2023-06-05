package ru.timmson.authService.security

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.web.SecurityFilterChain

@Configuration
open class TestWebSecurityConfig {

    @Bean
    open fun filterChain(http: HttpSecurity): SecurityFilterChain =
        http.authorizeHttpRequests().anyRequest().permitAll().and().csrf().disable().build()

}
