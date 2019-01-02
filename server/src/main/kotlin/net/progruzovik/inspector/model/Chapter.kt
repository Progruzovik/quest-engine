package net.progruzovik.inspector.model

import com.fasterxml.jackson.annotation.JsonCreator
import org.springframework.data.annotation.Id

data class Chapter(
        @Id val id: String = "",
        val text: String = "",
        val references: List<Reference> = emptyList()
) {

    companion object {
        @JsonCreator
        @JvmStatic
        @Suppress("unused")
        fun createReference(id: String) = Chapter(id)
    }
}
