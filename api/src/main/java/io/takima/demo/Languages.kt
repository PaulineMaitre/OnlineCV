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
        @Column(name = "language_name") var name: String?,
        @Column(name = "language_level") var logo: String?,
        @Column(name = "language_flag") var level: String?,
        @ManyToOne
        @JsonIgnore
        var user: User?){
    constructor() :this(null,null,null,null,null)
}
