package io.takima.demo

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name ="languages")
data class Languages(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "language_name") var languageName: String?,
        @Column(name = "language_level") var languageLevel: String?,
        @Column(name = "language_flag") var languageFlag: String?,
        @ManyToOne
        @JsonIgnore
        var user: User?){
    constructor() :this(null,null,null,null,null)
}
