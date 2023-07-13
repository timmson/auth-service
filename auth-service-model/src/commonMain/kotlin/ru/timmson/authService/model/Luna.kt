package ru.timmson.authService.model

import kotlin.js.JsExport

@JsExport
fun isValidLuna(number: String): Boolean {
    if (number.length != 16) return false
    var sum: Int = number.last().code
    val parity: Int = number.length % 2
    for (i in number.length - 2 downTo 0) {
        var summand: Int = number[i].code
        if (i % 2 == parity) {
            val product = summand * 2
            summand = if (product > 9) product - 9 else product
        }
        sum += summand
    }
    return sum % 10 == 0
}
