package net.progruzovik.inspector.repository

import net.progruzovik.inspector.model.Quest
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "data")
interface QuestRepository : CrudRepository<Quest, String>
