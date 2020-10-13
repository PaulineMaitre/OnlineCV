package io.takima.demo

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
        @Column(name = "phone_number") var phoneNumber: String?,
        @Column(name = "birth_date") var birthDate: Date?,
        @Column(name = "address") var address: String?,
        @Column(name = "bio") var bio: String?,
        @Column(name = "email") var email: String?,
        @Column(name = "socials")@OneToMany(mappedBy = "user") var socialNetwork: List<Socials>?,
        @Column(name = "languages")@OneToMany(mappedBy = "user") var languages: List<Languages>?,
        @Column(name = "skills")@OneToMany(mappedBy = "user") var skills: List<Skill>?,
        @Column(name = "frame_content")@OneToMany(mappedBy = "user") var frameContent: List<FrameContent>?) {
    constructor() : this(null, null, null, null, null,null,null,null,null,null,null, null)
}
