package net.progruzovik.inspector.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.data.repository.init.Jackson2RepositoryPopulatorFactoryBean

@Configuration
open class AppConfig {

    @Bean
    open fun repositoryPopulator(): Jackson2RepositoryPopulatorFactoryBean {
        val repositoryPopulator = Jackson2RepositoryPopulatorFactoryBean()
        repositoryPopulator.setResources(arrayOf(ClassPathResource("data.json")))
        return repositoryPopulator
    }
}
