package net.progruzovik.inspector.model

import com.fasterxml.jackson.annotation.JsonCreator
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.DBRef

data class Quest(
    @Id val id: String = "",
    val title: String = "",
    val description: String = "",

    @DBRef var firstChapter: Chapter? = null
) {

    companion object {
        @JsonCreator
        @JvmStatic
        @Suppress("unused")
        fun createReference(id: String) = Quest(id)
    }
}
