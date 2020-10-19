package io.takima.demo

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name= "skill")
data class Skill(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "skill_name") var name: String?,
        @Column(name = "skill_logo_link") var logo: String?,
        @Column(name = "skill_level") var level: String?,
        @ManyToOne
        @JsonIgnore
        var user: User?) {
    constructor() : this(null, null, null, null,null)
}
