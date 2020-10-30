package io.takima.demo.models

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
        @Column(name = "skill_level") var level: Int,
        @ManyToOne
        @JsonIgnore
        var user: User?) {
    constructor() : this(null, null, null, 0,null)
}
