package net.progruzovik.inspector.repository

import net.progruzovik.inspector.model.Chapter
import org.springframework.data.repository.CrudRepository

interface ChapterRepository : CrudRepository<Chapter, String>
