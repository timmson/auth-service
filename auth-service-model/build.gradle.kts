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
        commonTest {
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

    macosArm64("native") {
        binaries {
            executable()
        }
    }

}
