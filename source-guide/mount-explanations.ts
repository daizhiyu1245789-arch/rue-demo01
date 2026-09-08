import type { MountExplanationMap, MountStepExplanation } from './types'
import { mountExplanations001_015 } from './mount-explanations-001-015'
import { mountExplanations016_030 } from './mount-explanations-016-030'
import { mountExplanations031_045 } from './mount-explanations-031-045'
import { mountExplanations046_060 } from './mount-explanations-046-060'
import { mountExplanations061_075 } from './mount-explanations-061-075'
import { mountExplanations076_090 } from './mount-explanations-076-090'
import { mountExplanations091_105 } from './mount-explanations-091-105'

export type { MountExplanationMap, MountStepExplanation }

export const mountExplanations: MountExplanationMap = {
  ...mountExplanations001_015,
  ...mountExplanations016_030,
  ...mountExplanations031_045,
  ...mountExplanations046_060,
  ...mountExplanations061_075,
  ...mountExplanations076_090,
  ...mountExplanations091_105,
}
