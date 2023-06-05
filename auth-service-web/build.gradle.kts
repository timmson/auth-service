apply(plugin = "org.springframework.boot")

val springBootVersion: String by project
val springSecurityVersion: String by project
val jakartaVersion: String by project

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web:$springBootVersion")
    implementation("org.springframework.boot:spring-boot-starter-security:$springBootVersion")

    runtimeOnly("jakarta.servlet:jakarta.servlet-api:$jakartaVersion")

    testImplementation("org.springframework.boot:spring-boot-starter-test:$springBootVersion")
    testImplementation("org.springframework.security:spring-security-test:$springSecurityVersion")
}

tasks.getByName<org.springframework.boot.gradle.tasks.bundling.BootJar>("bootJar") {
    this.archiveFileName.set("${archiveBaseName.get()}.${archiveExtension.get()}")
}
