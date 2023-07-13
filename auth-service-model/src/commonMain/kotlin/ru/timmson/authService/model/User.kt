package ru.timmson.authService.model

import kotlin.js.JsExport

@JsExport
class User {
    var id: Int? = 0
    var firstName: String? = ""
    var lastName: String? = ""
}
