package io.takima.demo

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name= "socials")
data class Socials(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "social_name") var name: String?,
        @Column(name = "social_link") var link: String?,
        @Column(name = "social_logo") var logo: String?,
        @ManyToOne
        @JsonIgnore
        var user: User?) {
    constructor() : this(null, null, null, null, null)
}
