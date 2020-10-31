package io.takima.demo.models

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name = "language")
data class Language(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "language_name") var name: String,
        @Column(name = "language_level") var level: String?,
        @Column(name = "language_flag") var logo: String?,
        @ManyToOne
        @JsonIgnore
        var user: User?){
    constructor() :this(null, "",null,null,null)
}
