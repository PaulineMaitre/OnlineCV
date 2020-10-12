package io.takima.demo

import javax.persistence.*

/**
 *
 */
@Entity(name= "frame_content")
data class FrameContent(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "frame_title") var frameTitle: String?,
        @Column(name = "frame_logo_url") var frameLogoURL: String?,
        @Column(name = "frame_content_item")@OneToMany var frameContentItem: List<ContentItem>?,
        @ManyToOne
        var user: User?) {
    constructor() : this(null, null, null, null,null)
}
