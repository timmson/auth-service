plugins {
    kotlin("multiplatform")
}

val junitVersion: String by project

repositories {
    mavenCentral()
}

kotlin {
    sourceSets {
        all {
            languageSettings.apply {
                optIn("kotlin.js.ExperimentalJsExport")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
    }

    js(IR) {
        moduleName = "auth-service-model"
        binaries.library()
        nodejs {

        }
        generateTypeScriptDefinitions()
    }

    jvm {

    }

    macosX64("native") {
        binaries {
            executable()
        }
    }

}
