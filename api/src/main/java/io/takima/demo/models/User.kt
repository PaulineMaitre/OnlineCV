package io.takima.demo.models

import java.util.*
import javax.persistence.*

/**
 *
 */
@Entity(name = "users")
data class User(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "first_name") var firstName: String?,
        @Column(name = "last_name") var lastName: String?,
        @Column(name = "birth_date") var birthDate: Date?,
        @Column(name = "phone_number") var phoneNumber: String?,
        @Column(name = "address") var address: String?,
        @Column(name = "bio") var bio: String?,
        @Column(name = "email") var email: String?,
        @Column(name = "picture") var picture: String?,
        @Column(name = "socials")
        @OneToMany(mappedBy = "user")
        var socialLink: List<Socials>?,

        @Column(name = "languages")
        @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL])
        var languages: List<Language>?,

        @Column(name = "hobbies")
        @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL])
        var hobbies: List<Hobby>?,

        @Column(name = "skills")
        @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL])
        var skills: List<Skill>?,

        @Column(name = "frame_content")
        @OneToMany(mappedBy = "user", cascade = [CascadeType.ALL]) //.ALL ==> .DELETE ? TODO : Rechercher doc !
        var frame: List<FrameContent>?) {
    constructor() : this(null,null, null, null, null,null,null,null,null,null,null, null, null, null)
}
