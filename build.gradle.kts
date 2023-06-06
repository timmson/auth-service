import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm")
    kotlin("plugin.spring") apply false
    id("org.springframework.boot") apply false
    id("io.spring.dependency-management") apply false
}

val springVersion: String by project
val springBootVersion: String by project
val kotlinVersion: String by project

val mockWebserverVersion: String by project
val junitVersion: String by project
val mockitoVersion: String by project
val mockitoKotlinVersion: String by project

subprojects {
    apply(plugin = "kotlin")
    apply(plugin = "io.spring.dependency-management")

    group = "ru.timmson.authService"
    version = "1.0"

    repositories {
        mavenCentral()
    }

    dependencies {
        implementation(kotlin("stdlib-jdk8"))

        implementation("org.springframework:spring-context:$springVersion")

        testImplementation("org.junit.jupiter:junit-jupiter-api:$junitVersion")
        testImplementation("org.junit.jupiter:junit-jupiter-engine:$junitVersion")

        testImplementation("org.mockito:mockito-core:$mockitoVersion")
        testImplementation("org.mockito.kotlin:mockito-kotlin:$mockitoKotlinVersion")
        testImplementation("org.mockito:mockito-junit-jupiter:$mockitoVersion")
    }

    tasks.withType<KotlinCompile> {
        kotlinOptions {
            freeCompilerArgs = listOf("-Xjsr305=strict")
            jvmTarget = "17"
        }
    }

    tasks.withType<Test> {
        useJUnitPlatform()
    }

}
