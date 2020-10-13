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
        @Column(name = "social_network")@OneToMany var socialNetwork: List<Socials>?,
        @Column(name = "languages")@OneToMany var languages: List<Languages>?,
        @Column(name = "skills")@OneToMany var skills: List<Skill>?,
        @Column(name = "frame_content")@OneToMany var frameContent: List<FrameContent>?) {
    constructor() : this(null, null, null, null, null,null,null,null,null,null,null, null)
}
