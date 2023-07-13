import ru.timmson.authService.model.isValidCardNumber

fun main(args: Array<String>) {
    println("It is CardNumber checker!")
    val valid = if (isValidCardNumber(args.first())) "valid" else "invalid"
    println("Your card number ${args.first()} is $valid")
}
