package io.takima.demo.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

@Component
class EmailConfig {
    @Value("\${spring.mail.host}")
    var host: String? = null

    @Value("\${spring.mail.port}")
    var port: Int? = 0

    @Value("\${spring.mail.username}")
    var username: String? = null

    @Value("\${spring.mail.password}")
    var password: String? = null
}
