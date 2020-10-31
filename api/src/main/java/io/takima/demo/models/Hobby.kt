package io.takima.demo.models

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name = "hobby")
data class Hobby(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "hobby_name") var name: String?,
        @Column(name = "hobby_logo") var logo: String?,
        @Column(name = "hobby_description") var description: String?,
        @ManyToOne
        @JsonIgnore
        var user: User?){
    constructor() :this(null,null, null,null, null)
}
