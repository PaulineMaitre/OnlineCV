package io.takima.demo.config

import org.springframework.stereotype.Component

@Component
class Mail {
    lateinit var content: String
    lateinit var contact: String
}
