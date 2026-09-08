export type MountStepExplanation = {
  context: string
  steps: string[]
  result: string
  watch: string
}

export type MountExplanationMap = Record<string, MountStepExplanation>
