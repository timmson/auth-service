plugins {
    kotlin("multiplatform")
}

kotlin {
    sourceSets {
        all {
            languageSettings.apply {
                optIn("kotlin.js.ExperimentalJsExport")
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
}
