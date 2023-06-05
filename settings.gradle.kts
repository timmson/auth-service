rootProject.name = "auth-service"

pluginManagement {
    val kotlinVersion: String by settings
    val springBootVersion: String by settings
    val springDependencyManagementPluginVersion: String by settings

    repositories {
        mavenCentral()
    }

    plugins {
        id("io.spring.dependency-management") version springDependencyManagementPluginVersion
        kotlin("jvm") version kotlinVersion
        kotlin("plugin.spring") version kotlinVersion
        id("org.springframework.boot") version springBootVersion
    }
}

include("feeder-web")
