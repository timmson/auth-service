package ru.timmson.authService.security

import org.springframework.stereotype.Service
import java.util.*

@Service
class AuthenticationService {

    val token: String = UUID.randomUUID().toString()

    fun authenticate(): Pair<Boolean, String> {
        print("Apply request (y/n)? ")
        return (readlnOrNull() ?: "").lowercase().let { input ->
            (input == "y").let {
                Pair(it, if (it) token else "")
            }
        }
    }
}
