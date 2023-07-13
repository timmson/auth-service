package ru.timmson.authService.model

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LunaShould {

    @Test
    fun success_whenNumberIsValid() {
        val number = "2200770212727079"

        val result = isValidCardNumber(number)

        assertTrue(result)
    }

    @Test
    fun fail_whenNumberIsEmpty() {
        val number = ""

        val result = isValidCardNumber(number)

        assertFalse(result)
    }

    @Test
    fun fail_whenNumberIsInvalid() {
        val number = "1234567890123457"

        val result = isValidCardNumber(number)

        assertFalse(result)
    }

}
