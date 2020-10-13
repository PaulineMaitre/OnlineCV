package io.takima.demo

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.*

/**
 *
 */
@Entity(name= "content_item")
data class ContentItem(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "item_title") var itemTitle: String?,
        @Column(name = "item_logo_url") var itemLogoURL: String?,
        @Column(name = "item_content") var itemContent: String?,
        @ManyToOne
        @JsonIgnore
        var frameContent: FrameContent?) {
    constructor() : this(null, null, null, null, null)
}
