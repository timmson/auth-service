package ru.timmson.authService.model

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class LunaShould {

    @Test
    fun success_whenNumberIsValid() {
        val number = "1234567890123456"

        val result = isValidLuna(number)

        assertTrue(result)
    }

    @Test
    fun fail_whenNumberIsEmpty() {
        val number = ""

        val result = isValidLuna(number)

        assertFalse(result)
    }

    @Test
    fun fail_whenNumberIsInvalid() {
        val number = "1234567890123457"

        val result = isValidLuna(number)

        assertFalse(result)
    }

}
