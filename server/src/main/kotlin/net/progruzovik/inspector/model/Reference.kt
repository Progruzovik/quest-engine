package net.progruzovik.inspector.model

import org.springframework.data.mongodb.core.mapping.DBRef

data class Reference(
        val text: String = "",
        @DBRef var chapter: Chapter? = null
)
