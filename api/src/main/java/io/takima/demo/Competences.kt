package io.takima.demo

import javax.persistence.*

/**
 *
 */
@Entity(name= "competences")
data class Competences(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "competences_name") var competencesName: String?,
        @Column(name = "competences_logo_link") var competencesLogoLink: String?,
        @Column(name = "competences_level") var competencesLevel: String?,
        @ManyToOne
        var user: User?) {
    constructor() : this(null, null, null, null,null)
}
