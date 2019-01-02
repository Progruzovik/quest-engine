package net.progruzovik.inspector.repository

import net.progruzovik.inspector.model.Quest
import org.springframework.data.repository.CrudRepository

interface QuestRepository : CrudRepository<Quest, String>
