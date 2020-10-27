package io.takima.demo.models

import com.fasterxml.jackson.annotation.JsonIgnore
import java.util.*
import javax.persistence.*

/**
 *
 */
@Entity(name= "content_item")
data class ContentItem(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id var id: Long?,
        @Column(name = "item_title") var title: String?,
        @Column(name = "item_logo_url") var logo: String?,
        @Column(name = "item_period") var period: String?,
        @Column(name = "item_order") var order: Int?,
        @Column(name = "item_location") var location: String?,
        @Column(name = "item_content") var content: String?,
        @ManyToOne
        @JsonIgnore
        var frameContent: FrameContent?) {
    constructor() : this(null, null,null,null,null, null, null, null)
}
