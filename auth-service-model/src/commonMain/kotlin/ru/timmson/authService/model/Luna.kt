package ru.timmson.authService.model

import kotlin.js.JsExport

@JsExport
fun isValidCardNumber(number: String): Boolean {
    if (number.length != 16) return false
    var sum = 0
    for (i in number.length - 1 downTo 0) {
        var digit = number[i] - '0'
        if (i % 2 == 0) {
            digit *= 2
            if (digit > 9) digit -= 9
        }
        sum += digit
    }
    return sum % 10 == 0
}
