plugins {
    kotlin("jvm") apply false
    kotlin("plugin.spring") apply false
    kotlin("multiplatform") apply false
    id("org.springframework.boot") apply false
    id("io.spring.dependency-management") apply false
}
subprojects {
    repositories {
        mavenCentral()
    }

    group = "ru.timmson.auth-service"
    version = "1.0"

}
