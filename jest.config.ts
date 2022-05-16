import type { Config } from '@jest/types'
import { getJestProjects } from '@nrwl/jest'

const config: Config.InitialOptions = {
  projects: getJestProjects() as Config.InitialOptions['projects'],
}

export default config
