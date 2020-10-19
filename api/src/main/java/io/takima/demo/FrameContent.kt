package io.takima.demo

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name= "frame_content")
data class FrameContent(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "frame_title") var title: String?,
        @Column(name = "frame_logo_url") var logo: String?,
        @Column(name = "frame_order") var order: Int?,
        @Column(name = "frame_content_item")@OneToMany(mappedBy = "frameContent") var frameItem: List<ContentItem>?,
        @ManyToOne
        @JsonIgnore
        var user: User?) {
    constructor() : this(null, null,null, null, null,null)
}
