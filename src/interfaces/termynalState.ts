import { Ref } from "vue"
import { Line } from "./line"

export interface TermynalState {
  startDelay: Ref<number>
  typeDelay: Ref<number>
  lineDelay: Ref<number>
  progressLength: Ref<number>
  progressChar: Ref<string>
  progressPercent: Ref<number>
  progressDelay: Ref<number>
  spinnerType: Ref<string>
  spinnerFrameDelay: Ref<number>
  spinnerDuration: Ref<number>
  cursor: Ref<string>
  fastForward: Ref<boolean>
  registerLine: (line: Line) => void
}
